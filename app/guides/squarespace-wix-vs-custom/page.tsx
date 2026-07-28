import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Squarespace or Wix vs a Custom Website: Which Is Right for Your NZ Business?",
  description:
    "An honest comparison for NZ businesses in 2026: when Squarespace or Wix is genuinely the right call, when custom design pays for itself, and the real costs of each over three years.",
  alternates: {
    canonical: "/guides/squarespace-wix-vs-custom/",
    languages: {
      "en-NZ": "/guides/squarespace-wix-vs-custom/",
      "x-default": "/guides/squarespace-wix-vs-custom/",
    },
  },
};

const compareRows = [
  {
    factor: "Upfront cost",
    diy: "$0 plus your time (typically 20 to 60 hours)",
    custom: "$5,000 to $25,000 typical NZ market range",
  },
  {
    factor: "Ongoing cost",
    diy: "$25 to $80+ per month, forever, per site",
    custom: "Hosting near $0 to $50/month; maintenance as agreed",
  },
  {
    factor: "Design",
    diy: "Template shared with thousands of other businesses",
    custom: "Made for your brand; cannot be mistaken for anyone else",
  },
  {
    factor: "Speed & performance",
    diy: "Adequate; heavy builders often score poorly on mobile",
    custom: "Engineered: fast loads and passing Core Web Vitals are design goals",
  },
  {
    factor: "SEO & AI visibility",
    diy: "Basics only; limited control over structure and schema",
    custom: "Full control: structured data, machine-readable HTML, quotable content",
  },
  {
    factor: "Ownership",
    diy: "You rent the platform; leaving means rebuilding",
    custom: "You own the code and content outright",
  },
  {
    factor: "Growth ceiling",
    diy: "Fine until you need custom features, then a wall",
    custom: "Built to extend: e-commerce, bookings, integrations, AI features",
  },
];

const vsFaqs = [
  {
    q: "When is Squarespace or Wix the right choice?",
    a: "When you are testing an idea, budget is under roughly $2,000, and the website's job is simply to exist: a menu, contact details, a few photos. For a hobby, a side project, or a brand-new venture proving demand, a DIY builder is genuinely the right call, and any honest studio will tell you so.",
  },
  {
    q: "When does a custom website pay for itself?",
    a: "When customers compare you against competitors before buying. If a website that converts even slightly better wins you one extra client or a few extra sales a month, custom design typically pays for itself within the first year, then keeps paying. It matters most in competitive local markets and considered purchases.",
  },
  {
    q: "Is Wix or Squarespace bad for SEO?",
    a: "Not bad, but limited. The basics work, and plenty of DIY sites rank for uncontested searches. The ceiling shows in competitive markets: limited control over page structure, structured data, and performance, which are increasingly what decide both Google rankings and whether AI assistants cite you.",
  },
  {
    q: "What does each option really cost over three years?",
    a: "A DIY builder at $40 to $80 per month costs roughly $1,500 to $3,000 over three years plus your own hours. A custom site costs more upfront but often less to run, and it compounds: better conversion, better search visibility, and no platform rent. The real comparison is value created, not just dollars spent.",
  },
  {
    q: "Can I start on Squarespace and go custom later?",
    a: "Yes, and many businesses should. Prove the business first, then upgrade when the website becomes the thing holding you back. Content usually transfers; design and structure are rebuilt. We regularly move businesses from DIY builders to custom builds when they outgrow the template.",
  },
];

export default function VsGuide() {
  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">(Guide · Updated July 2026)</span>
          <AnimatedHeading
            as="h1"
            text="Squarespace or Wix vs _custom?_"
            className="mt-6 font-serif text-display-md text-balance"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed">
              The honest answer: <strong>it depends on what your website
              has to do.</strong> If it just needs to exist, a DIY builder
              like Squarespace or Wix is the right call and costs a
              fraction of custom work. If it needs to win customers who
              compare you against competitors, custom design usually pays
              for itself. Here is the difference, without the sales pitch.
              Yes, we are a studio that builds custom websites; we will
              still tell you when you do not need one.
            </p>
          </Reveal>
        </header>

        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl md:text-4xl">
              Side by side, honestly
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink/20">
                    <th className="py-4 pr-6 label text-ash">Factor</th>
                    <th className="py-4 pr-6 label text-ash">
                      Squarespace / Wix
                    </th>
                    <th className="py-4 label text-ash">Custom website</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r) => (
                    <tr key={r.factor} className="border-b border-line">
                      <td className="py-5 pr-6 font-medium">{r.factor}</td>
                      <td className="py-5 pr-6 text-ash">{r.diy}</td>
                      <td className="py-5 text-ash">{r.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl">
              The 2026 wrinkle: AI reads your website now
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ash">
              Customers increasingly ask AI assistants who to buy from, and
              AI assistants read website structure, not just looks.
              Machine-readable HTML, structured data, and quotable answers
              decide whether you appear in those recommendations. This is
              where template builders quietly cost the most: they give you
              limited control over exactly the layer AI engines rely on. It
              will not matter for a hobby site. It matters a great deal if
              AI recommendations are becoming how your customers choose.
            </p>
          </section>
        </Reveal>

        <section className="mt-16">
          <h2 className="font-serif text-3xl md:text-4xl">
            The questions everyone asks
          </h2>
          <div className="mt-8 max-w-3xl">
            <FAQ items={vsFaqs} />
          </div>
        </section>

        <Reveal>
          <section className="mt-16 max-w-3xl border-t border-line pt-10">
            <h2 className="font-serif text-3xl">Still not sure?</h2>
            <p className="mt-4 text-lg text-ash">
              Run your project through{" "}
              <Link
                href="/tools/website-cost-calculator"
                className="underline underline-offset-4 hover:text-ink"
              >
                our cost calculator
              </Link>{" "}
              or read{" "}
              <Link
                href="/guides/website-cost-nz"
                className="underline underline-offset-4 hover:text-ink"
              >
                the full NZ pricing guide
              </Link>
              . Or just ask us: if a DIY builder serves you better, we will
              say so.
            </p>
            <Link
              href="/contact"
              data-cursor="Ask"
              data-cursor-theme="dark"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-bone transition-colors hover:bg-ink/85"
            >
              Get an honest opinion <span aria-hidden>→</span>
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
              headline:
                "Squarespace or Wix vs a Custom Website for NZ Businesses",
              datePublished: "2026-07-28",
              dateModified: "2026-07-28",
              author: { "@id": `${site.url}/#organization` },
              publisher: { "@id": `${site.url}/#organization` },
              mainEntityOfPage: `${site.url}/guides/squarespace-wix-vs-custom/`,
            },
            {
              "@type": "FAQPage",
              mainEntity: vsFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
    </>
  );
}
