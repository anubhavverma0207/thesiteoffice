import Link from "next/link";
import { site } from "@/lib/site.config";

/**
 * Byline and review date for editorial pages.
 * ------------------------------------------------------------------
 * This small line is doing more work than it looks like it is.
 *
 * Large-sample analysis of AI citations consistently finds that pages
 * carrying a visible "last updated" date are cited substantially more
 * often than identical pages without one, and that the overwhelming
 * majority of cited content is under a year old. Freshness is a
 * retrieval signal, and a machine can only read the freshness it can
 * see. A dateModified buried in JSON-LD is worth less than a date the
 * extractor can find in the text.
 *
 * Two rules for using this:
 *   1. The date must be TRUE. Bumping it without reviewing the page is
 *      the kind of thing that is both dishonest and, once noticed,
 *      self-defeating.
 *   2. Pair it with dateModified in the page's JSON-LD so the machine
 *      readable and human readable versions agree.
 */

export function formatReviewDate(iso: string) {
  // en-NZ, spelled out. "30 July 2026" is unambiguous in a way that
  // 30/07/2026 is not once an American parser gets hold of it.
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function ContentMeta({
  updated,
  reviewNote,
  className = "",
}: {
  /** ISO date, YYYY-MM-DD. The day the page was genuinely last reviewed. */
  updated: string;
  /** Optional one-liner on what the review covered. */
  reviewNote?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ash ${className}`}
    >
      <span>
        Reviewed by{" "}
        <Link
          href="/editorial-standards"
          className="text-ink underline underline-offset-4 hover:text-ash"
        >
          {site.name}
        </Link>
      </span>
      <span aria-hidden className="text-line">
        ·
      </span>
      <span>
        Last reviewed{" "}
        <time dateTime={updated} className="text-ink">
          {formatReviewDate(updated)}
        </time>
      </span>
      {reviewNote && (
        <>
          <span aria-hidden className="text-line">
            ·
          </span>
          <span>{reviewNote}</span>
        </>
      )}
    </div>
  );
}
