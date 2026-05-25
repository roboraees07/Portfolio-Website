import { useState } from 'react'
import { ExternalLink, BookOpen, X } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { blogPosts, type BlogPost } from '../data/blogs'
import { links } from '../data/site'

export function Blogs() {
  const [active, setActive] = useState<BlogPost | null>(null)

  return (
    <section id="blogs" className="section-container py-16">
      <SectionHeading
        eyebrow="Writing"
        title="Blog"
        subtitle="Thoughts on AI engineering, research, STEM education, and career growth."
      />

      <a
        href={links.medium}
        target="_blank"
        rel="noreferrer"
        className="glass-card mb-8 flex items-center justify-between gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5"
      >
        <div className="flex items-center gap-3 text-left">
          <BookOpen className="h-8 w-8 shrink-0" style={{ color: 'var(--accent)' }} />
          <div>
            <p className="font-semibold">More on Medium</p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              @raees.info07 — AI, robotics, and smart agriculture
            </p>
          </div>
        </div>
        <ExternalLink className="h-5 w-5 shrink-0" style={{ color: 'var(--accent)' }} />
      </a>

      <div className="grid gap-4 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="glass-card cursor-pointer rounded-2xl p-5 text-left transition hover:-translate-y-0.5"
            onClick={() => setActive(post)}
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full px-2 py-0.5 text-xs"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              {post.excerpt}
            </p>
            <p className="mt-3 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
              {post.date} · {post.readTime}
            </p>
            <p className="mt-2 text-xs font-semibold" style={{ color: 'var(--accent)' }}>
              Read article →
            </p>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.65)' }}
          onClick={() => setActive(null)}
        >
          <article
            className="glass-card max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 text-left sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {active.date} · {active.readTime}
                </p>
                <h2 className="mt-1 text-2xl font-bold">{active.title}</h2>
              </div>
              <button type="button" onClick={() => setActive(null)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md px-2 py-0.5 text-xs"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div
              className="mt-6 space-y-4 text-sm leading-relaxed whitespace-pre-line sm:text-base"
              style={{ color: 'var(--text-muted)' }}
            >
              {active.content}
            </div>
            {active.externalUrl && (
              <a
                href={active.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                Read on Medium
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </article>
        </div>
      )}
    </section>
  )
}
