import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site.config";

/**
 * Fonts, self-hosted at build time.
 * ------------------------------------------------------------------
 * These were previously loaded with a <link> to fonts.googleapis.com,
 * which is a render-blocking request to a third-party origin. On a page
 * whose Largest Contentful Paint element is a paragraph of text, that
 * stylesheet sits directly in the critical path: nothing paints until it
 * resolves, and an audit measured LCP at 7.3s on a throttled mobile
 * connection because of it.
 *
 * next/font downloads the files at build time and serves them from our
 * own origin, so there is no extra DNS lookup, no TLS handshake to
 * Google, and no blocking stylesheet. It also generates fallback metrics
 * matched to each face, which is what keeps Cumulative Layout Shift at
 * zero while the real font swaps in.
 *
 * The CSS variable names match what tailwind.config.ts and globals.css
 * already expect, so nothing downstream changes. Do NOT also define
 * --font-sans or --font-serif in globals.css: these would then compete
 * at equal specificity and which one wins would depend on injection
 * order.
 */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Concierge from "@/components/Concierge";
import MotionProvider from "@/components/MotionProvider";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { hreflangFor } from "@/lib/markets";

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
    languages: hreflangFor("/"),
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
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="cursor-none-desktop">
        {/* No-JavaScript safety net.
            Scroll-reveal animations are prerendered with inline
            `opacity:0` so they can animate in once hydrated. The text is
            all present in the HTML, so extraction and indexing are
            unaffected, but a visitor whose JavaScript fails or is blocked
            would see a page that is technically complete and visually
            blank. This forces those elements visible when scripting is
            unavailable. `!important` is required because the values it
            overrides are inline styles. */}
        <noscript>
          <style>{`
            [style*="opacity:0"] {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
        {/* Intro shell decision, made before first paint.
            Runs synchronously so the black opening frame is painted with
            the very first frame on every device, rather than dropping over
            an already-visible page once React hydrates (measured at 4.3s
            on a mid-range phone).

            The fallback timeout matters: if this script runs but the
            bundle never loads, the shell would otherwise leave the site as
            a permanent black screen. It no-ops when React has already
            taken over, because the attribute is gone by then.

            12s is chosen against measurement, not taste. Hydration took
            7.8s at 6x CPU throttling, so a shorter fallback would yank the
            shell away mid-opening on a genuinely slow phone. The cost is
            that a total script failure shows black for 12s, which is the
            rarer and less likely case of the two. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("tso_intro_seen")!=="1"){var d=document.documentElement;d.setAttribute("data-intro","pending");setTimeout(function(){if(d.getAttribute("data-intro")==="pending")d.removeAttribute("data-intro")},12000)}}catch(e){}`,
          }}
        />
        <div id="intro-shell" aria-hidden="true">
          <span>{site.name}</span>
        </div>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* MotionProvider must wrap everything that animates, which is why
            it sits above Intro, Cursor, and the Concierge rather than
            inside the page tree. See the component for why. */}
        <MotionProvider>
          <Intro />
          <Cursor />
          <ScrollProgress />
          <SmoothScroll>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
          <Concierge />
        </MotionProvider>
        <Analytics />
        <JsonLd data={orgJsonLd} />
      </body>
    </html>
  );
}
