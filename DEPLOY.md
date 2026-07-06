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

## Step 0: Connect the contact form (one-time)

Enquiries are delivered by [Web3Forms](https://web3forms.com) straight to your
email inbox. No server needed.

**Access key.** The current key is already set for this project: it lives in
`render.yaml` (as `NEXT_PUBLIC_WEB3FORMS_KEY`) and in `.env.local` for local dev.
It is a public key (like a form id), safe to commit. To point enquiries at a
different inbox, create a new key at web3forms.com with that inbox and replace
the value in both `render.yaml` and `.env.local`, then redeploy. Until a key is
set, the form shows a friendly "Email us" fallback instead of failing silently.

**Stop enquiries going to Spam (do this once, important).** Web3Forms sends from
a shared address, so Gmail often files the first messages under Spam. Fix it with
a filter in the receiving inbox (thesiteofficenz@gmail.com):

1. In Gmail, click the filter icon in the search bar (the sliders icon).
2. In "Has the words", paste:
   `subject:("New enquiry") OR from:(web3forms.com)`
3. Click **Create filter**, then tick:
   - **Never send it to Spam**
   - **Mark as important**
   - **Also apply filter to matching conversations** (rescues any already in Spam)
4. Click **Create filter**. Every enquiry now lands in the inbox.

Also add the sender to Google Contacts once, which further stops spam filtering.

## Step 1: Put the code on GitHub

Render deploys from a Git repository. From this project folder:

```bash
git init -b main   # skip if already a repo
git add -A
git commit -m "The Site Office website"
git remote add origin https://github.com/<your-username>/thesiteoffice.git
git push -u origin main
```

## Step 2: Create the site on Render

1. Go to https://dashboard.render.com -> **New** -> **Blueprint**.
2. Connect GitHub and select the `thesiteoffice` repo.
3. Render reads `render.yaml` and proposes the **thesiteoffice** static site.
   Click **Apply**.
4. Add the `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable (Step 0).

## Step 3: After the first deploy

- Set the real domain in `lib/site.config.ts` (`url:`) and redeploy. This
  fixes canonical URLs, Open Graph, the sitemap, and structured data.
- Submit `https://<your-domain>/sitemap.xml` in
  [Google Search Console](https://search.google.com/search-console) and
  [Bing Webmaster Tools](https://www.bing.com/webmasters).
- Auto-deploy is on: every push to `main` redeploys.
