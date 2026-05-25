import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { getProjectById } from '../data/projectDetails'
import { profile } from '../data/site'
import { ThemeToggle } from '../components/ThemeToggle'
import { Footer } from '../components/Footer'
import { debugLog } from '../utils/debugLog'

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  useEffect(() => {
    // #region agent log
    debugLog('ProjectDetailPage.tsx:mount', 'project detail route loaded', {
      id,
      found: Boolean(project),
      hash: window.location.hash,
      pathname: window.location.pathname,
      hasIntroduction: Boolean(project?.introduction),
      sectionCount: [
        project?.problemStatement,
        project?.objectives?.length,
        project?.methodology?.length,
        project?.gallery?.length,
        project?.videos?.length,
        project?.codeSnippets?.length,
        project?.results,
      ].filter(Boolean).length,
    }, project ? 'H4' : 'H1', project ? 'post-fix' : 'pre-fix')
    // #endregion
  }, [id, project])

  if (!project) {
    return (
      <div className="section-container py-32 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/" className="mt-4 inline-block text-sm font-semibold" style={{ color: 'var(--accent)' }}>
          ← Back to portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--bg) 90%, transparent)' }}
      >
        <div className="section-container flex h-14 items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80"
            style={{ color: 'var(--accent)' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio home
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="section-container py-10 text-left">
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: 'var(--accent)' }}
        >
          {project.category} project
        </p>
        <h1
          className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {project.name}
        </h1>
        <p className="mt-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
          By {profile.name}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {project.introduction}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border px-3 py-1 text-sm"
              style={{ borderColor: 'var(--border)' }}
            >
              {t}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {l.label}
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}

        {project.problemStatement && (
          <Section title="Problem Statement" body={project.problemStatement} />
        )}

        {project.objectives && project.objectives.length > 0 && (
          <Section title="Objectives">
            <ul className="list-inside list-disc space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              {project.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </Section>
        )}

        {project.methodology && project.methodology.length > 0 && (
          <Section title="Methodology">
            <ul className="space-y-2">
              {project.methodology.map((m) => (
                <li key={m} className="text-sm leading-relaxed before:mr-2 before:content-['▸']" style={{ color: 'var(--text-muted)' }}>
                  {m}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.videos && project.videos.length > 0 && (
          <Section title="Demo Videos">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.videos.map((v) => (
                <div key={v.src} className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--border)' }}>
                  <p className="px-3 py-2 text-sm font-semibold">{v.title}</p>
                  <video controls className="w-full" preload="metadata">
                    <source src={v.src} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>
              ))}
            </div>
          </Section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <Section title="Images & Results">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img) => (
                <figure
                  key={img.src}
                  className="overflow-hidden rounded-xl border"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <img src={img.src} alt={img.title ?? 'Project'} className="h-48 w-full object-cover" loading="lazy" />
                  {img.title && (
                    <figcaption className="px-3 py-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                      {img.title}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Section>
        )}

        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <Section title="Code Snippets">
            <div className="space-y-4">
              {project.codeSnippets.map((snip) => (
                <div key={snip.title}>
                  <p className="mb-2 text-sm font-semibold">{snip.title}</p>
                  <pre
                    className="overflow-x-auto rounded-xl p-4 text-xs leading-relaxed sm:text-sm"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                  >
                    <code>{snip.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </Section>
        )}

        {project.results && <Section title="Results & Impact" body={project.results} />}

        <Section title="Key Highlights">
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="text-sm leading-relaxed before:mr-2 before:font-bold before:content-['•']" style={{ color: 'var(--text-muted)' }}>
                {h}
              </li>
            ))}
          </ul>
        </Section>

        {project.references && project.references.length > 0 && (
          <Section title="References & Links">
            <ul className="space-y-2">
              {project.references.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    {r.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </main>
      <Footer />
    </div>
  )
}

function Section({
  title,
  body,
  children,
}: {
  title: string
  body?: string
  children?: ReactNode
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h2>
      {body && (
        <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
          {body}
        </p>
      )}
      {children && <div className="mt-3">{children}</div>}
    </section>
  )
}
