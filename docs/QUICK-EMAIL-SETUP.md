# Quick email setup (~2 minutes) — Web3Forms

Use this to stop configuration warnings and receive **contact messages** and **CV requests** in **raees.info07@gmail.com** without Google Apps Script.

## Steps

1. Open [https://web3forms.com](https://web3forms.com) and sign up (free).
2. Create an access key and set the notification email to **raees.info07@gmail.com**.
3. In folder `portfolio-site`, create a file named **`.env`** (copy from `.env.example`):

```env
VITE_WEB3FORMS_ACCESS_KEY=paste_your_access_key_here
```

4. Restart the dev server:

```powershell
cd "c:\Raees Porfolio\portfolio-site"
npm run dev
```

5. Test **Send message** on the Contact section and **Request CV** — you should receive emails in Gmail.

## GitHub Pages deploy

Add repository secret:

- Name: `VITE_WEB3FORMS_ACCESS_KEY`
- Value: your Web3Forms access key

The deploy workflow already passes `VITE_GAS_API_URL` if set; add the Web3Forms secret the same way.

Rebuild / push to `main` so the production build includes the key.

## Optional: one-click CV approval

Web3Forms only **notifies** you of CV requests. For **Approve / Reject** links in email and automatic visitor download, also set up:

**`VITE_GAS_API_URL`** — see [BACKEND-SETUP.md](./BACKEND-SETUP.md)

## Without any `.env` (fallback)

- **Contact** — opens the visitor’s email app (mailto) addressed to you.
- **CV request** — same mailto fallback.

These work locally but are less professional than Web3Forms or Apps Script.
