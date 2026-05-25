const GH_RAW =
  'https://raw.githubusercontent.com/roboraees07/Portfolio-Website/main'

/** Build a raw GitHub asset URL for portfolio media */
export function ghMedia(...pathParts: string[]) {
  return `${GH_RAW}/${pathParts.map((p) => encodeURIComponent(p)).join('/')}`
}

/** Path for project detail page (respects GitHub Pages base) */
export function projectHref(id: string) {
  const base = import.meta.env.BASE_URL
  return `${base}project/${id}`.replace(/\/{2,}/g, '/')
}
