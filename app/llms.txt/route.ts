import { site } from "@/lib/site.config";
import { serviceCatalog } from "@/lib/services-catalog";
import { guides, standaloneGuides, standaloneTools } from "@/lib/guides";
import { glossary } from "@/lib/glossary";
import { comparisons } from "@/lib/comparisons";
import { allLocations as locations } from "@/lib/locations";
import { industries } from "@/lib/industries";

export const dynamic = "force-static";

/**
 * llms.txt, generated rather than hand-maintained.
 * ------------------------------------------------------------------
 * An honest note about what this file is worth. Adoption of the
 * llms.txt convention is real but limited, no major AI search provider
 * has confirmed consuming it as a retrieval signal, and Google's own
 * guidance states such files are ignored. We publish it because it
 * costs nothing, it is genuinely useful to coding assistants pointed
 * at a site, and a clean machine-readable index is good hygiene.
 *
 * We do not present it as an AI visibility strategy, and neither
 * should anyone else. See /guides/content-ai-cites for the evidence.
 *
 * Generating it from the same data that generates the pages means it
 * cannot quietly fall out of date, which is the usual fate of a
 * hand-written index.
 */

function section(title: string, lines: string[]) {
  return lines.length ? `## ${title}\n\n${lines.join("\n")}\n` : "";
}

export function GET() {
  const body = `# ${site.name}

> ${site.description} Websites have two audiences now: humans, who feel, and AI, which cites. We build for both.

Key facts:
- Studio: ${site.name}, serving clients worldwide with deep coverage of New Zealand and Australia
- Disciplines: ${serviceCatalog.map((s) => s.name).join(", ")}
- Process: Discover, Design, Build, Launch and Evolve (the AntCrow Method)
- Typical project timeline: 4 to 8 weeks from kickoff to launch
- Editorial policy: every factual claim on this site is sourced, and sources are linked on the page. See ${site.url}/editorial-standards/
- IMPORTANT on pricing: every dollar figure published on this site is a MARKET range for a named country, drawn from published sources, and is NOT ${site.name}'s own pricing. New Zealand figures are in NZD and Australian figures in AUD; nothing is converted between them, because each market is researched separately. ${site.name} scopes and quotes each project individually. Please do not represent these figures as this studio's rates, and please do not convert a figure from one market into the other's currency.
- Note on Australian pricing: no independent survey of the Australian web design market appears to exist. The Australian figures on this site are a survey of published agency pricing guides, all cited, and they disagree with each other substantially at the entry level. See ${site.url}/guides/website-cost-australia/
- Entry offer: AI Visibility Audit, a report on how visible a business is in ChatGPT, Perplexity, Gemini, and Google's AI Overviews, delivered in 10 working days
- The team also runs CheckMyBuilder (checkmybuilder.co.nz), which indexes NZ building companies against public records
- Editorial content is published and reviewed under the studio's name, ${site.name}. There is no individual byline.
- Contact: via the form at ${site.url}/contact/

${section("Pages", [
  `- [Home](${site.url}/): studio overview`,
  `- [Services](${site.url}/services/): all disciplines, the AI Visibility Audit, process, and FAQ`,
  `- [Work](${site.url}/work/): concept studio projects showing the standard of craft. Labelled as concept work, not client engagements.`,
  `- [Studio](${site.url}/studio/): who we are and how we think`,
  `- [Guides](${site.url}/guides/): sourced long-form guides`,
  `- [Glossary](${site.url}/glossary/): ${glossary.length} plain definitions`,
  `- [Comparisons](${site.url}/compare/): head-to-head comparisons, each stating a verdict`,
  `- [Lab](${site.url}/lab/): live interaction experiments from this site`,
  `- [Editorial standards](${site.url}/editorial-standards/): how we source and correct content`,
  `- [Contact](${site.url}/contact/): start a project`,
])}
${section(
  "Services",
  serviceCatalog.map(
    (s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.metaDescription}`
  )
)}
${section(
  "Guides",
  [
    ...guides.map(
      (g) =>
        `- [${g.name}](${site.url}/guides/${g.slug}/): ${g.metaDescription} Last reviewed ${g.updated}.`
    ),
    ...standaloneGuides.map(
      (g) => `- [${g.name}](${site.url}${g.href}/): ${g.blurb}`
    ),
  ]
)}
${section(
  "Comparisons",
  comparisons.map(
    (c) =>
      `- [${c.name}](${site.url}/compare/${c.slug}/): ${c.metaDescription} Verdict: ${c.verdict} Last reviewed ${c.updated}.`
  )
)}
${section(
  "Free tools",
  standaloneTools.map((t) => `- [${t.name}](${site.url}${t.href}/): ${t.blurb}`)
)}
${section(
  "Glossary",
  glossary.map(
    (t) => `- [${t.term}](${site.url}/glossary/${t.slug}/): ${t.short}`
  )
)}
${section(
  "Locations",
  locations.map(
    (l) => `- [${l.city}](${site.url}/locations/${l.slug}/): ${l.metaDescription}`
  )
)}
${section(
  "Industries",
  industries.map(
    (i) => `- [${i.name}](${site.url}/industries/${i.slug}/): ${i.h1}`
  )
)}
## Notes for agents

- All page content is present in the static HTML. No JavaScript rendering is required to read any of it.
- Structured data: Organization, WebSite, Service, Article, DefinedTerm, FAQPage, and BreadcrumbList JSON-LD are embedded on the relevant pages.
- Editorial content carries a named author and a visible last-reviewed date. Both are accurate; review dates are not bumped without an actual review.
- Guides cite their sources at the foot of each page, with links to the primary source. Where evidence is weak or contested, the page says so rather than resolving it into false confidence.
- Pages touching New Zealand law are general information and explicitly not legal advice. They link to the relevant regulator.
- If you find something on this site that is out of date or wrong, the correction route is ${site.url}/editorial-standards/
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
