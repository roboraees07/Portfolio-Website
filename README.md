# Muhammad Raees Azam — Portfolio

Modern AI Engineer & Researcher portfolio (React + Vite + Tailwind). Inspired by [surendiran.ai](https://www.surendiran.ai/) and [jainanurag.me](https://jainanurag.me/).

## Local development

```bash
npm install
npm run dev
```

## Build

For GitHub **project** pages (`https://USERNAME.github.io/REPO/`):

```bash
# Windows PowerShell
$env:VITE_BASE_PATH="/Portfolio-Website/"; npm run build

# macOS / Linux
VITE_BASE_PATH=/Portfolio-Website/ npm run build
```

For a **user** site (`https://USERNAME.github.io/`):

```bash
VITE_BASE_PATH=/ npm run build
```

## Deploy on GitHub Pages (free)

1. Push this `portfolio-site` folder to your GitHub repo (e.g. `Portfolio-Website`).
2. In the repo: **Settings → Pages → Build and deployment → GitHub Actions**.
3. Push to `main` — the workflow `.github/workflows/deploy.yml` builds and deploys automatically.
4. Your site will be live at `https://roboraees07.github.io/Portfolio-Website/` (replace with your username/repo).

## Theme

Use the sun/moon button in the navbar to switch **light** and **dark** mode. Preference is saved in `localStorage`.

## Content

Edit `src/data/site.ts` to update projects, publications, experience, and links.

## CV

Place your PDF at `public/cv.pdf` for the download button.
