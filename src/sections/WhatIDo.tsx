import { Bot, Cpu, FlaskConical, Scan } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { whatIDo } from '../data/site'

const icons = {
  scan: Scan,
  bot: Bot,
  flask: FlaskConical,
  cpu: Cpu,
} as const

export function WhatIDo() {
  return (
    <section className="section-container py-16">
      <SectionHeading
        eyebrow="Expertise"
        title="What I Do"
        subtitle="Research-grade computer vision meets production AI engineering."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {whatIDo.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons]
          return (
            <article
              key={item.title}
              className="glass-card rounded-2xl p-6 text-left transition hover:-translate-y-0.5"
            >
              <div
                className="mb-4 inline-flex rounded-xl p-3"
                style={{ background: 'var(--accent-soft)' }}
              >
                <Icon className="h-6 w-6" style={{ color: 'var(--accent)' }} />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {item.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
