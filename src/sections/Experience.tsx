import { SectionHeading } from '../components/SectionHeading'
import { ExperienceAccordion } from '../components/ExperienceAccordion'
import {
  professionalExperiences,
  volunteerExperiences,
} from '../data/experiences'

export function Experience() {
  return (
    <section id="experience" className="section-container py-16">
      <SectionHeading
        eyebrow="Career"
        title="Professional Experience"
        subtitle="Click any role to expand — full responsibilities, achievements, and learnings."
      />
      <div className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px sm:left-[11px]"
          style={{ background: 'var(--border)' }}
        />
        {professionalExperiences.map((job) => (
          <ExperienceAccordion key={job.id} entry={job} />
        ))}
      </div>

      <div className="mt-14">
        <SectionHeading
          eyebrow="Community"
          title="Volunteer & Leadership"
          subtitle="Student societies, Google Developer programs, STEM outreach, and creative media roles."
        />
        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px sm:left-[11px]"
            style={{ background: 'var(--border)' }}
          />
          {volunteerExperiences.map((job) => (
            <ExperienceAccordion key={job.id} entry={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
