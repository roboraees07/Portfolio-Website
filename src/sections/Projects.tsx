import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/site'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-container py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="Click any project for a full case study—videos, images, code snippets, and references. Pages open in a new tab."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {other.length > 0 && (
        <>
          <div className="mt-14 mb-8">
            <h3 className="text-xl font-semibold">More Projects</h3>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
              Robotics, industry AI, and additional research builds.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {other.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
