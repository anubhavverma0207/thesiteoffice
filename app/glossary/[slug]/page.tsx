import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import ContentMeta from "@/components/ContentMeta";
import JsonLd from "@/components/JsonLd";
import { glossary, getTerm } from "@/lib/glossary";
import { site } from "@/lib/site.config";

/** One shared review date for the glossary. Bump it when terms are reviewed. */
const GLOSSARY_REVIEWED = "2026-07-30";

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const t = getTerm(params.slug);
  if (!t) return {};
  const path = `/glossary/${t.slug}/`;
  return {
    // Deliberately not keyword-stuffed. Large-sample analysis finds
    // heavily keyword-matched titles are cited LESS often, not more.
    title: { absolute: `${t.term} | ${site.name} Glossary` },
    description: t.short,
    alternates: {
      canonical: path,
      languages: { "en-NZ": path, "x-default": path },
    },
  };
}

export default function TermPage({ params }: { params: { slug: string } }) {
  const t = getTerm(params.slug);
  if (!t) notFound();

  const related = t.related
    .map((slug) => getTerm(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">(Glossary · {t.category})</span>
          <AnimatedHeading
            as="h1"
            text={t.term}
            className="mt-6 font-serif text-display-md text-balance"
          />
          {t.aka && t.aka.length > 0 && (
            <Reveal immediate delay={0.1}>
              <p className="mt-4 text-sm text-ash">
                Also known as: {t.aka.join(", ")}
              </p>
            </Reveal>
          )}
          {/* The one-sentence definition. This is the passage most likely
              to be extracted, so it has to be complete on its own. */}
          <Reveal immediate delay={0.15}>
            <p className="mt-8 text-xl leading-relaxed">{t.short}</p>
          </Reveal>
        </header>

        <div className="mt-14 max-w-3xl space-y-12">
          {/* immediate: on a phone this definition is the largest text block
              on the page and sits at the fold, so it is the LCP element.
              Leaving it on the scroll-triggered reveal measured 6.0s. */}
          <Reveal immediate>
            <section>
              <h2 className="font-serif text-2xl md:text-3xl">
                In full
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ash">
                {t.definition}
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="font-serif text-2xl md:text-3xl">
                Why it matters
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ash">
                {t.whyItMatters}
              </p>
            </section>
          </Reveal>

          {t.misconception && (
            <Reveal>
              <section className="rounded-2xl border-l-4 border-flag bg-paper p-8">
                <h2 className="font-serif text-2xl">
                  A common misconception
                </h2>
                <p className="mt-4 leading-relaxed text-ash">
                  {t.misconception}
                </p>
              </section>
            </Reveal>
          )}
        </div>

        <Reveal>
          <ContentMeta
            updated={GLOSSARY_REVIEWED}
            className="mt-14 max-w-3xl border-t border-line pt-6"
          />
        </Reveal>

        {/* Related terms */}
        {related.length > 0 && (
          <nav
            className="mt-12 max-w-3xl border-t border-line pt-8"
            aria-label="Related terms"
          >
            <span className="label text-ash">Related terms</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/glossary/${r.slug}`}
                  className="rounded-full border border-line px-4 py-2 text-sm text-ash transition-colors hover:border-ink hover:text-ink"
                >
                  {r.term}
                </Link>
              ))}
            </div>
          </nav>
        )}

        <Reveal>
          <section className="mt-12 max-w-3xl border-t border-line pt-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link
                href="/glossary"
                className="text-ash underline underline-offset-4 hover:text-ink"
              >
                All terms
              </Link>
              <Link
                href="/guides"
                className="text-ash underline underline-offset-4 hover:text-ink"
              >
                Guides
              </Link>
              <Link
                href="/contact"
                className="text-ash underline underline-offset-4 hover:text-ink"
              >
                Ask us something
              </Link>
            </div>
          </section>
        </Reveal>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "DefinedTerm",
              "@id": `${site.url}/glossary/${t.slug}/#term`,
              name: t.term,
              description: t.short,
              ...(t.aka && t.aka.length > 0 ? { alternateName: t.aka } : {}),
              inDefinedTermSet: {
                "@type": "DefinedTermSet",
                "@id": `${site.url}/glossary/#set`,
                name: `${site.name} glossary`,
                url: `${site.url}/glossary/`,
              },
              url: `${site.url}/glossary/${t.slug}/`,
            },
            {
              "@type": "WebPage",
              name: t.term,
              url: `${site.url}/glossary/${t.slug}/`,
              description: t.short,
              dateModified: GLOSSARY_REVIEWED,
              inLanguage: "en-NZ",
              isPartOf: { "@id": `${site.url}/#website` },
              publisher: { "@id": `${site.url}/#organization` },
              author: { "@id": `${site.url}/#organization` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Glossary", item: `${site.url}/glossary/` },
                { "@type": "ListItem", position: 3, name: t.term, item: `${site.url}/glossary/${t.slug}/` },
              ],
            },
          ],
        }}
      />
    </>
  );
}
