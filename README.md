# The Site Office · Premium Studio Website

A full-stack, production-grade website for a web-design & engineering studio.
Editorial, ultra-premium aesthetic inspired by sites like Zara, with smooth
scrolling, scroll-triggered reveals, a custom cursor, magnetic buttons, parallax
imagery, and a working contact back-end.

> **Note:** the brand name lives in one place. Change the name, contact details,
> and navigation in one place: **`lib/site.config.ts`**.

---

## Tech stack

| Layer       | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | **Next.js 14** (App Router, TypeScript) |
| Styling     | **Tailwind CSS**                        |
| Animation   | **Framer Motion**                       |
| Smooth scroll | **Lenis**                             |
| Backend     | Next.js **Route Handlers** (`/api/*`)   |

Frontend and backend live in one project but are cleanly separated, so you can
extend either side (add a CMS, a database, auth, more pages) without a rewrite.

---

## Getting started

You need **Node.js 18.18+** (Node 20 or 22 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

---

## Project structure

```
WebsiteBuilder/
├── app/                      # Routes (App Router)
│   ├── layout.tsx            # Root layout: fonts, cursor, preloader, header/footer
│   ├── page.tsx              # Home
│   ├── work/page.tsx         # Selected work
│   ├── services/page.tsx     # Services + process
│   ├── studio/page.tsx       # About / team
│   ├── contact/page.tsx      # Contact + form
│   ├── not-found.tsx         # 404
│   ├── globals.css           # Tailwind + base styles
│   └── api/
│       └── contact/route.ts  # ← BACKEND: contact form endpoint
├── components/               # Reusable UI + motion
│   ├── Header.tsx  Footer.tsx
│   ├── Hero.tsx    ProjectCard.tsx
│   ├── Cursor.tsx  Preloader.tsx  Magnetic.tsx
│   ├── Marquee.tsx ParallaxImage.tsx
│   ├── Reveal.tsx            # Scroll reveal + animated headings
│   ├── SmoothScroll.tsx      # Lenis wrapper
│   └── ContactForm.tsx       # Front-end form → calls the API
├── lib/
│   ├── site.config.ts        # ← EDIT brand name, contact, nav here
│   └── data.ts               # Demo projects / services / stats
└── data/submissions.json     # Created at runtime by the contact API (local demo)
```

---

## Receiving contact-form messages

The site is a static export, so the form posts directly to
**[Web3Forms](https://web3forms.com)** (free), which delivers each enquiry to
your email inbox with Reply-To set to the visitor. Setup:

1. Get a free access key at web3forms.com (enter the inbox that should
   receive enquiries).
2. Copy `.env.local.example` to `.env.local` and paste the key.
3. For production, set the same `NEXT_PUBLIC_WEB3FORMS_KEY` env var on your
   host (see `DEPLOY.md`).

Spam is filtered by a honeypot field. Until the key is configured the form
shows an "email us directly" fallback instead of failing.

---

## SEO & AEO

Built in, per page:

- Titles, descriptions, canonical URLs, Open Graph + Twitter cards (`/og.png`)
- `sitemap.xml` and `robots.txt` generated at build time
- JSON-LD structured data: Organization/ProfessionalService + WebSite
  (site-wide) and FAQPage (services page)
- FAQ content written as direct, quotable answers so AI assistants
  (ChatGPT, Claude, Perplexity, Google AI Overviews) can cite the studio
- Set the production domain in `lib/site.config.ts` (`url:`) before launch,
  then submit the sitemap in Google Search Console.

---

## Customising

- **Brand & contact:** `lib/site.config.ts`
- **Projects / services / stats:** `lib/data.ts`
- **Colors, fonts, type scale:** `tailwind.config.ts`
- **Images:** demo images load from Unsplash (see `next.config.mjs` allowlist).
  Swap the URLs in `lib/data.ts` and the page files for your own assets. Drop
  files into `public/` and reference them as `/your-image.jpg`.

---

## Notes

- Respects `prefers-reduced-motion` (smooth scroll disabled for those users).
- Custom cursor activates on fine-pointer (desktop) devices only.
- Fonts (Inter + Fraunces) load from Google Fonts via the document `<head>`.
```
