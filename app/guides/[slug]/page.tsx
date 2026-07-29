import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import GuideBody, { headingsOf } from "@/components/GuideBody";
import ContentMeta from "@/components/ContentMeta";
import Sources from "@/components/Sources";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { guides, getGuide } from "@/lib/guides";
import { site } from "@/lib/site.config";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  const path = `/guides/${guide.slug}/`;
  return {
    title: { absolute: `${guide.metaTitle} | ${site.name}` },
    description: guide.metaDescription,
    alternates: {
      canonical: path,
      languages: { "en-NZ": path, "x-default": path },
    },
    openGraph: {
      type: "article",
      title: guide.metaTitle,
      description: guide.metaDescription,
      publishedTime: guide.published,
      modifiedTime: guide.updated,
    },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const contents = headingsOf(guide.blocks);
  const related = guide.related
    .map((slug) => getGuide(slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">
            (Guides · {guide.category})
          </span>
          <AnimatedHeading
            as="h1"
            text={guide.h1}
            className="mt-6 font-serif text-display-md text-balance"
          />
          {/* The standfirst is the direct answer. Written so an assistant
              can quote it on its own and still be accurate. */}
          <Reveal delay={0.15}>
            <p className="mt-8 text-xl leading-relaxed">{guide.standfirst}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <ContentMeta
              updated={guide.updated}
              reviewNote={`${guide.readingTime} min read`}
              className="mt-8 border-t border-line pt-6"
            />
          </Reveal>
        </header>

        {/* Contents. Also gives the page a set of in-page anchors, which
            makes individual sections linkable and quotable. */}
        {contents.length > 2 && (
          <Reveal>
            <nav
              aria-label="On this page"
              className="mt-12 max-w-3xl rounded-2xl border border-line p-6 md:p-8"
            >
              <span className="label text-ash">On this page</span>
              <ol className="mt-4 space-y-2">
                {contents.map((c, i) => (
                  <li key={c.id} className="flex gap-3 text-sm">
                    <span aria-hidden className="tabular-nums text-ash">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${c.id}`}
                      className="text-ash underline-offset-4 hover:text-ink hover:underline"
                    >
                      {c.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        <GuideBody blocks={guide.blocks} />

        {/* FAQ */}
        {guide.faqs.length > 0 && (
          <section className="mt-20 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl">
              Common questions
            </h2>
            <div className="mt-8">
              <FAQ items={guide.faqs} />
            </div>
          </section>
        )}

        <Sources
          items={guide.sources}
          note="Every factual claim on this page traces to one of the following. If you find something here that is out of date, we would genuinely like to know."
        />

        {/* CTA */}
        <Reveal>
          <section className="mt-16 max-w-3xl border-t border-line pt-10">
            <p className="font-serif text-2xl md:text-3xl">
              Want this handled rather than explained?
            </p>
            <p className="mt-4 text-ash">
              {site.name} builds websites with all of the above built in. Tell
              us what you are trying to achieve and we will tell you honestly
              what is worth doing.
            </p>
            <Link
              href="/contact"
              data-cursor="Start"
              data-cursor-theme="dark"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-bone transition-colors hover:bg-ink/85"
            >
              Start a project <span aria-hidden>→</span>
            </Link>
          </section>
        </Reveal>

        {/* Related */}
        <nav className="mt-16 border-t border-line pt-8" aria-label="Related guides">
          <span className="label text-ash">Keep reading</span>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/guides"
              className="text-ash underline underline-offset-4 hover:text-ink"
            >
              All guides
            </Link>
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/guides/${r.slug}`}
                className="text-ash underline underline-offset-4 hover:text-ink"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </nav>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: guide.metaTitle,
              description: guide.metaDescription,
              // Attributed to the organisation. Never add a Person node or
              // a personal name here.
              author: { "@id": `${site.url}/#organization` },
              publisher: { "@id": `${site.url}/#organization` },
              datePublished: guide.published,
              dateModified: guide.updated,
              inLanguage: "en-NZ",
              isAccessibleForFree: true,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${site.url}/guides/${guide.slug}/`,
              },
              // Declaring the sources we cite is both honest and the
              // strongest single content signal in the GEO research.
              citation: guide.sources.map((s) => ({
                "@type": "CreativeWork",
                name: s.title,
                publisher: { "@type": "Organization", name: s.publisher },
                url: s.href,
              })),
            },
            {
              "@type": "FAQPage",
              mainEntity: guide.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides/` },
                { "@type": "ListItem", position: 3, name: guide.name, item: `${site.url}/guides/${guide.slug}/` },
              ],
            },
          ],
        }}
      />
    </>
  );
}
