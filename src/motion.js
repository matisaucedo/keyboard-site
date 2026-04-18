import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

export const EASE = [0.23, 1, 0.32, 1];
export const EASE_IN_OUT = [0.44, 0, 0.56, 1];
export const EASE_SPRING = [0.34, 1.56, 0.64, 1];
export const DURATION = { fast: 0.25, base: 0.5, slow: 0.7 };
export const STAGGER = 0.10;
export const VIEWPORT = { once: true, margin: "-80px" };

/** DS v2 requirement: always use this hook in animated components */
export function useReducedMotion() {
  return useFramerReducedMotion() ?? false;
}

export function makeTransition(reduced, override = {}) {
  if (reduced) return { duration: 0 };
  return { ease: EASE, duration: DURATION.slow, ...override };
}
