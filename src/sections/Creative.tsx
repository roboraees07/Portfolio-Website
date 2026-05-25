import { ExternalLink, Palette } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { creativeWorks, designSkills } from '../data/creative'
import { links } from '../data/site'

export function Creative() {
  return (
    <section id="creative" className="section-container py-16">
      <SectionHeading
        eyebrow="Design"
        title="Creative Work — Graphic Design"
        subtitle="Visual design for tech communities, hackathons, engineering expos, and personal branding."
      />

      <div className="glass-card mb-8 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div
            className="rounded-xl p-3"
            style={{ background: 'var(--accent-soft)' }}
          >
            <Palette className="h-6 w-6" style={{ color: 'var(--accent)' }} />
          </div>
          <div>
            <h3 className="font-semibold">Behance Portfolio</h3>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
              Logos, posters, campaigns, and society media kits — Adobe Illustrator, Photoshop & CorelDRAW.
            </p>
          </div>
        </div>
        <a
          href={links.behance}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          style={{
            background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
          }}
        >
          View on Behance
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {designSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border px-3 py-1.5 text-sm"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {creativeWorks.map((work) => (
          <article
            key={work.id}
            className="glass-card overflow-hidden rounded-2xl text-left transition hover:-translate-y-0.5"
          >
            {work.image && (
              <img
                src={work.image}
                alt={work.title}
                className="aspect-video w-full object-cover"
                loading="lazy"
              />
            )}
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--accent)' }}>
                {work.category}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{work.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {work.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {work.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded px-2 py-0.5 text-xs"
                    style={{ background: 'var(--accent-soft)', color: 'var(--text-muted)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  View work
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
