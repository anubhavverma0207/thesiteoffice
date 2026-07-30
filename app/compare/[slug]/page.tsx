import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import GuideBody from "@/components/GuideBody";
import ContentMeta from "@/components/ContentMeta";
import Sources from "@/components/Sources";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { comparisons, getComparison } from "@/lib/comparisons";
import { site } from "@/lib/site.config";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getComparison(params.slug);
  if (!c) return {};
  const path = `/compare/${c.slug}/`;
  return {
    title: { absolute: `${c.metaTitle} | ${site.name}` },
    description: c.metaDescription,
    alternates: {
      canonical: path,
      languages: { "en-NZ": path, "x-default": path },
    },
    openGraph: {
      type: "article",
      title: c.metaTitle,
      description: c.metaDescription,
      publishedTime: c.published,
      modifiedTime: c.updated,
    },
  };
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const c = getComparison(params.slug);
  if (!c) notFound();

  const related = c.related
    .map((slug) => getComparison(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">(Compare · {c.category})</span>
          <AnimatedHeading
            as="h1"
            text={c.h1}
            className="mt-6 font-serif text-display-md text-balance"
          />
          <Reveal immediate delay={0.15}>
            <p className="mt-8 text-xl leading-relaxed">{c.standfirst}</p>
          </Reveal>
          <Reveal immediate delay={0.2}>
            <ContentMeta
              updated={c.updated}
              reviewNote={`${c.readingTime} min read`}
              className="mt-8 border-t border-line pt-6"
            />
          </Reveal>
        </header>

        {/* The verdict, before the evidence. A comparison page that will
            not commit to a recommendation is not worth publishing, and
            an answer stated up front is the passage most likely to be
            retrieved and quoted. */}
        <Reveal>
          <section className="mt-14 max-w-3xl rounded-2xl border-l-4 border-flag bg-paper p-8">
            <h2 className="font-serif text-2xl md:text-3xl">
              The short answer
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ash">{c.verdict}</p>
          </section>
        </Reveal>

        {/* Best-for mapping */}
        <section className="mt-12 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl">
            Which one suits you
          </h2>
          <ul className="mt-8 space-y-0">
            {c.bestFor.map((b, i) => (
              <Reveal key={b.option} delay={i * 0.06} as="li" className="grid gap-2 border-t border-line py-6 md:grid-cols-3 md:gap-6">
                <span className="font-serif text-xl text-ink">
                  {b.option}
                </span>
                <span className="text-ash md:col-span-2">{b.who}</span>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* The head-to-head table */}
        <Reveal>
          <figure className="mt-14 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl">Side by side</h2>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-paper">
                    {c.table.headers.map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="px-5 py-4 font-medium text-ink"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.table.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-line last:border-0">
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-5 py-4 align-top ${
                            ci === 0 ? "font-medium text-ink" : "text-ash"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {c.table.caption && (
              <figcaption className="mt-3 text-sm text-ash">
                {c.table.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>

        <GuideBody blocks={c.blocks} />

        {c.faqs.length > 0 && (
          <section className="mt-20 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl">
              Common questions
            </h2>
            <div className="mt-8">
              <FAQ items={c.faqs} />
            </div>
          </section>
        )}

        <Sources
          items={c.sources}
          note="Comparisons change. Everything above was checked against these sources on the review date shown, and time-sensitive facts are dated in the text."
        />

        <Reveal>
          <section className="mt-16 max-w-3xl border-t border-line pt-10">
            <p className="font-serif text-2xl md:text-3xl">
              Still not sure which way to go?
            </p>
            <p className="mt-4 text-ash">
              Tell us the situation. We will give you a straight answer, including
              when the answer is that you do not need us.
            </p>
            <Link
              href="/contact"
              data-cursor="Ask"
              data-cursor-theme="dark"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-bone transition-colors hover:bg-ink/85"
            >
              Ask us <span aria-hidden>→</span>
            </Link>
          </section>
        </Reveal>

        <nav className="mt-16 border-t border-line pt-8" aria-label="Related comparisons">
          <span className="label text-ash">Also compared</span>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/compare"
              className="text-ash underline underline-offset-4 hover:text-ink"
            >
              All comparisons
            </Link>
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/compare/${r.slug}`}
                className="text-ash underline underline-offset-4 hover:text-ink"
              >
                {r.name}
              </Link>
            ))}
            <Link
              href="/guides"
              className="text-ash underline underline-offset-4 hover:text-ink"
            >
              Guides
            </Link>
          </div>
        </nav>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: c.metaTitle,
              description: c.metaDescription,
              // Studio attribution only. No personal names on this site.
              author: { "@id": `${site.url}/#organization` },
              publisher: { "@id": `${site.url}/#organization` },
              datePublished: c.published,
              dateModified: c.updated,
              inLanguage: "en-NZ",
              isAccessibleForFree: true,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${site.url}/compare/${c.slug}/`,
              },
              citation: c.sources.map((s) => ({
                "@type": "CreativeWork",
                name: s.title,
                publisher: { "@type": "Organization", name: s.publisher },
                url: s.href,
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Compare", item: `${site.url}/compare/` },
                { "@type": "ListItem", position: 3, name: c.name, item: `${site.url}/compare/${c.slug}/` },
              ],
            },
          ],
        }}
      />
    </>
  );
}
