"use client";

import { MotionConfig } from "framer-motion";

/**
 * Global motion policy.
 * ------------------------------------------------------------------
 * This exists because an audit found something worse than a bug: this
 * site published the claim that "every site we build honours the
 * operating system's reduced-motion preference" while sixteen of its
 * own components animated regardless of that setting. The only CSS
 * honouring the preference covered the background grain and view
 * transitions. Everything driven by Framer Motion ignored it.
 *
 * `reducedMotion="user"` makes every motion component in the tree read
 * the user's `prefers-reduced-motion` setting. When reduction is
 * requested, Framer Motion disables transform and layout animations,
 * which are the ones that cause nausea, dizziness, and migraine for
 * people with vestibular disorders, while still allowing opacity and
 * colour transitions, which are not implicated in the same way.
 *
 * That is the correct behaviour rather than switching everything off:
 * WCAG asks for motion to be removable, not for interfaces to become
 * inert. A cross-fade still communicates that something changed.
 *
 * There is a matching CSS safety net in globals.css for animation that
 * never passes through Framer Motion. Keep both. Neither is redundant.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
