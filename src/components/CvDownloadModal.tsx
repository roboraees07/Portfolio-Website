import { useEffect, useState } from 'react'
import { Download, Mail, X, CheckCircle, Clock } from 'lucide-react'
import { profile } from '../data/site'
import {
  checkCvStatus,
  hasValidCvAccess,
  isCvApprovalConfigured,
  requestCvDownload,
  saveCvGrant,
  validateCvToken,
} from '../lib/api'
import { SetupNotice } from './SetupNotice'

type Props = {
  open: boolean
  onClose: () => void
}

type Step = 'form' | 'pending' | 'approved' | 'rejected' | 'ready'

export function CvDownloadModal({ open, onClose }: Props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [step, setStep] = useState<Step>('form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const canDownload = hasValidCvAccess()

  useEffect(() => {
    if (!open) return
    if (canDownload) setStep('ready')
  }, [open, canDownload])

  if (!open) return null

  const handleRequest = async () => {
    setError('')
    setLoading(true)
    const res = await requestCvDownload(email, name)
    setLoading(false)
    if (!res.ok) {
      setError(res.error || 'Request failed')
      return
    }
    if (res.alreadyApproved) {
      await handleCheckStatus()
      return
    }
    setMessage(res.message || 'Request sent. Check your inbox after approval.')
    setStep('pending')
  }

  const handleCheckStatus = async () => {
    setError('')
    setLoading(true)
    const res = await checkCvStatus(email)
    setLoading(false)
    if (!res.ok) {
      setError(res.error || 'Could not check status')
      return
    }
    if (res.approved && res.token) {
      saveCvGrant({
        email,
        token: res.token,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      })
      setStep('ready')
      setMessage('Approved! You can download your CV now.')
      return
    }
    if (res.pending) {
      setStep('pending')
      setMessage('Still pending. You will receive an email when approved.')
      return
    }
    if (res.rejected) {
      setStep('rejected')
      return
    }
    setMessage('No request found for this email. Submit a request first.')
    setStep('form')
  }

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = profile.cvPath
    a.download = 'Engr_M_Raees_Azam_CV.pdf'
    a.click()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)' }}
      onClick={onClose}
    >
      <div
        className="glass-card max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl p-6 text-left shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-bold">Download CV</h2>
          <button type="button" onClick={onClose} aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <SetupNotice variant="cv" />

        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Enter your email to request access. You will be notified at{' '}
          <strong>{profile.email}</strong>
          {isCvApprovalConfigured()
            ? '; after approval you receive a download link by email.'
            : '. After manual approval you will receive the CV by email.'}
        </p>

        {step === 'ready' || canDownload ? (
          <div className="mt-6">
            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
              <CheckCircle className="h-5 w-5" />
              Access granted
            </div>
            <button
              type="button"
              onClick={handleDownload}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
              }}
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        ) : (
          <>
            <label className="mt-4 block text-sm font-medium">Your email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@university.edu"
              className="mt-1 w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
            />
            <label className="mt-3 block text-sm font-medium">Name (optional)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1 w-full rounded-xl border px-4 py-2.5 text-sm outline-none"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
            />

            {error && (
              <p className="mt-3 text-sm text-red-500">{error}</p>
            )}
            {message && !error && (
              <p className="mt-3 flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                {step === 'pending' && <Clock className="mt-0.5 h-4 w-4 shrink-0" />}
                {message}
              </p>
            )}

            {step === 'rejected' && (
              <p className="mt-3 text-sm text-red-500">
                This request was not approved. Contact {profile.email} directly.
              </p>
            )}

            <div className="mt-6 flex flex-col gap-2">
              <button
                type="button"
                disabled={loading || !email}
                onClick={handleRequest}
                className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                }}
              >
                <Mail className="h-4 w-4" />
                {loading ? 'Sending…' : 'Request access via email'}
              </button>
              {isCvApprovalConfigured() && (
                <button
                  type="button"
                  disabled={loading || !email}
                  onClick={handleCheckStatus}
                  className="w-full rounded-full border py-3 text-sm font-semibold disabled:opacity-50"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {loading ? 'Checking…' : 'Check approval status'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

/** Validate ?cv_token= from approval email */
export async function applyCvTokenFromUrl(token: string): Promise<boolean> {
  const res = await validateCvToken(token)
  if (res.ok && res.valid) {
    saveCvGrant({
      email: res.email || '',
      token,
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    })
    return true
  }
  return false
}
