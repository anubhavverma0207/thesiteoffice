import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site.config";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Concierge from "@/components/Concierge";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Web Design & Development Studio`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  creator: site.name,
  publisher: site.name,
  // Self-referential hreflang: replaces the removed GSC country targeting
  // as the NZ-relevance signal for a .com domain. Every page repeats this
  // pattern with its own path.
  alternates: {
    canonical: "/",
    languages: { "en-NZ": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · Web Design & Development Studio`,
    description: site.description,
    locale: "en_NZ",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} · ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Web Design & Development Studio`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Search Console / Bing Webmaster ownership tags; render only when set.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          },
        }
      : {}),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f0e9",
};

// Organization + WebSite entities: how search engines and AI assistants
// understand who this site belongs to and what the business does.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      // Contact routes through the on-site form, so no email is exposed here.
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "New business",
        url: `${site.url}/contact/`,
      },
      description: site.description,
      slogan: site.tagline,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressCountry: "NZ",
      },
      areaServed: [
        { "@type": "Country", name: "New Zealand" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: [
        "Web design",
        "Web development",
        "Brand identity",
        "E-commerce",
        "Motion design",
        "Search engine optimisation",
        "Answer engine optimisation",
      ],
      // sameAs deliberately omitted until real social profiles exist:
      // placeholder links would poison the entity graph.
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400;1,9..144,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="cursor-none-desktop">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Intro />
        <Cursor />
        <ScrollProgress />
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
        <Concierge />
        <Analytics />
        <JsonLd data={orgJsonLd} />
      </body>
    </html>
  );
}
