import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { locations, getLocation } from "@/lib/locations";
import { site } from "@/lib/site.config";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const loc = getLocation(params.slug);
  if (!loc) return {};
  const path = `/locations/${loc.slug}/`;
  return {
    title: { absolute: `${loc.metaTitle} | ${site.name}` },
    description: loc.metaDescription,
    alternates: {
      canonical: path,
      languages: { "en-NZ": path, "x-default": path },
    },
  };
}

export default function LocationPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  const siblings = locations.filter((l) => l.slug !== loc.slug);

  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">
            (Locations · {loc.city}, {loc.country})
          </span>
          <AnimatedHeading
            as="h1"
            text={loc.h1}
            className="mt-6 font-serif text-display-md text-balance"
          />
          {/* Quotable direct answer */}
          <Reveal immediate delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed">{loc.intro}</p>
          </Reveal>
        </header>

        {/* Sections */}
        <div className="mt-16 max-w-3xl space-y-14">
          {loc.sections.map((s) => (
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

        {/* Services cross-links */}
        <Reveal>
          <section className="mt-16 max-w-3xl rounded-2xl border border-line p-8">
            <span className="label text-ash">What we do in {loc.city}</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "Web design & development", href: "/services" },
                { label: "Brand identity", href: "/services" },
                { label: "E-commerce", href: "/services" },
                { label: "SEO & AI search", href: "/services" },
                { label: "AI Visibility Audit", href: "/services" },
                {
                  label: "What does a website cost?",
                  href: "/guides/website-cost-nz",
                },
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
            {loc.city} questions, answered
          </h2>
          <div className="mt-8 max-w-3xl">
            <FAQ items={loc.faqs} />
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="mt-16 max-w-3xl border-t border-line pt-10">
            <p className="font-serif text-2xl md:text-3xl">
              Building something in {loc.city}?
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

        {/* Sibling locations */}
        <nav className="mt-16 border-t border-line pt-8" aria-label="Other locations">
          <span className="label text-ash">Also serving</span>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/locations" className="underline underline-offset-4 hover:text-ink text-ash">
              All locations
            </Link>
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/locations/${s.slug}`}
                className="text-ash underline underline-offset-4 hover:text-ink"
              >
                {s.city}
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
              mainEntity: loc.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "Service",
              name: `Web design in ${loc.city}`,
              provider: { "@id": `${site.url}/#organization` },
              areaServed: { "@type": "City", name: loc.city },
              serviceType: "Web design and development",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Locations", item: `${site.url}/locations/` },
                { "@type": "ListItem", position: 3, name: loc.city, item: `${site.url}/locations/${loc.slug}/` },
              ],
            },
          ],
        }}
      />
    </>
  );
}
