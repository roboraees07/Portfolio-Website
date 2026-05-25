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

**Repo:** [roboraees07/Portfolio-Website](https://github.com/roboraees07/Portfolio-Website)  
**Live site:** https://roboraees07.github.io/Portfolio-Website/

1. **Settings → Pages → Source:** GitHub Actions  
2. **Settings → Secrets → Actions:** add `VITE_WEB3FORMS_ACCESS_KEY` (your Web3Forms key)  
3. Push to `main` — workflow deploys automatically  

See [docs/GITHUB-PAGES.md](docs/GITHUB-PAGES.md) for details.

## Theme

Use the sun/moon button in the navbar to switch **light** and **dark** mode. Preference is saved in `localStorage`.

## Content

Edit `src/data/site.ts` to update projects, publications, experience, and links.

## CV

Place your PDF at `public/cv.pdf` for the download button.
