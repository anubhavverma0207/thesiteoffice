"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/lib/data";

/**
 * Editorial project tile: image scales on hover, the title underlines,
 * and the whole card masks up into view on scroll.
 */
export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      data-cursor="View"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={{ backgroundColor: project.accent }}
      >
        <motion.img
          src={project.image}
          alt={project.client}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.1s] ease-silk group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/10" />
        <span className="absolute left-5 top-5 label rounded-full bg-bone/85 px-3 py-1 text-ink backdrop-blur">
          {project.year}
        </span>
      </div>

      <div className="mt-5 flex items-baseline justify-between">
        <h3 className="font-serif text-2xl md:text-3xl">
          <span className="relative inline-block">
            {project.client}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 ease-silk group-hover:w-full" />
          </span>
        </h3>
        <span className="text-xs text-ash">{project.category}</span>
      </div>
    </motion.article>
  );
}
