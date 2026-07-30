import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import AiVisibilityTracker from "@/components/AiVisibilityTracker";
import ContentMeta from "@/components/ContentMeta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "AI Visibility Tracker",
  description:
    "Free tool to measure whether ChatGPT, Perplexity, Google AI Mode, and Copilot recommend your business. Runs in your browser, no account, no email.",
  alternates: {
    canonical: "/tools/ai-visibility-tracker/",
    languages: {
      "en-NZ": "/tools/ai-visibility-tracker/",
      "x-default": "/tools/ai-visibility-tracker/",
    },
  },
};

export default function AiVisibilityTrackerPage() {
  return (
    <>
      <header className="container-x pt-36 pb-12 md:pt-48 md:pb-16">
        <span className="label text-ash">(Free tool)</span>
        <AnimatedHeading
          as="h1"
          text="Does AI recommend _you?_"
          className="mt-6 font-serif text-display-lg text-balance"
        />
        <Reveal immediate delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg text-ash">
            Ten prompts, four assistants, one honest baseline. This generates
            the questions your customers actually ask an AI, tells you exactly
            what to look for in the answers, and scores each engine separately.
            About twenty minutes. No account, no email, nothing leaves your
            browser.
          </p>
        </Reveal>
        <Reveal immediate delay={0.25}>
          <ContentMeta
            updated="2026-07-30"
            className="mt-8 border-t border-line pt-6"
          />
        </Reveal>
      </header>

      <section className="container-x pb-24">
        <AiVisibilityTracker />
      </section>

      {/* Method, stated openly. A measurement tool that hides its method
          is asking to be trusted rather than checked. */}
      <section className="container-x border-t border-line py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl">The method</h2>
          </div>
          <div className="max-w-2xl md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed text-ash">
              There is no API that reports whether ChatGPT recommends a
              business. Every product selling an AI visibility score is running
              prompts and reading the answers. This tool does the same thing,
              openly, and you keep the result.
            </p>
            <p className="mt-5 leading-relaxed text-ash">
              The prompt set covers five intent types, because visibility fails
              for different reasons and each needs a different fix. Entity
              prompts test whether the model knows you exist at all. Category
              and local prompts test whether you make a shortlist. Problem
              prompts test whether you surface when a customer describes a need
              without naming your category. Comparison prompts test how you are
              positioned against a named rival.
            </p>
            <p className="mt-5 leading-relaxed text-ash">
              Results are scored per engine and never blended. Published
              analysis finds roughly nine in ten cited pages appear in only one
              engine, and Google&apos;s own AI Overviews and AI Mode agree on
              only a small minority of their citations. A single combined score
              would be averaging measurements that are not comparable.
            </p>
            <p className="mt-5 leading-relaxed text-ash">
              Being <em>named</em> and being <em>cited</em> are recorded
              separately, because an assistant can recommend a business while
              quoting somebody else&apos;s page about it. That is a different
              problem with a different fix, and collapsing the two hides it.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x border-t border-line py-16">
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link
            href="/guides/content-ai-cites"
            className="text-ink underline underline-offset-4 hover:text-ash"
          >
            What AI search actually cites
          </Link>
          <Link
            href="/guides/ai-crawlers-explained"
            className="text-ink underline underline-offset-4 hover:text-ash"
          >
            AI crawlers explained
          </Link>
          <Link
            href="/tools/website-health-check"
            className="text-ink underline underline-offset-4 hover:text-ash"
          >
            Website health check
          </Link>
          <Link
            href="/services/ai-search-optimisation"
            className="text-ink underline underline-offset-4 hover:text-ash"
          >
            AI search optimisation
          </Link>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: "AI Visibility Tracker",
              url: `${site.url}/tools/ai-visibility-tracker/`,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any modern web browser",
              description:
                "Free tool that generates a prompt set and scoring framework for measuring whether AI assistants recommend a business.",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "NZD",
              },
              publisher: { "@id": `${site.url}/#organization` },
              isAccessibleForFree: true,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Tools", item: `${site.url}/guides/` },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "AI Visibility Tracker",
                  item: `${site.url}/tools/ai-visibility-tracker/`,
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
