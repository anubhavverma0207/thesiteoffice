import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { industries, getIndustry } from "@/lib/industries";
import { site } from "@/lib/site.config";
import { hreflangFor } from "@/lib/markets";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const ind = getIndustry(params.slug);
  if (!ind) return {};
  const path = `/industries/${ind.slug}/`;
  return {
    title: { absolute: `${ind.metaTitle} | ${site.name}` },
    description: ind.metaDescription,
    alternates: {
      canonical: path,
      languages: hreflangFor(path, "NZ"),
    },
  };
}

export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();

  const siblings = industries.filter((i) => i.slug !== ind.slug);

  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">(Industries · {ind.name})</span>
          <AnimatedHeading
            as="h1"
            text={ind.h1}
            className="mt-6 font-serif text-display-md text-balance"
          />
          <Reveal immediate delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed">{ind.intro}</p>
          </Reveal>
        </header>

        <div className="mt-16 max-w-3xl space-y-14">
          {ind.sections.map((s) => (
            <Reveal key={s.heading}>
              <section>
                <h2 className="font-serif text-3xl md:text-4xl">
                  {s.heading}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ash">
                  {s.body}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        {/* Cross-links */}
        <Reveal>
          <section className="mt-16 max-w-3xl rounded-2xl border border-line p-8">
            <span className="label text-ash">Useful next</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                {
                  label: "What does a website cost in NZ?",
                  href: "/guides/website-cost-nz",
                },
                {
                  label: "Cost calculator",
                  href: "/tools/website-cost-calculator",
                },
                { label: "Our services", href: "/services" },
                { label: "Where we work", href: "/locations" },
              ].map((t) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className="rounded-full border border-line px-4 py-2 text-sm text-ash transition-colors hover:border-ink hover:text-ink"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl md:text-4xl">
            Common questions
          </h2>
          <div className="mt-8 max-w-3xl">
            <FAQ items={ind.faqs} />
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="mt-16 max-w-3xl border-t border-line pt-10">
            <p className="font-serif text-2xl md:text-3xl">
              In this industry? Let us show you what your website could be.
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

        {/* Siblings */}
        <nav
          className="mt-16 border-t border-line pt-8"
          aria-label="Other industries"
        >
          <span className="label text-ash">Other industries</span>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/industries"
              className="text-ash underline underline-offset-4 hover:text-ink"
            >
              All industries
            </Link>
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/industries/${s.slug}`}
                className="text-ash underline underline-offset-4 hover:text-ink"
              >
                {s.name}
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
              "@type": "FAQPage",
              mainEntity: ind.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "Service",
              name: ind.metaTitle.split("|")[0].trim(),
              provider: { "@id": `${site.url}/#organization` },
              areaServed: [
                { "@type": "Country", name: "New Zealand" },
                { "@type": "Country", name: "Australia" },
              ],
              serviceType: "Web design and development",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries/` },
                { "@type": "ListItem", position: 3, name: ind.name, item: `${site.url}/industries/${ind.slug}/` },
              ],
            },
          ],
        }}
      />
    </>
  );
}
