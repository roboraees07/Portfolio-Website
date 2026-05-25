import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/site'

export function Skills() {
  return (
    <section id="skills" className="section-container py-16">
      <SectionHeading
        eyebrow="Toolkit"
        title="Technical Skills"
        subtitle="From federated learning and YOLO pipelines to agentic LLM production systems."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.name} className="glass-card rounded-2xl p-6 text-left">
            <h3 className="text-lg font-semibold">{group.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border px-3 py-1.5 text-sm"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
