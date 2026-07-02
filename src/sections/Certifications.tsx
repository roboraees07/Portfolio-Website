import { useEffect, useMemo, useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { certifications, type Certification } from '../data/certifications'

function sourceLabel(source: Certification['source']) {
  if (source === 'credly') return 'Credly'
  if (source === 'google-skills') return 'Google Skills'
  return 'Google Developers'
}

export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null)
  const sortedCertifications = useMemo(
    () =>
      [...certifications].sort((a, b) => {
        if (!a.issueDate && !b.issueDate) return 0
        if (!a.issueDate) return 1
        if (!b.issueDate) return -1
        return b.issueDate.localeCompare(a.issueDate)
      }),
    []
  )

  useEffect(() => {
    if (!selected) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selected])

  return (
    <div className="mt-14">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        subtitle="Hover to see certificate names, click image to enlarge, and open each dropdown for credential code and verification link."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedCertifications.map((cert) => (
          <article
            key={cert.id}
            className="rounded-2xl border p-4 transition-colors"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
          >
            <button
              type="button"
              className="group relative block w-full overflow-hidden rounded-xl border"
              style={{ borderColor: 'var(--border)' }}
              onClick={() => setSelected(cert)}
              title={cert.name}
              aria-label={`Open large view for ${cert.name}`}
            >
              <img src={cert.image} alt={cert.name} className="h-44 w-full object-cover" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/45" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 px-3 pb-3 text-left text-xs font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {cert.name}
              </div>
            </button>

            <div className="mt-3 text-xs" style={{ color: 'var(--muted)' }}>
              {cert.issuer} {cert.issueDate ? `• Issued ${cert.issueDate}` : ''}
            </div>

            <details className="mt-3 rounded-lg border p-3" style={{ borderColor: 'var(--border)' }}>
              <summary className="cursor-pointer text-sm font-semibold">Certification Credibility</summary>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Certificate Name:</span> {cert.name}
                </p>
                <p>
                  <span className="font-semibold">Source:</span> {sourceLabel(cert.source)}
                </p>
                <p>
                  <span className="font-semibold">Credential Code:</span> {cert.credentialCode ?? 'Not publicly listed'}
                </p>
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-medium underline"
                >
                  Open certificate link
                </a>
              </div>
            </details>
          </article>
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded certificate: ${selected.name}`}
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: 'var(--border)' }}>
              <h3 className="text-sm font-semibold">{selected.name}</h3>
              <button type="button" className="rounded-md border px-2 py-1 text-xs" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
            <img src={selected.image} alt={selected.name} className="max-h-[78vh] w-full object-contain p-4" />
          </div>
        </div>
      ) : null}
    </div>
  )
}
