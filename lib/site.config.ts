/**
 * Central site configuration.
 * ------------------------------------------------------------------
 * Change the company name, contact details, and navigation here.
 * Everything across the site reads from this single file.
 */

export const site = {
  name: "AntCrow",
  tagline: "A design & engineering studio building extraordinary websites.",
  description:
    "AntCrow is a web design and development studio serving New Zealand and Australia. We design and build brand identities, custom websites, e-commerce, and AI-ready digital experiences for ambitious companies.",
  // Production domain. Drives canonical URLs, Open Graph, the sitemap, and
  // structured data.
  url: "https://antcrow.com",
  // Used for the "Email us" mail-app links. NEVER shown as text on the site.
  // NOTE before deploying: create this mailbox first in the 1st Domains
  // Email Manager (Domain Manager > antcrow.com > Email Manager), or the
  // links will point at an address that does not receive mail.
  email: "hello@antcrow.com",
  location: "New Zealand · Australia",
  // Studio clock shown in the footer / menu
  timeZone: "Pacific/Auckland",
  keywords: [
    "AntCrow",
    "web design studio",
    "web design New Zealand",
    "web design Australia",
    "website development",
    "brand identity design",
    "e-commerce development",
    "AI search optimisation",
    "answer engine optimisation",
    "Next.js development studio",
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ],
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Studio", href: "/studio" },
    { label: "Lab", href: "/lab" },
  ],
} as const;

export type Site = typeof site;
