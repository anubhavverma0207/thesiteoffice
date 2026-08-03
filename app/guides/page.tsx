import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import {
  guides,
  guideCategories,
  standaloneGuides,
  standaloneTools,
} from "@/lib/guides";
import { site } from "@/lib/site.config";
import { hreflangFor } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical, sourced guides on buying, building, and running a website in New Zealand. Every factual claim is traceable to a primary source.",
  alternates: {
    canonical: "/guides/",
    languages: hreflangFor("/guides/"),
  },
};

export default function GuidesHub() {
  // Combine the data-driven guides with the older standalone pages so the
  // hub shows the whole library rather than only the new format.
  const byCategory = guideCategories.map((category) => ({
    category,
    entries: [
      ...guides
        .filter((g) => g.category === category)
        .map((g) => ({
          href: `/guides/${g.slug}`,
          name: g.name,
          blurb: g.standfirst,
          updated: g.updated,
        })),
      ...standaloneGuides
        .filter((g) => g.category === category)
        .map((g) => ({
          href: g.href,
          name: g.name,
          blurb: g.blurb,
          updated: undefined as string | undefined,
        })),
    ],
  }));

  return (
    <>
      <header className="container-x pt-36 pb-16 md:pt-48 md:pb-20">
        <span className="label text-ash">(Guides)</span>
        <AnimatedHeading
          as="h1"
          text="Everything we know, _written down._"
          className="mt-6 font-serif text-display-lg text-balance"
        />
        <Reveal immediate delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-ash">
            Practical guides on buying, building, and running a website, with a
            New Zealand focus. Every factual claim traces to a primary source
            listed at the foot of the page. Where the evidence is thin, we say
            so rather than filling the gap with confidence.
          </p>
        </Reveal>
      </header>

      {/* Tools first: they are the most immediately useful thing here. */}
      <section className="container-x border-t border-line py-16">
        <span className="label text-ash">(Free tools)</span>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {standaloneTools.map((t, i) => (
            <Reveal key={t.href} delay={i * 0.08}>
              <Link
                href={t.href}
                data-cursor="Open"
                className="group flex h-full flex-col rounded-2xl border border-line p-8 transition-colors hover:border-ink"
              >
                <h2 className="font-serif text-2xl md:text-3xl">{t.name}</h2>
                <p className="mt-4 text-ash">{t.blurb}</p>
                <span
                  aria-hidden
                  className="mt-auto pt-6 text-sm transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Guides grouped by category */}
      {byCategory.map(({ category, entries }) =>
        entries.length === 0 ? null : (
          <section
            key={category}
            className="container-x border-t border-line py-16 md:py-20"
          >
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="font-serif text-3xl md:text-4xl">{category}</h2>
              </div>
              <ul className="md:col-span-7 md:col-start-6">
                {entries.map((e, i) => (
                  <Reveal key={e.href} delay={i * 0.05} as="li" className="border-t border-line first:border-t-0 md:first:border-t">
                    <Link
                      href={e.href}
                      data-cursor="Read"
                      className="group block py-7"
                    >
                      <h3 className="font-serif text-xl transition-opacity group-hover:opacity-60 md:text-2xl">
                        {e.name}
                      </h3>
                      <p className="mt-3 text-sm text-ash">{e.blurb}</p>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        )
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Guides | ${site.name}`,
          description:
            "Practical, sourced guides on buying, building, and running a website in New Zealand.",
          url: `${site.url}/guides/`,
          isPartOf: { "@id": `${site.url}/#website` },
          hasPart: guides.map((g) => ({
            "@type": "Article",
            headline: g.metaTitle,
            url: `${site.url}/guides/${g.slug}/`,
            datePublished: g.published,
            dateModified: g.updated,
            author: { "@id": `${site.url}/#organization` },
          })),
        }}
      />
    </>
  );
}
