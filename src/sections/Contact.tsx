import {
  BookOpen,
  Cloud,
  GitBranch,
  GraduationCap,
  Link2,
  Mail,
  MessageCircle,
  PenLine,
} from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { CvDownloadButton } from '../components/CvDownloadButton'
import { links, profile } from '../data/site'

const social = [
  { label: 'Email', href: links.email, icon: Mail },
  { label: 'LinkedIn', href: links.linkedin, icon: MessageCircle },
  { label: 'GitHub', href: links.github, icon: GitBranch },
  { label: 'Google Scholar', href: links.scholar, icon: GraduationCap },
  { label: 'Medium', href: links.medium, icon: PenLine },
  { label: 'Google Cloud Skills', href: links.googleCloud, icon: Cloud },
  { label: 'Google Developers', href: links.googleDevelopers, icon: BookOpen },
  { label: 'Linktree', href: links.linktree, icon: Link2 },
  { label: 'RoboLeo', href: links.roboleo, icon: Link2 },
]

export function Contact() {
  return (
    <section id="contact" className="section-container py-16 pb-24">
      <SectionHeading
        eyebrow="Connect"
        title="Let's Build Something Great"
        subtitle="Send a message directly to my inbox, or connect on social platforms."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass-card rounded-3xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Send a message</h3>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
            Your email, subject, and message are delivered to {profile.email}.
          </p>
          <ContactForm />
        </div>

        <div className="glass-card rounded-3xl p-6 text-center sm:p-8">
          <p className="text-lg font-medium">{profile.email}</p>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            {profile.location}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {social.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5 sm:text-sm"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
              >
                <Icon className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
                {label}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium">Request CV (email approval)</p>
            <CvDownloadButton variant="primary" label="Request / Download CV" />
          </div>
        </div>
      </div>
    </section>
  )
}
