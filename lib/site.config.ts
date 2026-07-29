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
    "AntCrow is a web design and development studio building brand identities, custom websites, e-commerce, and AI-ready digital experiences for ambitious companies worldwide.",
  // Production domain. Drives canonical URLs, Open Graph, the sitemap, and
  // structured data.
  url: "https://antcrow.com",
  // Used for the "Email us" mail-app links. NEVER shown as text on the site.
  // NOTE before deploying: create this mailbox first in the 1st Domains
  // Email Manager (Domain Manager > antcrow.com > Email Manager), or the
  // links will point at an address that does not receive mail.
  email: "hello@antcrow.com",
  // Shown on brand surfaces (hero, menu, intro). Global by design: the
  // company presents at global scale, never as a local boutique.
  location: "Serving clients worldwide",
  // Studio clock shown in the footer / menu
  timeZone: "Pacific/Auckland",
  /**
   * Editorial attribution.
   * ----------------------------------------------------------------
   * DO NOT put a personal name here. Content on this site is published
   * and reviewed under the studio's name, not an individual's. If a
   * named byline is ever wanted, that is the owner's decision to make
   * explicitly, not something to add because it helps search.
   */
  author: {
    name: "AntCrow",
    role: "Studio",
    bio: "AntCrow is a web design and engineering studio. The studio also builds CheckMyBuilder, a public tool that indexes New Zealand building companies against the Companies Register, which is where much of our understanding of how customers vet businesses online comes from.",
    sameAs: [] as string[],
  },
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
  // Left empty on purpose: placeholder links to bare instagram.com etc.
  // hurt trust (for visitors and for AI entity-building). Add entries as
  // real profiles are created, starting with a LinkedIn company page:
  //   { label: "LinkedIn", href: "https://www.linkedin.com/company/..." },
  social: [] as { label: string; href: string }[],
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Studio", href: "/studio" },
    { label: "Lab", href: "/lab" },
  ],
} as const;

export type Site = typeof site;
