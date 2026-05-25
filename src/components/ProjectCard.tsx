import { ExternalLink } from 'lucide-react'
import type { Project } from '../data/site'
import { projectHref } from '../utils/assets'

export function ProjectCard({ project }: { project: Project }) {
  const detailUrl = projectHref(project.id)

  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl text-left transition hover:-translate-y-1">
      <a
        href={detailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        title={`Open ${project.name} in a new tab`}
      >
        {project.image && (
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <span
              className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-xs font-semibold capitalize"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
            >
              {project.category}
            </span>
            <span
              className="absolute right-3 top-3 rounded-full px-2 py-1 text-xs font-semibold text-white"
              style={{ background: 'var(--accent)' }}
            >
              View details ↗
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-semibold leading-snug group-hover:underline">
            {project.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {project.summary}
          </p>
        </div>
      </a>
      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <ul className="space-y-1">
          {project.highlights.slice(0, 2).map((h) => (
            <li
              key={h}
              className="text-xs leading-relaxed before:mr-2 before:content-['▸']"
              style={{ color: 'var(--text-muted)' }}
            >
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md px-2 py-0.5 text-xs"
              style={{ background: 'var(--accent-soft)', color: 'var(--text-muted)' }}
            >
              {t}
            </span>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                style={{ color: 'var(--accent)' }}
                onClick={(e) => e.stopPropagation()}
              >
                {link.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
