import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import CostCalculator from "@/components/CostCalculator";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "NZ Website Cost Calculator (2026)",
  description:
    "Free New Zealand website cost calculator: choose what you are building and get an honest NZD range in under a minute. No email required. Based on published 2026 NZ market pricing.",
  alternates: {
    canonical: "/tools/website-cost-calculator/",
    languages: {
      "en-NZ": "/tools/website-cost-calculator/",
      "x-default": "/tools/website-cost-calculator/",
    },
  },
};

export default function CostCalculatorPage() {
  return (
    <>
      <section className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">(Free tool · Updated July 2026)</span>
          <AnimatedHeading
            as="h1"
            text="NZ website cost _calculator._"
            className="mt-6 font-serif text-display-md"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg text-ash">
              Answer three questions, get an honest NZD range. No email
              gate, no callbacks, no games. Ranges come from published New
              Zealand market pricing, the same brackets explained in{" "}
              <Link
                href="/guides/website-cost-nz"
                className="underline underline-offset-4 hover:text-ink"
              >
                our NZ website cost guide
              </Link>
              .
            </p>
          </Reveal>
        </header>

        <div className="mt-14">
          <CostCalculator />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "NZ Website Cost Calculator",
          url: `${site.url}/tools/website-cost-calculator/`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web browser",
          offers: { "@type": "Offer", price: "0", priceCurrency: "NZD" },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
