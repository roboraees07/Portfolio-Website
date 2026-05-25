import { useState, type FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { sendContactMessage } from '../lib/api'
import { SetupNotice } from './SetupNotice'
import { profile } from '../data/site'

export function ContactForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusText, setStatusText] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('idle')
    setLoading(true)
    const res = await sendContactMessage({ email, subject, message, name })
    setLoading(false)
    if (res.ok) {
      setStatus('success')
      setStatusText(res.message || 'Message sent! You will receive a confirmation email.')
      setSubject('')
      setMessage('')
    } else {
      setStatus('error')
      setStatusText(res.error || 'Failed to send. Try emailing directly.')
    }
  }

  const inputClass =
    'mt-1 w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500/40'
  const inputStyle = { borderColor: 'var(--border)', background: 'var(--bg-elevated)', color: 'var(--text)' }

  return (
    <form onSubmit={handleSubmit} className="mt-8 text-left">
      <SetupNotice variant="contact" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Your email *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            style={inputStyle}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            style={inputStyle}
            placeholder="Optional"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium">Subject *</label>
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
          style={inputStyle}
          placeholder="Collaboration / Job / PhD inquiry"
        />
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium">Message *</label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          style={inputStyle}
          placeholder="Write your message…"
        />
      </div>

      {status === 'success' && (
        <p className="mt-3 flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
          <CheckCircle className="h-4 w-4" />
          {statusText}
        </p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-500">{statusText}</p>
      )}

      <button
        type="submit"
        disabled={loading || !email}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white disabled:opacity-50 sm:w-auto sm:px-8"
        style={{
          background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
        }}
      >
        <Send className="h-4 w-4" />
        {loading ? 'Sending…' : 'Send message'}
      </button>
      <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
        Delivered to {profile.email}. A copy confirmation is sent to your email.
      </p>
    </form>
  )
}
