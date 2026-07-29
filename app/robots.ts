import type { MetadataRoute } from "next";
import { site } from "@/lib/site.config";

export const dynamic = "force-static";

/**
 * Crawler policy.
 * ------------------------------------------------------------------
 * Three distinct jobs hide behind the phrase "AI crawler":
 *
 *   1. SEARCH INDEXING  the bot builds the index an assistant cites from.
 *                       Blocking it means you cannot be cited. Ever.
 *   2. USER FETCH       a person asked the assistant about a page and it
 *                       goes and reads it. Blocking it breaks that.
 *   3. TRAINING         the bot collects content for a future model.
 *                       No direct citation effect either way.
 *
 * We allow 1 and 2 without exception, because they are the entire
 * mechanism of AI visibility. We also allow the major training crawlers,
 * since latent brand knowledge is what produces recommendations in
 * answers that were never grounded in a live search at all.
 *
 * We block only bots with no upside: bulk scrapers that resell content,
 * and crawlers documented to ignore robots.txt. Note that robots.txt is
 * advisory. A bot that ignores it here will ignore it anywhere, so the
 * bad actors below must also be stopped at the network edge to actually
 * be stopped.
 *
 * Worth knowing: Google-Extended does NOT control AI Overviews or AI
 * Mode. Those are served from the ordinary Googlebot index. The token
 * only governs Gemini training and Gemini-app grounding, so blocking it
 * would cost us Gemini grounding and gain nothing.
 */

/** Retrieval and citation. Non-negotiable. */
const SEARCH_AND_CITATION = [
  "Googlebot", // also the source for AI Overviews and AI Mode
  "Bingbot", // the whole of Copilot's retrieval, plus part of ChatGPT's
  "OAI-SearchBot", // ChatGPT search index
  "Claude-SearchBot", // Claude search index
  "PerplexityBot", // Perplexity index (not used for model training)
  "Applebot", // Siri, Spotlight, Safari suggestions
  "DuckAssistBot", // DuckDuckGo AI answers
];

/** A human asked about a page and the assistant went to read it. */
const USER_TRIGGERED = [
  "ChatGPT-User",
  "Claude-User",
  "Perplexity-User",
  "MistralAI-User",
  "Meta-ExternalFetcher",
];

/** Training collection. Allowed: it builds the brand knowledge in the weights. */
const TRAINING = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "claude-web",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Amazonbot",
];

/** No upside. Bulk resale, or documented robots.txt violators. */
const DISALLOWED = [
  "Bytespider", // widely documented ignoring robots.txt
  "Diffbot",
  "Omgilibot",
  "Omgili",
  "Timpibot",
  "ImagesiftBot",
  "Scrapy",
  "SemrushBot-OCOB",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: SEARCH_AND_CITATION, allow: "/" },
      { userAgent: USER_TRIGGERED, allow: "/" },
      { userAgent: TRAINING, allow: "/" },
      { userAgent: DISALLOWED, disallow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
