"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /**
   * Element to render.
   * ----------------------------------------------------------------
   * IMPORTANT: pass `as="li"` whenever this wraps a list item.
   *
   * A <ul> may only contain <li> (plus script and template) elements.
   * Wrapping an <li> in this component's default <div> silently breaks
   * list semantics: assistive technology stops announcing the list and
   * its item count, which is the single most useful thing a screen
   * reader tells someone about a list. An automated audit flags it as
   * two separate WCAG failures, `list` and `listitem`.
   *
   * This shipped wrong across nine components before an audit caught
   * it. If you are adding a Reveal inside a <ul> or <ol>, use as="li"
   * and put the item's classes on the Reveal itself.
   */
  as?: "div" | "li";
  /**
   * Use for content in the initial viewport.
   * ----------------------------------------------------------------
   * The default behaviour hides content at opacity 0 until JavaScript
   * hydrates and an IntersectionObserver fires. For anything below the
   * fold that is fine, because the visitor has to scroll anyway. For
   * anything visible on load it is actively harmful: the standfirst
   * paragraph on every guide was the Largest Contentful Paint element,
   * and an audit measured 93% of a 6.5s LCP as render delay waiting on
   * a 3.4s JavaScript boot.
   *
   * `immediate` swaps the JavaScript animation for the equivalent CSS
   * one, which the browser starts at first paint with no dependency on
   * hydration at all. Same look, several seconds earlier.
   *
   * Rule of thumb: if it is above the fold, pass `immediate`.
   */
  immediate?: boolean;
};

/**
 * Generic scroll reveal: fades and lifts content into view.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = "div",
  immediate = false,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-12% 0px" });
  const reduce = useReducedMotion();

  // Above-the-fold: CSS entrance, no hydration dependency. The
  // reduced-motion block in globals.css collapses this to its final
  // state, so it needs no separate handling below.
  if (immediate) {
    const Plain = as === "li" ? "li" : "div";
    return (
      <Plain
        className={`fade-up ${className ?? ""}`}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </Plain>
    );
  }

  /**
   * Under reduced motion, bail out of the animation entirely.
   *
   * MotionConfig reducedMotion="user" is set globally, but it only
   * suppresses transform and layout animation. Opacity still animates,
   * which meant content remained at opacity 0 until scrolled into view,
   * so a reduced-motion visitor still had to trigger JavaScript to read
   * the page. A verification run found 14 paragraphs invisible on load.
   *
   * Rendering a plain element instead removes the dependency completely:
   * the content is simply there. This is what "keeping the site fully
   * functional" has to mean in practice.
   */
  if (reduce) {
    const Plain = as === "li" ? "li" : "div";
    return <Plain className={className}>{children}</Plain>;
  }

  const Tag = as === "li" ? motion.li : motion.div;

  return (
    <Tag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
};

/**
 * Word-masked heading: each word rises from behind its own inline mask,
 * staggered, while the words keep flowing like normal text.
 * Wrap a word in underscores (`_word_`) to set it in italic.
 */
export function AnimatedHeading({
  text,
  className,
  delay = 0,
  as = "h2",
}: AnimatedHeadingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const Tag = motion[as] as any;
  const plain = text.replace(/_/g, "");

  /**
   * Reduced motion: render the heading as ordinary text.
   *
   * This one was potentially serious rather than merely imperfect. Each
   * word starts at translateY(110%) inside an overflow-hidden mask, so
   * the text is clipped out of sight until the animation runs. Since
   * MotionConfig suppresses transform animation under reduced motion,
   * the words could be left sitting at their initial offset, which would
   * mean headings never appearing at all for those visitors.
   *
   * Rather than depend on how a library resolves that edge case, skip
   * the mask machinery and emit the words directly. Italic handling is
   * preserved so the typography is unchanged.
   */
  if (reduce) {
    const PlainTag = as;
    return (
      <PlainTag className={className}>
        {words.map((word, i) => (
          <span key={i}>
            {word.startsWith("_") ? (
              <em className="font-light italic">{word.replace(/_/g, "")}</em>
            ) : (
              word
            )}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </PlainTag>
    );
  }

  return (
    <Tag ref={ref} className={className} aria-label={plain}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="reveal-word">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{
                duration: 0.85,
                delay: delay + i * 0.06,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word.startsWith("_") ? (
                <em className="font-light italic">{word.replace(/_/g, "")}</em>
              ) : (
                word
              )}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
