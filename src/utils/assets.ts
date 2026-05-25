/** Old portfolio commit — media still available here (not on main after redesign) */
const LEGACY_RAW =
  'https://raw.githubusercontent.com/roboraees07/Portfolio-Website/677f618'

/** Large files (e.g. project videos) served from pinned legacy commit */
export function legacyMedia(...pathParts: string[]) {
  return `${LEGACY_RAW}/${pathParts.map((p) => encodeURIComponent(p)).join('/')}`
}

/** Path for bundled media in public/media/ (works on GitHub Pages with base URL) */
export function media(...pathParts: string[]) {
  const base = import.meta.env.BASE_URL
  const encoded = pathParts.map((p) => encodeURIComponent(p)).join('/')
  return `${base}media/${encoded}`.replace(/\/{2,}/g, '/')
}

/**
 * Maps legacy portfolio paths (src/content/...) to local public/media copies.
 * Keeps existing data files unchanged while serving from the deployed site.
 */
export function ghMedia(...pathParts: string[]) {
  const full = pathParts.join('/')
  if (full.startsWith('src/content/projects/')) {
    return media(full.replace('src/content/projects/', 'projects/'))
  }
  if (full.startsWith('src/content/Achievemnets/')) {
    return media(full.replace('src/content/Achievemnets/', 'achievements/'))
  }
  if (full.startsWith('src/content/Experience/')) {
    return media(full.replace('src/content/Experience/', 'experience/'))
  }
  if (full.includes('Images/Raees')) {
    return media('profile', 'raees.png')
  }
  return media(...pathParts)
}

/** Hash route for project detail (GitHub Pages cannot serve deep paths without hash) */
export function projectHref(id: string) {
  const base = import.meta.env.BASE_URL
  const path = `#/project/${id}`
  return `${base}${path}`.replace(/\/{2,}/g, '/').replace(/\/#\//, '/#/')
}
