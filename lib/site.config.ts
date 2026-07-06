/**
 * Central site configuration.
 * ------------------------------------------------------------------
 * Change the company name, contact details, and navigation here.
 * Everything across the site reads from this single file.
 */

export const site = {
  name: "The Site Office",
  // Shown as the full legal/brand name in the footer
  legalName: "The Site Office Limited",
  tagline: "A design & engineering studio building extraordinary websites.",
  description:
    "The Site Office is a web design and development studio serving New Zealand and Australia. We design and build brand identities, custom websites, and e-commerce for ambitious companies.",
  // Set this to the real production domain before launch. It drives
  // canonical URLs, Open Graph, the sitemap, and structured data.
  url: "https://thesiteoffice.example",
  // Where enquiries are delivered. Used for the mail-app link and as the
  // Web3Forms delivery target. It is NEVER shown as text on the site: every
  // touchpoint reads "Email us" and opens the visitor's mail app instead.
  email: "thesiteofficenz@gmail.com",
  phone: "+1 (000) 000 0000",
  location: "New Zealand · Australia",
  // Studio clock shown in the footer / menu
  timeZone: "Pacific/Auckland",
  keywords: [
    "web design studio",
    "web design New Zealand",
    "web design Australia",
    "website development",
    "brand identity design",
    "e-commerce development",
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
  ],
} as const;

export type Site = typeof site;
