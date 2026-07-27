# Deploying AntCrow to Render

The site is a fully **static** Next.js export (`output: "export"` writes plain
HTML/CSS/JS to `./out`), deployed on Render as a **Static Site**: always on,
free, no server to sleep. A Render Blueprint (`render.yaml`) automates the
settings.

Current state: **live at https://antcrow.com** (www redirects to the apex).
For historical reasons the Render service is named `thesiteoffice`
(https://thesiteoffice.onrender.com). Do not rename it in `render.yaml`;
renaming a blueprint service creates a brand-new service.

---

## Email: the studio mailbox (hello@antcrow.com)

Email hosting for antcrow.com is purchased at **1st Domains**
(5 mailboxes, 5GB, renews 26-07-2027). MX and SPF records are already set.

**One-time setup, in order:**

1. **Create the mailbox.** Log in at 1stdomains.nz, then
   Domain Manager > antcrow.com > **Email Manager** > add mailbox
   `hello@antcrow.com` with a strong password.
2. **Read it anywhere.** Webmail: use https://wm.mail.isx.net.nz (the
   provider's real webmail; the friendly https://webmail.antcrow.com alias
   currently throws a TLS certificate warning, so avoid it). Or add the
   mailbox to Gmail / phone mail apps: IMAP + SMTP server
   `mail.1stdomains.co.nz`, SMTP port 587 with authentication, login
   `hello@antcrow.com`.
   In Gmail: Settings > Accounts > "Check mail from other accounts" (to
   receive) and "Send mail as" (to reply from hello@antcrow.com).
3. **Move form delivery.** The contact form delivers via Web3Forms to the
   inbox its access key is registered to (currently the old Gmail). Create a
   new free key at web3forms.com using `hello@antcrow.com`, then replace
   `NEXT_PUBLIC_WEB3FORMS_KEY` in both `render.yaml` and `.env.local` and
   redeploy. The key is public (like a form id), safe to commit.
4. **Site links.** `lib/site.config.ts` already points `email:` at
   `hello@antcrow.com`. The address is never printed on the site; every
   touchpoint reads "Email us" and opens the visitor's mail app.

**Stop enquiries going to Spam (do once per receiving inbox).** Web3Forms
sends from a shared address, so first messages often land in Spam. In the
receiving mailbox create a filter: match
`subject:("New enquiry") OR from:(web3forms.com)`, action "Never send to
Spam" + "Mark as important". In 1st Domains webmail the same is done via
Settings > Filters, or whitelist `web3forms.com` in the Email Manager's
spam settings.

---

## Deploying changes

Auto-deploy is on: every push to `main` redeploys.

```bash
git add -A
git commit -m "Describe the change"
git push origin main
```

Render runs `npm install && npm run build` and publishes `./out`.

## After significant changes

- Keep `url:` in `lib/site.config.ts` pointing at the production domain
  (https://antcrow.com). It drives canonicals, Open Graph, the sitemap, and
  structured data.
- Submit https://antcrow.com/sitemap.xml in
  [Google Search Console](https://search.google.com/search-console) and
  [Bing Webmaster Tools](https://www.bing.com/webmasters).
