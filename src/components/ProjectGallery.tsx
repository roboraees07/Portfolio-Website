import { useState } from 'react'

const INITIAL_COUNT = 6

type GalleryImage = { title?: string; src: string }

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? images : images.slice(0, INITIAL_COUNT)
  const hasMore = images.length > INITIAL_COUNT

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((img) => (
          <figure
            key={img.src}
            className="overflow-hidden rounded-xl border"
            style={{ borderColor: 'var(--border)' }}
          >
            <img
              src={img.src}
              alt={img.title ?? 'Project'}
              className="h-48 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            {img.title && (
              <figcaption className="px-3 py-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                {img.title}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      {hasMore && !showAll && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-4 rounded-full border px-4 py-2 text-sm font-semibold transition hover:opacity-80"
          style={{ borderColor: 'var(--border)' }}
        >
          Show all {images.length} images
        </button>
      )}
    </>
  )
}
