import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { glossary, glossaryCategories } from "@/lib/glossary";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Plain definitions of web design, development, search, and AI terms, with the New Zealand specifics most glossaries leave out.",
  alternates: {
    canonical: "/glossary/",
    languages: { "en-NZ": "/glossary/", "x-default": "/glossary/" },
  },
};

export default function GlossaryHub() {
  return (
    <>
      <header className="container-x pt-36 pb-16 md:pt-48 md:pb-20">
        <span className="label text-ash">(Glossary)</span>
        <AnimatedHeading
          as="h1"
          text="The words, without the _fog._"
          className="mt-6 font-serif text-display-lg text-balance"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-ash">
            Our industry hides a lot behind vocabulary, some of it deliberately.
            These are plain definitions of the terms you will meet when buying
            or running a website, including the New Zealand specifics that
            overseas glossaries get wrong. {glossary.length} terms and counting.
          </p>
        </Reveal>
      </header>

      {glossaryCategories.map((category) => {
        const terms = glossary.filter((t) => t.category === category);
        if (terms.length === 0) return null;
        return (
          <section
            key={category}
            className="container-x border-t border-line py-14 md:py-16"
          >
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <h2 className="font-serif text-2xl md:sticky md:top-28 md:text-3xl">
                  {category}
                </h2>
              </div>
              <ul className="grid gap-x-8 gap-y-0 md:col-span-9 md:grid-cols-2">
                {terms.map((t, i) => (
                  <Reveal key={t.slug} delay={i * 0.03}>
                    <li className="h-full border-t border-line">
                      <Link
                        href={`/glossary/${t.slug}`}
                        data-cursor="Read"
                        className="group flex h-full flex-col py-6"
                      >
                        <h3 className="font-serif text-xl transition-opacity group-hover:opacity-60">
                          {t.term}
                        </h3>
                        {/* The one-line definition is shown here rather than
                            hidden behind a click. The hub should be useful on
                            its own, not merely an index. */}
                        <p className="mt-2 text-sm text-ash">{t.short}</p>
                      </Link>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="container-x border-t border-line py-16">
        <Reveal>
          <p className="max-w-xl text-ash">
            Missing a term you have been handed without explanation? Tell us and
            we will add it.
          </p>
          <Link
            href="/contact"
            data-cursor="Ask"
            data-cursor-theme="dark"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-bone transition-colors hover:bg-ink/85"
          >
            Suggest a term <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "DefinedTermSet",
              "@id": `${site.url}/glossary/#set`,
              name: `${site.name} glossary`,
              description:
                "Plain definitions of web design, development, search, and AI terms, with New Zealand specifics.",
              url: `${site.url}/glossary/`,
              inLanguage: "en-NZ",
              publisher: { "@id": `${site.url}/#organization` },
              hasDefinedTerm: glossary.map((t) => ({
                "@type": "DefinedTerm",
                "@id": `${site.url}/glossary/${t.slug}/#term`,
                name: t.term,
                description: t.short,
                url: `${site.url}/glossary/${t.slug}/`,
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Glossary", item: `${site.url}/glossary/` },
              ],
            },
          ],
        }}
      />
    </>
  );
}
