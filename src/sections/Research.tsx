import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { education, publications } from '../data/site'

export function Research() {
  return (
    <section id="research" className="section-container py-16">
      <SectionHeading
        eyebrow="Research"
        title="Publications & Education"
        subtitle="Peer-reviewed work, submissions, and academic trajectory."
      />

      <div className="mb-12 space-y-4">
        {publications.map((pub, i) => (
          <article
            key={pub.title}
            className="glass-card rounded-2xl p-5 text-left sm:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{
                  background: 'var(--accent-soft)',
                  color: 'var(--accent)',
                }}
              >
                {pub.status}
              </span>
              {'impact' in pub && pub.impact && (
                <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  {pub.impact}
                </span>
              )}
            </div>
            <h3 className="mt-3 text-base font-semibold leading-snug sm:text-lg">
              {i + 1}. {pub.title}
            </h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              {pub.authors}
            </p>
            <p className="mt-1 text-sm italic" style={{ color: 'var(--text-muted)' }}>
              {pub.venue}
            </p>
            {'link' in pub && pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                View publication <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </article>
        ))}
      </div>

      <SectionHeading title="Education" />
      <div className="space-y-4">
        {education.map((edu) => (
          <article key={edu.degree} className="glass-card rounded-2xl p-5 text-left sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                {edu.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium">{edu.school}</p>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              {edu.detail}
            </p>
            <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
              {edu.courses}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
