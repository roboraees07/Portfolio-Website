import { AlertCircle, CheckCircle } from 'lucide-react'
import { getEmailBackendStatus } from '../lib/api'

type Props = {
  variant: 'contact' | 'cv'
}

export function SetupNotice({ variant }: Props) {
  const s = getEmailBackendStatus()

  if (variant === 'contact') {
    if (s.web3forms || s.gas) {
      return (
        <p className="mb-4 flex items-start gap-2 rounded-xl p-3 text-xs" style={{ background: 'var(--accent-soft)', color: 'var(--text-muted)' }}>
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--accent)' }} />
          Messages are sent to raees.info07@gmail.com
          {s.web3forms && !s.gas ? ' via Web3Forms.' : s.gas ? ' via your email backend.' : '.'}
        </p>
      )
    }
    return (
      <p className="mb-4 flex items-start gap-2 rounded-xl p-3 text-xs" style={{ background: 'var(--accent-soft)', color: 'var(--text-muted)' }}>
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
        No API key yet — submit will open your <strong>email app</strong> (mailto). For automatic
        delivery, add <code className="text-[10px]">VITE_WEB3FORMS_ACCESS_KEY</code> in{' '}
        <code className="text-[10px]">.env</code> (see <strong>docs/QUICK-EMAIL-SETUP.md</strong>, ~2
        min).
      </p>
    )
  }

  if (s.gas) return null

  return (
    <div
      className="mt-4 rounded-xl p-4 text-sm"
      style={{ background: 'var(--accent-soft)', color: 'var(--text-muted)' }}
    >
      <AlertCircle className="mb-2 inline h-4 w-4" />
      {s.web3forms ? (
        <>
          CV requests are emailed to you via <strong>Web3Forms</strong>. For one-click{' '}
          <strong>Approve</strong> links in email, also add <code className="text-xs">VITE_GAS_API_URL</code>{' '}
          (<strong>docs/BACKEND-SETUP.md</strong>).
        </>
      ) : (
        <>
          Add <code className="text-xs">VITE_WEB3FORMS_ACCESS_KEY</code> in <code className="text-xs">.env</code>{' '}
          for instant inbox delivery (<strong>docs/QUICK-EMAIL-SETUP.md</strong>, ~2 min), or use
          request below (opens email app). Full auto-approval needs{' '}
          <code className="text-xs">VITE_GAS_API_URL</code>.
        </>
      )}
    </div>
  )
}
