import { useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'

type Video = { title: string; src: string }

/** Load one video at a time to avoid browser memory spikes on large MP4s */
export function ProjectVideos({ videos }: { videos: Video[] }) {
  const [activeSrc, setActiveSrc] = useState<string | null>(null)

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => {
        const isActive = activeSrc === v.src
        return (
          <div
            key={v.src}
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: 'var(--border)' }}
          >
            <p className="px-3 py-2 text-sm font-semibold">{v.title}</p>
            {isActive ? (
              <video
                controls
                className="w-full"
                preload="none"
                playsInline
                src={v.src}
              />
            ) : (
              <button
                type="button"
                onClick={() => setActiveSrc(v.src)}
                className="flex w-full flex-col items-center justify-center gap-2 py-12 transition hover:opacity-90"
                style={{ background: 'var(--bg-elevated)' }}
              >
                <Play className="h-10 w-10" style={{ color: 'var(--accent)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                  Load video
                </span>
              </button>
            )}
            <a
              href={v.src}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium hover:underline"
              style={{ color: 'var(--text-muted)' }}
            >
              Open in new tab
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        )
      })}
    </div>
  )
}
