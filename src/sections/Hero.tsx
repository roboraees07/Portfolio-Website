import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react'
import { CvDownloadButton } from '../components/CvDownloadButton'
import { links, profile } from '../data/site'

export function Hero() {
  return (
    <section id="home" className="section-container pb-16 pt-28 sm:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-left">
          <p
            className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            {profile.status}
          </p>

          <h1
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold sm:text-2xl">
            <span className="gradient-text">{profile.title}</span>
          </p>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--text-muted)' }}
          >
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
              }}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <CvDownloadButton />
            <a
              href={links.scholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:opacity-80"
              style={{ borderColor: 'var(--border)' }}
            >
              <GraduationCap className="h-4 w-4" />
              Google Scholar
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-4 text-left"
              >
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug" style={{ color: 'var(--text-muted)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
            style={{
              background:
                'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
            }}
          />
          <div className="glass-card relative overflow-hidden rounded-3xl p-2">
            <img
              src={profile.portrait}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
