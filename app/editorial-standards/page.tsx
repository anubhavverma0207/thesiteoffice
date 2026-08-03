import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import ContentMeta from "@/components/ContentMeta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site.config";
import { hreflangFor } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Editorial standards",
  description:
    "How AntCrow researches, sources, and corrects the content it publishes, including what we will not publish and how to tell us we are wrong.",
  alternates: {
    canonical: "/editorial-standards/",
    languages: hreflangFor("/editorial-standards/"),
  },
};

/**
 * Editorial standards.
 * ------------------------------------------------------------------
 * This page exists for two reasons, one principled and one practical.
 *
 * Principled: we publish guidance that businesses make spending
 * decisions on, some of it touching legal obligations. Saying openly
 * how it is researched and how errors get fixed is the minimum a
 * reader is owed.
 *
 * Practical: trust signals are read by people deciding whether to
 * hire us, and by systems deciding whether to cite us. A stated
 * corrections policy, named authorship, and visible review dates are
 * among the few trust signals a young company can offer honestly,
 * because they cost nothing but discipline.
 */

const principles = [
  {
    no: "01",
    title: "Every factual claim is sourced",
    body: "Numbers, standards, dates, legal obligations, and statements about how a third-party system behaves all trace to a primary source listed on the page. Where a claim cannot be sourced, we soften it or cut it rather than publishing it on confidence alone. Sources are linked so you can check them rather than take our word.",
  },
  {
    no: "02",
    title: "Primary sources over commentary",
    body: "Where a regulator, standards body, or platform has published something itself, we cite that rather than an article summarising it. Much of what circulates about New Zealand website obligations is overseas commentary applied to a jurisdiction it does not fit, which is precisely how the myth that New Zealand requires cookie consent banners became common knowledge.",
  },
  {
    no: "03",
    title: "Uncertainty is stated, not smoothed over",
    body: "Some questions genuinely do not have settled answers. Whether the Human Rights Act extends to private websites has not been tested in a New Zealand court. The evidence for several popular AI visibility tactics is weak or contradictory. We say so. A confident answer to an unsettled question is worse than useless, because it is acted on.",
  },
  {
    no: "04",
    title: "Nothing is invented",
    body: "No fabricated testimonials, no invented statistics, no awards we have not won, no client names we cannot use, no case studies describing work that did not happen. Concept work is labelled as concept work. Where a section would normally hold social proof and we do not yet have any, it stays empty rather than being filled.",
  },
  {
    no: "05",
    title: "Pricing is labelled as market data or as ours",
    body: "Every dollar figure published on this site is a New Zealand market range drawn from published sources, not AntCrow's own pricing, and it is labelled that way in the sentence rather than in a footnote. We quote individual projects individually. Presenting market averages as our rates would be misleading, and reading them as our rates is the natural mistake to make.",
  },
  {
    no: "06",
    title: "Review dates are real",
    body: "When a page says it was last reviewed on a date, someone read it on that date and checked that it still held. We do not bump dates to look fresh. That practice is common, and it corrodes the one signal a reader has for judging whether guidance is current.",
  },
  {
    no: "07",
    title: "We disclose our interest",
    body: "AntCrow is a web design and engineering studio. When we write about choosing an agency, comparing platforms, or whether a service is worth buying, we have a commercial interest in the answer. We say so on the page. Where the honest answer is that you do not need what we sell, the guidance says that too.",
  },
  {
    no: "08",
    title: "Legal content is general information",
    body: "We are not lawyers. Pages touching the Privacy Act, the Fair Trading Act, accessibility obligations, or any other legal matter explain what published sources say and link to the regulator. They are not advice about your circumstances, and they say so plainly rather than in small print.",
  },
];

export default function EditorialStandardsPage() {
  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">(Editorial standards)</span>
          <AnimatedHeading
            as="h1"
            text="How we decide what to publish."
            className="mt-6 font-serif text-display-md text-balance"
          />
          <Reveal immediate delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed">
              We publish guidance that people make spending decisions on, some
              of it touching legal obligations. These are the rules we hold
              ourselves to, written down so you can hold us to them as well.
            </p>
          </Reveal>
          <Reveal immediate delay={0.2}>
            <ContentMeta
              updated="2026-07-30"
              className="mt-8 border-t border-line pt-6"
            />
          </Reveal>
        </header>

        <div className="mt-16 max-w-3xl">
          {principles.map((p) => (
            <Reveal key={p.no}>
              <section className="border-t border-line py-10">
                <span className="label text-ash">{p.no}</span>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ash">
                  {p.body}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        {/* Corrections */}
        <Reveal>
          <section className="mt-10 max-w-3xl rounded-2xl border-l-4 border-flag bg-paper p-8">
            <h2 className="font-serif text-2xl md:text-3xl">
              Corrections
            </h2>
            <p className="mt-4 leading-relaxed text-ash">
              If something here is wrong or out of date, we want to know, and
              we would rather hear it from you than leave it standing. Email us
              with the page and what is incorrect. Substantive corrections are
              made to the page and the review date is updated to reflect the
              day the change was made. We do not quietly edit and backdate.
            </p>
            <a
              href={`mailto:${site.email}?subject=Correction`}
              className="mt-6 inline-flex items-center gap-2 text-ink underline underline-offset-4"
            >
              Report a correction <span aria-hidden>↗</span>
            </a>
          </section>
        </Reveal>

        {/* Attribution. Studio-level by design: no personal names. */}
        <Reveal>
          <section className="mt-16 max-w-3xl border-t border-line pt-10">
            <span className="label text-ash">Who publishes this</span>
            <h2 className="mt-4 font-serif text-2xl md:text-3xl">
              {site.name}
            </h2>
            <p className="mt-4 leading-relaxed text-ash">{site.author.bio}</p>
            <p className="mt-4 leading-relaxed text-ash">
              Content is researched, reviewed, and published under the studio&apos;s
              name rather than an individual byline, and the studio stands behind
              all of it.
            </p>
            <Link
              href="/studio"
              className="mt-6 inline-flex items-center gap-2 text-ink underline underline-offset-4"
            >
              About the studio <span aria-hidden>→</span>
            </Link>
          </section>
        </Reveal>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "Editorial standards",
              url: `${site.url}/editorial-standards/`,
              description:
                "How AntCrow researches, sources, and corrects the content it publishes.",
              isPartOf: { "@id": `${site.url}/#website` },
              publisher: { "@id": `${site.url}/#organization` },
            },
            {
              // Studio-level attribution only. No Person node anywhere.
              "@type": "Organization",
              "@id": `${site.url}/#organization`,
              name: site.name,
              url: site.url,
              description: site.author.bio,
            },
          ],
        }}
      />
    </>
  );
}
