import { useState } from 'react'
import { Download } from 'lucide-react'
import { CvDownloadModal } from './CvDownloadModal'

type Props = {
  className?: string
  variant?: 'primary' | 'outline'
  label?: string
}

export function CvDownloadButton({
  className = '',
  variant = 'outline',
  label = 'Download CV',
}: Props) {
  const [open, setOpen] = useState(false)

  const base =
    variant === 'primary'
      ? 'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90'
      : 'inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:opacity-80'

  const style =
    variant === 'primary'
      ? {
          background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
        }
      : { borderColor: 'var(--border)', background: 'var(--bg-elevated)' }

  return (
    <>
      <button type="button" className={`${base} ${className}`} style={style} onClick={() => setOpen(true)}>
        <Download className="h-4 w-4" />
        {label}
      </button>
      <CvDownloadModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
