import type { Metadata } from "next";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import HealthCheck from "@/components/HealthCheck";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site.config";
import { hreflangFor } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Free Website Health Check (2026)",
  description:
    "A free 16-point website health check for business owners: speed, mobile, trust, search visibility, and AI readiness. Score your website in two minutes, no email required.",
  alternates: {
    canonical: "/tools/website-health-check/",
    languages: hreflangFor("/tools/website-health-check/"),
  },
};

export default function HealthCheckPage() {
  return (
    <>
      <section className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">(Free tool · Updated July 2026)</span>
          <AnimatedHeading
            as="h1"
            text="Website health _check._"
            className="mt-6 font-serif text-display-md"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg text-ash">
              Sixteen honest questions about your website: speed, trust,
              search, and whether AI assistants can even read it. Two
              minutes, a score out of 100, and a prioritised fix list. No
              email required.
            </p>
          </Reveal>
        </header>

        <div className="mt-14 max-w-3xl">
          <HealthCheck />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Website Health Check",
          url: `${site.url}/tools/website-health-check/`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web browser",
          offers: { "@type": "Offer", price: "0", priceCurrency: "NZD" },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
