# Email, CV approval & contact form setup

The portfolio uses a **free Google Apps Script** backend so GitHub Pages can:

1. **Contact form** — send messages to `raees.info07@gmail.com`
2. **CV download** — visitor requests access → you get email with **Approve / Reject** → visitor can download after approval

## Step 1: Create the Google Sheet + Script

1. Go to [Google Sheets](https://sheets.google.com) → new spreadsheet (name e.g. `Portfolio Backend`).
2. **Extensions → Apps Script**
3. Delete default code and paste everything from:
   `scripts/google-apps-script/Code.gs`
4. **Project Settings → Script properties** → add:

| Property       | Value |
|----------------|--------|
| `OWNER_EMAIL`  | `raees.info07@gmail.com` |
| `SITE_URL`     | Your live site URL, e.g. `https://roboraees07.github.io/Portfolio-Website/` |

5. Save the project (Ctrl+S).

## Step 2: Deploy as Web App

1. **Deploy → New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Deploy → copy the **Web App URL** (ends with `/exec`)

## Step 3: Connect the website

In `portfolio-site` create `.env`:

```env
VITE_GAS_API_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart dev server:

```bash
npm run dev
```

Rebuild before GitHub Pages deploy:

```bash
npm run build
```

> Vite embeds `VITE_*` at build time. Set the secret in GitHub **Settings → Secrets → Actions** as `VITE_GAS_API_URL` and add it to the deploy workflow env if you use CI.

## How CV approval works

1. Visitor clicks **Download CV** → enters email → **Request access**
2. You receive: *"[Portfolio] CV download request from user@email.com"* with **Approve** / **Reject** links
3. Visitor receives: *"Request received — wait for approval"*
4. You click **Approve** → visitor gets email with download link (`?cv_token=...`)
5. On site they can also use **Check approval status** with the same email

Approved access is stored in the browser for 7 days.

## How contact works

Visitor fills **email, subject, message** → you receive `[Portfolio Contact] {subject}` with reply-to set to their email → they get a short confirmation email.

## Troubleshooting

- First run: Google will ask you to **authorize** the script (Gmail + Sheets).
- If fetch fails from localhost, redeploy Web App as **Anyone** and use the `/exec` URL.
- Update deployment after script changes: **Deploy → Manage deployments → Edit → New version**.
