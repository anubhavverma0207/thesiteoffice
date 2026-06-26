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
    "The Site Office is a premium digital studio. We design and build category-defining websites and digital experiences for ambitious companies.",
  email: "studio@thesiteoffice.example",
  phone: "+1 (000) 000 0000",
  location: "New Zealand · Australia",
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
