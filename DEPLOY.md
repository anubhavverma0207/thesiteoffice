# Deploying The Site Office to Render

This is a Next.js app with a small backend (`/api/contact`), so it deploys to
Render as a **Node Web Service** (not a static site). A Render Blueprint
(`render.yaml`) is included, so most settings are filled in automatically.

The service is named **thesiteoffice**, so your live URL will be:

```
https://thesiteoffice.onrender.com
```

(If that subdomain is taken, Render appends a few characters. You can add a
custom domain later under Settings.)

---

## Step 1 — Put the code on GitHub (run these on your computer)

Render deploys from a Git repository. Open a terminal in this project folder
(`WebsiteBuilder`) and run:

```bash
# If a partial ".git" folder exists from setup, delete it first:
#   Windows (PowerShell):  Remove-Item -Recurse -Force .git
#   macOS/Linux:           rm -rf .git

git init -b main
git add -A
git commit -m "The Site Office website"
```

Then create an empty repo on GitHub named `thesiteoffice` and connect it:

```bash
git remote add origin https://github.com/<your-username>/thesiteoffice.git
git push -u origin main
```

`node_modules` and `.next` are already git-ignored, so only source is pushed.

## Step 2 — Create the service on Render

Recommended (uses the blueprint):

1. Go to https://dashboard.render.com -> **New** -> **Blueprint**.
2. Connect GitHub and select the `thesiteoffice` repo.
3. Render reads `render.yaml` and proposes the **thesiteoffice** web service.
   Click **Apply**.

Manual alternative: **New** -> **Web Service** -> pick the repo, then set
Runtime **Node**, Build `npm install && npm run build`, Start `npm run start`,
Instance **Free**, and **Create Web Service**.

## Step 3 — Wait for the build

Render runs `npm install && npm run build`, then `npm run start`. Next.js binds
to the port Render provides automatically. First build takes a few minutes; then
the site is live.

---

## Notes

- **Free instances sleep** after ~15 min idle and take a few seconds to wake.
  Upgrade to a paid instance to keep it always on.
- **Auto-deploy** is on: every push to `main` redeploys.
- **Region:** for a New Zealand / Australia audience, choose **Singapore** when
  creating the service (closest region).
- **Contact form storage:** the demo writes to `data/submissions.json`. Render's
  disk is ephemeral, so for real enquiries replace `saveSubmission()` in
  `app/api/contact/route.ts` with a database or email/CRM call.
