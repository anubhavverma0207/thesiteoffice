import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { serviceCatalog, getService } from "@/lib/services-catalog";
import { site } from "@/lib/site.config";
import { hreflangFor } from "@/lib/markets";

export function generateStaticParams() {
  return serviceCatalog.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const svc = getService(params.slug);
  if (!svc) return {};
  const path = `/services/${svc.slug}/`;
  return {
    title: { absolute: `${svc.metaTitle} | ${site.name}` },
    description: svc.metaDescription,
    alternates: {
      canonical: path,
      languages: hreflangFor(path),
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const svc = getService(params.slug);
  if (!svc) notFound();

  const related = svc.related
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">
            ({svc.no} · Services)
          </span>
          <AnimatedHeading
            as="h1"
            text={svc.h1}
            className="mt-6 font-serif text-display-md text-balance"
          />
          {/* Direct answer: written to be quotable verbatim by AI engines */}
          <Reveal immediate delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed">{svc.intro}</p>
          </Reveal>
        </header>

        {/* Definition block. Self-contained on purpose: this is the passage
            an answer engine can safely lift without surrounding context. */}
        <Reveal>
          <section className="mt-14 max-w-3xl rounded-2xl border-l-4 border-flag bg-paper p-8">
            <h2 className="font-serif text-2xl md:text-3xl">
              {svc.definition.term}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ash">
              {svc.definition.body}
            </p>
          </section>
        </Reveal>

        {/* Sections */}
        <div className="mt-16 max-w-3xl space-y-14">
          {svc.sections.map((s) => (
            <Reveal key={s.heading}>
              <section>
                <h2 className="font-serif text-3xl md:text-4xl text-balance">
                  {s.heading}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ash">
                  {s.body}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        {/* Deliverables + fit, side by side on desktop */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <Reveal>
            <section className="rounded-2xl border border-line p-8">
              <span className="label text-ash">What you get</span>
              <ul className="mt-6 space-y-3">
                {svc.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm">
                    <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-flag" />
                    {d}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <section className="rounded-2xl border border-line p-8">
              <span className="label text-ash">A good fit if</span>
              <ul className="mt-6 space-y-3">
                {svc.goodFit.map((g) => (
                  <li key={g} className="flex gap-3 text-sm">
                    <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crow" />
                    {g}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl">
            {svc.name}: questions, answered
          </h2>
          <div className="mt-8 max-w-3xl">
            <FAQ items={svc.faqs} />
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="mt-16 max-w-3xl border-t border-line pt-10">
            <p className="font-serif text-2xl md:text-3xl">
              Thinking about {svc.name.toLowerCase()}?
            </p>
            <p className="mt-4 text-ash">
              Tell us what you are trying to achieve. We will tell you honestly
              whether this is the right thing to spend money on.
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

        {/* Related services */}
        <nav className="mt-16 border-t border-line pt-8" aria-label="Related services">
          <span className="label text-ash">Related</span>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/services"
              className="text-ash underline underline-offset-4 hover:text-ink"
            >
              All services
            </Link>
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
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
              "@type": "Service",
              name: svc.name,
              description: svc.metaDescription,
              provider: { "@id": `${site.url}/#organization` },
              serviceType: svc.name,
              url: `${site.url}/services/${svc.slug}/`,
              areaServed: [
                { "@type": "Country", name: "New Zealand" },
                { "@type": "Country", name: "Australia" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `${svc.name} deliverables`,
                itemListElement: svc.deliverables.map((d) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: d },
                })),
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: svc.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services/` },
                { "@type": "ListItem", position: 3, name: svc.name, item: `${site.url}/services/${svc.slug}/` },
              ],
            },
          ],
        }}
      />
    </>
  );
}
