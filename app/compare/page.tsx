import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { comparisons } from "@/lib/comparisons";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Comparisons",
  description:
    "Head-to-head comparisons of the platforms, payment providers, and ways of buying a website in New Zealand. Each one commits to an answer.",
  alternates: {
    canonical: "/compare/",
    languages: { "en-NZ": "/compare/", "x-default": "/compare/" },
  },
};

export default function CompareHub() {
  const categories = Array.from(new Set(comparisons.map((c) => c.category)));

  return (
    <>
      <header className="container-x pt-36 pb-16 md:pt-48 md:pb-20">
        <span className="label text-ash">(Compare)</span>
        <AnimatedHeading
          as="h1"
          text="This or _that._"
          className="mt-6 font-serif text-display-lg text-balance"
        />
        <Reveal immediate delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-ash">
            Head-to-head comparisons that commit to an answer. Every one of
            these states its recommendation before the evidence, names the kind
            of business each option suits, and says plainly where a competitor
            beats what we would build.
          </p>
        </Reveal>
      </header>

      {categories.map((category) => (
        <section
          key={category}
          className="container-x border-t border-line py-16 md:py-20"
        >
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl md:text-4xl">{category}</h2>
            </div>
            <ul className="md:col-span-7 md:col-start-6">
              {comparisons
                .filter((c) => c.category === category)
                .map((c, i) => (
                  <Reveal key={c.slug} delay={i * 0.06} as="li" className="border-t border-line first:border-t-0 md:first:border-t">
                    <Link
                      href={`/compare/${c.slug}`}
                      data-cursor="Read"
                      className="group block py-7"
                    >
                      <h3 className="font-serif text-xl transition-opacity group-hover:opacity-60 md:text-2xl">
                        {c.name}
                      </h3>
                      <p className="mt-3 text-sm text-ash">{c.standfirst}</p>
                    </Link>
                  </Reveal>
                ))}
            </ul>
          </div>
        </section>
      ))}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Comparisons | ${site.name}`,
          url: `${site.url}/compare/`,
          isPartOf: { "@id": `${site.url}/#website` },
          hasPart: comparisons.map((c) => ({
            "@type": "Article",
            headline: c.metaTitle,
            url: `${site.url}/compare/${c.slug}/`,
            datePublished: c.published,
            dateModified: c.updated,
            author: { "@id": `${site.url}/#organization` },
          })),
        }}
      />
    </>
  );
}
