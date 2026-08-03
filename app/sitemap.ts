import type { MetadataRoute } from "next";
import { site } from "@/lib/site.config";
import { allLocations as locations } from "@/lib/locations";
import { industries } from "@/lib/industries";
import { serviceCatalog } from "@/lib/services-catalog";
import { guides, standaloneGuides, standaloneTools } from "@/lib/guides";
import { glossary } from "@/lib/glossary";
import { comparisons } from "@/lib/comparisons";

export const dynamic = "force-static";

/**
 * The sitemap is generated from the same data that generates the pages,
 * so it cannot drift out of sync. The one rule when adding a section:
 * add it to a data file, not to a hand-written list here.
 *
 * lastModified is set only where we genuinely track a review date.
 * Stamping every URL with today's date is a common trick and a
 * transparent one: crawlers discount a sitemap where everything is
 * always fresh.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/work", "/services", "/studio", "/lab", "/contact"];
  const hubs = ["/locations", "/industries", "/guides", "/glossary", "/compare"];
  const legal = ["/privacy", "/editorial-standards"];

  return [
    ...core.map((path) => ({
      url: `${site.url}${path}/`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.9,
    })),

    // Service detail pages: the commercial pages that carry the money
    // queries, so they sit above the hubs in priority.
    ...serviceCatalog.map((s) => ({
      url: `${site.url}/services/${s.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    ...hubs.map((path) => ({
      url: `${site.url}${path}/`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),

    // Guides carry a real review date, which is both a freshness signal
    // and a claim we have to keep honest.
    ...guides.map((g) => ({
      url: `${site.url}/guides/${g.slug}/`,
      lastModified: new Date(`${g.updated}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Comparison pages. Comparison intent is disproportionately cited by
    // AI systems, so these get guide-level priority.
    ...comparisons.map((c) => ({
      url: `${site.url}/compare/${c.slug}/`,
      lastModified: new Date(`${c.updated}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...standaloneGuides.map((g) => ({
      url: `${site.url}${g.href}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...standaloneTools.map((t) => ({
      url: `${site.url}${t.href}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...locations.map((l) => ({
      url: `${site.url}/locations/${l.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    ...industries.map((i) => ({
      url: `${site.url}/industries/${i.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Glossary terms sit lower on purpose: they are genuinely useful and
    // highly quotable, but they are reference pages rather than the ones
    // we most want crawled first.
    ...glossary.map((t) => ({
      url: `${site.url}/glossary/${t.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),

    ...legal.map((path) => ({
      url: `${site.url}${path}/`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
