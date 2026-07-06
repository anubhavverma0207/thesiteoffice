import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site.config";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
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
  publisher: site.legalName,
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
      legalName: site.legalName,
      url: site.url,
      // Contact routes through the on-site form, so no email is exposed here.
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "New business",
        url: `${site.url}/contact/`,
      },
      description: site.description,
      slogan: site.tagline,
      areaServed: ["NZ", "AU"],
      knowsAbout: [
        "Web design",
        "Web development",
        "Brand identity",
        "E-commerce",
        "Motion design",
      ],
      sameAs: site.social.map((s) => s.href),
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
        <JsonLd data={orgJsonLd} />
      </body>
    </html>
  );
}
