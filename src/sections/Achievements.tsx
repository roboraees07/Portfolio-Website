import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { achievementsList } from '../data/achievements'

export function Achievements() {
  return (
    <section id="achievements" className="section-container py-16">
      <SectionHeading
        eyebrow="Recognition"
        title="Achievements & Awards"
        subtitle="Verifiable awards with official links where available."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {achievementsList.map((item) => (
          <article
            key={item.id}
            className="glass-card flex flex-col overflow-hidden rounded-2xl text-left sm:flex-row"
          >
            {item.image && (
              <img
                src={item.image}
                alt=""
                className="h-36 w-full shrink-0 object-cover sm:h-auto sm:w-36"
                loading="lazy"
              />
            )}
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
                {item.year && (
                  <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                    {item.year}
                  </span>
                )}
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {item.description}
              </p>
              {item.verifyUrl && (
                <a
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  Verify award
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
