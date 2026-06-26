"use client";

/**
 * Infinite horizontal marquee. Duplicates content for a seamless loop.
 */
export default function Marquee({
  items,
  separator = "✦",
  className = "",
}: {
  items: string[];
  separator?: string;
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div className="flex shrink-0 animate-marquee whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-serif text-[8vw] leading-none md:text-[5vw]">
              {item}
            </span>
            <span className="mx-8 text-2xl text-ash md:mx-14">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
