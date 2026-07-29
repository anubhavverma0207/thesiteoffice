import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "How Much Does a Website Cost in NZ? Honest 2026 Pricing Guide",
  description:
    "What websites really cost across the New Zealand market in 2026: DIY builders from $20/month, template sites $1,000 to $4,000, custom design $3,000 to $25,000, e-commerce $5,000 to $30,000+. Market ranges, ongoing costs, and the red flags to avoid.",
  alternates: {
    canonical: "/guides/website-cost-nz/",
    languages: {
      "en-NZ": "/guides/website-cost-nz/",
      "x-default": "/guides/website-cost-nz/",
    },
  },
};

// Direct answers near the top of the page, tables in clean HTML, an FAQ,
// and schema: the structure AI engines cite for cost queries.
const priceRows = [
  {
    option: "DIY website builder (Wix, Squarespace)",
    cost: "$20 to $60 per month",
    fit: "Testing an idea, hobby projects, tight budgets",
  },
  {
    option: "Template website by a freelancer",
    cost: "$1,000 to $4,000",
    fit: "Basic online presence, no custom features",
  },
  {
    option: "Custom-designed business website",
    cost: "$3,000 to $25,000",
    fit: "Businesses where the website wins real work",
  },
  {
    option: "E-commerce website",
    cost: "$5,000 to $30,000+",
    fit: "Selling products online at any serious scale",
  },
  {
    option: "Web application or platform",
    cost: "$12,000 to $60,000+",
    fit: "Software products, portals, marketplaces",
  },
];

const ongoingRows = [
  { item: "Domain name (.co.nz or .com)", cost: "$20 to $50 per year" },
  { item: "Hosting (small business site)", cost: "$0 to $600 per year" },
  { item: "Maintenance and updates", cost: "$400 to $1,200 per year" },
  { item: "Email hosting", cost: "$0 to $200 per year" },
  {
    item: "SEO / AI search visibility (optional, ongoing)",
    cost: "$500 to $5,000+ per month",
  },
];

const costFaqs = [
  {
    q: "How much does a basic business website cost in NZ?",
    a: "Across the New Zealand market in 2026, a professionally built business website runs from about $1,000 to $15,000 or more. Template-based work from freelancers sits at the lower end, from roughly $1,000 to $4,000; custom-designed sites with strategy, copywriting, and SEO built in run $3,000 to $25,000 depending on scope. Those are market rates, not any one studio's prices.",
  },
  {
    q: "Why do website prices vary so much?",
    a: "Price follows scope and seniority. A template reskinned in a week costs less than a site with custom design, motion, content strategy, and search optimisation built by senior people. The honest question is not what a website costs but what a customer is worth to you: a site that wins one extra client a month usually pays for itself quickly.",
  },
  {
    q: "What ongoing costs should I budget for?",
    a: "Beyond the build: a domain ($20 to $50 a year), hosting ($0 to $600 a year for most business sites), and maintenance ($400 to $1,200 a year). E-commerce platforms and ongoing SEO or marketing are extra. A well-engineered static site can bring hosting close to zero.",
  },
  {
    q: "Is a cheap website worth it?",
    a: "Sometimes. If you just need an address on the internet, a DIY builder is fine and we will tell you so. But if customers compare you against competitors before calling, design quality directly changes how many of them choose you, and cheap sites are usually slow, generic, and invisible in search and AI answers.",
  },
  {
    q: "What are the red flags when comparing quotes?",
    a: "No published process, prices that seem too good to be true, stock template work presented as custom, no mention of performance or SEO, ownership of the site staying with the agency, and vague ongoing fees. Ask every agency who owns the code, what happens if you leave, and what is included after launch.",
  },
  {
    q: "How long does a website take to build in NZ?",
    a: "Template sites: 1 to 3 weeks. Custom business sites: 4 to 8 weeks. E-commerce and web applications: 8 weeks and up. Agree on a timeline before work starts and be suspicious of anyone promising a custom site in a few days.",
  },
];

