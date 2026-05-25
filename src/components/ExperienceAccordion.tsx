import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ExperienceEntry } from '../data/experiences'

export function ExperienceAccordion({ entry }: { entry: ExperienceEntry }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="relative pb-4 pl-8 sm:pl-10">
      <div
        className="absolute left-0 top-3 h-4 w-4 rounded-full border-2 sm:h-5 sm:w-5"
        style={{
          borderColor: 'var(--accent)',
          background: entry.current ? 'var(--accent)' : 'var(--bg)',
        }}
      />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="glass-card w-full rounded-2xl p-5 text-left transition sm:p-6"
        aria-expanded={open}
      >
        <div className="flex flex-wrap items-start gap-3">
          {entry.logo && (
            <img
              src={entry.logo}
              alt=""
              className="h-12 w-12 rounded-lg object-contain"
              loading="lazy"
            />
          )}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{entry.role}</h3>
                <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                  {entry.org}
                </p>
              </div>
              <span
                className="shrink-0 text-xs font-semibold sm:text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                {entry.period}
              </span>
            </div>
            <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
              Click to {open ? 'collapse' : 'view'} responsibilities, achievements & learnings
            </p>
          </div>
          <ChevronDown
            className={`h-5 w-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
            style={{ color: 'var(--accent)' }}
          />
        </div>

        {open && (
          <div
            className="mt-6 space-y-5 border-t pt-5 text-left"
            style={{ borderColor: 'var(--border)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <DetailBlock title="What I Did" items={entry.whatIDid} />
            <DetailBlock title="Achievements" items={entry.achievements} accent />
            <DetailBlock title="What I Learned" items={entry.learned} />
            {entry.tools && entry.tools.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold">Tools & Technologies</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {entry.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md px-2 py-0.5 text-xs"
                      style={{ background: 'var(--accent-soft)', color: 'var(--text-muted)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm font-semibold hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                Verify organization →
              </a>
            )}
          </div>
        )}
      </button>
    </article>
  )
}

function DetailBlock({
  title,
  items,
  accent,
}: {
  title: string
  items: string[]
  accent?: boolean
}) {
  return (
    <div>
      <h4
        className="text-sm font-semibold"
        style={accent ? { color: 'var(--accent)' } : undefined}
      >
        {title}
      </h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm leading-relaxed before:mr-2 before:content-['▸']"
            style={{ color: 'var(--text-muted)' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
