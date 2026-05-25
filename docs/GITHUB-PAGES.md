# Publish on GitHub Pages

Your code is in: [github.com/roboraees07/Portfolio-Website](https://github.com/roboraees07/Portfolio-Website)

## One-time GitHub settings

### 1. Enable Pages (GitHub Actions)

1. Open the repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Save

### 2. Web3Forms secret (contact + CV emails on live site)

1. **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret**
3. Name: `VITE_WEB3FORMS_ACCESS_KEY`
4. Value: your Web3Forms access key (same as in local `.env`)

### 3. Wait for deploy

1. Open **Actions** tab → workflow **Deploy to GitHub Pages**
2. Wait until the latest run is green ✓

## Live URL

**https://roboraees07.github.io/Portfolio-Website/**

(If the repo name changes, the URL path changes too.)

## Update the site later

```powershell
cd "c:\Raees Porfolio\portfolio-site"
git add .
git commit -m "Describe your change"
git push origin main
```

GitHub Actions rebuilds automatically after each push to `main`.

## Web3Forms domain

In Web3Forms dashboard, set allowed domain to:

`https://roboraees07.github.io/Portfolio-Website/`
