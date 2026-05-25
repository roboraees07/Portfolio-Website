import { SectionHeading } from '../components/SectionHeading'
import { profile, thesis } from '../data/site'

export function About() {
  return (
    <section id="about" className="section-container py-16">
      <SectionHeading
        eyebrow="About"
        title="AI Engineer & Researcher"
        subtitle="MSc candidate building systems that publish and ship."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="glass-card rounded-2xl p-6 text-left sm:p-8">
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {profile.researchStatement}
          </p>
        </div>
        <div className="glass-card rounded-2xl p-6 text-left sm:p-8">
          <h3 className="text-lg font-semibold">Current MSc Thesis</h3>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text)' }}>{thesis.title}</strong>
          </p>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            <li>
              <span className="font-medium" style={{ color: 'var(--text)' }}>
                Supervisor:
              </span>{' '}
              {thesis.supervisor}
            </li>
            <li>
              <span className="font-medium" style={{ color: 'var(--text)' }}>
                University:
              </span>{' '}
              {thesis.university}
            </li>
            <li>
              <span className="font-medium" style={{ color: 'var(--text)' }}>
                Domains:
              </span>{' '}
              {thesis.domains.join(' · ')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