export default function WebsiteCostGuide() {
  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">
            (Guide · Updated July 2026)
          </span>
          <AnimatedHeading
            as="h1"
            text="How much does a website cost in _NZ?_"
            className="mt-6 font-serif text-display-md text-balance"
          />
          {/* The direct answer, first: this is what AI engines quote */}
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed">
              Across the New Zealand market in 2026, a professionally built
              website runs anywhere from{" "}
              <strong>about $1,000 to $15,000 or more</strong>. DIY builders
              start around $20 a month, template sites run $1,000 to
              $4,000, custom-designed sites $3,000 to $25,000, and
              e-commerce $5,000 to $30,000 or more. The honest answer
              depends on what the website has to do for your business, so
              here is the full picture with no surprises.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 rounded-2xl border-l-4 border-flag bg-paper p-6">
              <p className="font-medium">
                These are New Zealand market rates, not AntCrow&apos;s
                prices.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ash">
                Every figure on this page reflects what the wider market
                charges, gathered from published New Zealand agency and
                freelancer pricing. We scope and price our own projects
                individually.
              </p>
            </div>
          </Reveal>
        </header>

        {/* Pricing table */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl md:text-4xl">
              NZ website costs at a glance (2026)
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink/20">
                    <th className="py-4 pr-6 label text-ash">Option</th>
                    <th className="py-4 pr-6 label text-ash">Typical cost</th>
                    <th className="py-4 label text-ash">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((r) => (
                    <tr key={r.option} className="border-b border-line">
                      <td className="py-5 pr-6 font-medium">{r.option}</td>
                      <td className="py-5 pr-6 whitespace-nowrap">{r.cost}</td>
                      <td className="py-5 text-ash">{r.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-ash">
              Ranges reflect published New Zealand agency and freelancer
              pricing in 2026, across the whole market. Every project is
              different; treat these as honest market brackets, not quotes
              from us or anyone else.
            </p>
          </section>
        </Reveal>

        {/* What moves the price */}
        <Reveal>
          <section className="mt-16 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl">
              What actually moves the price
            </h2>
            <ul className="mt-6 space-y-4 text-lg text-ash">
              <li>
                <strong className="text-ink">Custom design vs template.</strong>{" "}
                Design made for your brand costs more than a reskinned theme,
                and it is the single biggest driver of both price and results.
              </li>
              <li>
                <strong className="text-ink">Number of pages and content.</strong>{" "}
                Who writes the words matters: professional copy adds cost and
                usually pays for itself in conversions and search visibility.
              </li>
              <li>
                <strong className="text-ink">E-commerce and integrations.</strong>{" "}
                Payments, bookings, CRMs, and member areas each add real
                engineering work.
              </li>
              <li>
                <strong className="text-ink">Motion and interaction.</strong>{" "}
                The difference between a site that reads fine and one that
                feels unforgettable is craft time.
              </li>
              <li>
                <strong className="text-ink">SEO and AI search readiness.</strong>{" "}
                Structured data, performance, and quotable content decide
                whether Google and AI assistants can find and recommend you.
                Cheap builds skip all of it.
              </li>
            </ul>
          </section>
        </Reveal>

        {/* Ongoing costs */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl md:text-4xl">
              Ongoing costs to budget for
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink/20">
                    <th className="py-4 pr-6 label text-ash">Item</th>
                    <th className="py-4 label text-ash">Typical cost</th>
                  </tr>
                </thead>
                <tbody>
                  {ongoingRows.map((r) => (
                    <tr key={r.item} className="border-b border-line">
                      <td className="py-5 pr-6">{r.item}</td>
                      <td className="py-5 whitespace-nowrap text-ash">
                        {r.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        {/* Calculator CTA */}
        <Reveal>
          <section
            data-cursor-theme="dark"
            className="mt-16 rounded-2xl bg-ink px-8 py-12 text-bone md:px-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl">
              Want a number for your project?
            </h2>
            <p className="mt-4 max-w-xl text-bone/70">
              Our calculator turns your requirements into an honest NZD range
              in under a minute. No email required.
            </p>
            <Link
              href="/tools/website-cost-calculator"
              data-cursor="Calculate"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-bone px-7 py-3.5 text-sm text-ink transition-colors hover:bg-bone/85"
            >
              Try the NZ website cost calculator <span aria-hidden>→</span>
            </Link>
          </section>
        </Reveal>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl">
            Website cost questions, answered
          </h2>
          <div className="mt-8 max-w-3xl">
            <FAQ items={costFaqs} />
          </div>
        </section>

        {/* Honest close */}
        <Reveal>
          <section className="mt-20 max-w-3xl border-t border-line pt-10">
            <h2 className="font-serif text-3xl">Where AntCrow fits</h2>
            <p className="mt-4 text-lg text-ash">
              AntCrow builds custom websites for businesses across New
              Zealand, Australia, and beyond. We scope and price every
              project individually: tell us your budget and goals, and we
              will tell you honestly what that budget can achieve,
              including when a cheaper option would serve you better.
            </p>
            <Link
              href="/contact"
              data-cursor="Start"
              data-cursor-theme="dark"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-bone transition-colors hover:bg-ink/85"
            >
              Get an honest quote <span aria-hidden>→</span>
            </Link>
          </section>
        </Reveal>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "How Much Does a Website Cost in NZ? 2026 Pricing Guide",
              datePublished: "2026-07-28",
              dateModified: "2026-07-28",
              author: { "@id": `${site.url}/#organization` },
              publisher: { "@id": `${site.url}/#organization` },
              mainEntityOfPage: `${site.url}/guides/website-cost-nz/`,
            },
            {
              "@type": "FAQPage",
              mainEntity: costFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${site.url}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Website cost NZ",
                  item: `${site.url}/guides/website-cost-nz/`,
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
