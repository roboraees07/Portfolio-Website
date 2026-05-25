import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition hover:opacity-80"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" style={{ color: 'var(--accent)' }} />
      ) : (
        <Moon className="h-4 w-4" style={{ color: 'var(--accent)' }} />
      )}
    </button>
  )
}
