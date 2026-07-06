# Deploying The Site Office to Render

The site is a fully **static** Next.js export (`output: "export"` writes plain
HTML/CSS/JS to `./out`), so it deploys to Render as a **Static Site**: always
on, free, no server to sleep. A Render Blueprint (`render.yaml`) is included,
so most settings are filled in automatically.

The service is named **thesiteoffice**, so your live URL will be:

```
https://thesiteoffice.onrender.com
```

(If that subdomain is taken, Render appends a few characters. You can add a
custom domain later under Settings.)

---

## Step 0 — Connect the contact form (one-time, 2 minutes)

Enquiries are delivered by [Web3Forms](https://web3forms.com) straight to your
email inbox — no server needed.

1. Go to web3forms.com and enter the inbox that should **receive** enquiries.
2. They email you an access key.
3. Locally: copy `.env.local.example` to `.env.local` and paste the key.
4. On Render: add an environment variable `NEXT_PUBLIC_WEB3FORMS_KEY` with the
   same value (Dashboard → your static site → Environment).

Until the key is set, the form shows a friendly "email us directly" fallback
instead of failing silently.

## Step 1 — Put the code on GitHub

Render deploys from a Git repository. From this project folder:

```bash
git init -b main   # skip if already a repo
git add -A
git commit -m "The Site Office website"
git remote add origin https://github.com/<your-username>/thesiteoffice.git
git push -u origin main
```

## Step 2 — Create the site on Render

1. Go to https://dashboard.render.com -> **New** -> **Blueprint**.
2. Connect GitHub and select the `thesiteoffice` repo.
3. Render reads `render.yaml` and proposes the **thesiteoffice** static site.
   Click **Apply**.
4. Add the `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable (Step 0).

## Step 3 — After the first deploy

- Set the real domain in `lib/site.config.ts` (`url:`) and redeploy — this
  fixes canonical URLs, Open Graph, the sitemap, and structured data.
- Submit `https://<your-domain>/sitemap.xml` in
  [Google Search Console](https://search.google.com/search-console) and
  [Bing Webmaster Tools](https://www.bing.com/webmasters).
- Auto-deploy is on: every push to `main` redeploys.
