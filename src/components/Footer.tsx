import { links, profile } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t py-10" style={{ borderColor: 'var(--border)' }}>
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © {year} {profile.name}. Built with React & Vite.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href={links.github} target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href={links.scholar} target="_blank" rel="noreferrer" className="hover:underline">
            Scholar
          </a>
          <a href={links.linktree} target="_blank" rel="noreferrer" className="hover:underline">
            Linktree
          </a>
        </div>
      </div>
    </footer>
  )
}
