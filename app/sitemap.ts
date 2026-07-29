import type { MetadataRoute } from "next";
import { site } from "@/lib/site.config";
import { locations } from "@/lib/locations";
import { industries } from "@/lib/industries";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/work", "/services", "/studio", "/lab", "/contact", "/privacy"];
  const hubs = ["/locations", "/industries"];
  const guides = [
    "/guides/website-cost-nz",
    "/guides/squarespace-wix-vs-custom",
    "/guides/ai-search-visibility-nz",
    "/tools/website-cost-calculator",
    "/tools/website-health-check",
  ];
  const spokes = [
    ...locations.map((l) => `/locations/${l.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
  ];

  return [
    ...core.map((path) => ({
      url: `${site.url}${path}/`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...hubs.map((path) => ({
      url: `${site.url}${path}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...spokes.map((path) => ({
      url: `${site.url}${path}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...guides.map((path) => ({
      url: `${site.url}${path}/`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
