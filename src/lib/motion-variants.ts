import type { Variants } from "framer-motion";

/** Premium ease — smooth deceleration, no linear snap */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Section titles / intros */
export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, ease: easeOutExpo },
  },
};

export const sectionSublineVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easeOutExpo, delay: 0.05 },
  },
};

/** Parent: staggers direct children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.03,
    },
  },
};

/** Tighter stagger for dense grids */
export const staggerContainerTight: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

/** Card / block entrance: translateY + opacity + subtle scale */
export const fadeUpScale: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: easeOutExpo,
    },
  },
};

export const fadeUpScaleFeatured: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.46,
      ease: easeOutExpo,
    },
  },
};

/**
 * Shared viewport config for all scroll-triggered reveals.
 * Positive bottom margin pre-fires the observer so elements animate
 * as they approach the viewport (not only after fully entering it).
 */
export const inViewOnce = {
  once: true as const,
  amount: 0.04,
  margin: "0px 0px 120px 0px",
};

/** Section wrapper entrance */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: easeOutExpo },
  },
};

export const sectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.03 },
  },
};

/** Link / button micro-interaction */
export const tapScale = { scale: 0.98 };
export const linkHover = {
  y: -1,
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

const springCard = { type: "spring" as const, stiffness: 380, damping: 28 };

/** Project / card shells — use initial="rest" whileHover="hover" */
export const projectCardFeaturedShell: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 12px 40px -12px hsl(var(--foreground) / 0.08)",
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow:
      "0 32px 64px -16px hsl(var(--accent) / 0.22), 0 12px 24px -8px hsl(var(--foreground) / 0.06)",
    transition: springCard,
  },
};

export const projectCardShell: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 10px 36px -12px hsl(var(--foreground) / 0.06)",
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow:
      "0 28px 56px -14px hsl(var(--foreground) / 0.12), 0 0 0 1px hsl(var(--accent) / 0.12)",
    transition: springCard,
  },
};

export const projectCardTitle: Variants = {
  rest: { x: 0 },
  hover: { x: 3, transition: { type: "spring", stiffness: 420, damping: 30 } },
};

export const projectCardArrow: Variants = {
  rest: { x: 0, opacity: 0.85 },
  hover: { x: 5, opacity: 1, transition: { type: "spring", stiffness: 380, damping: 22 } },
};

/** Nested grid after featured — staggers only grid cards */
export const staggerGridWrapper: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.02,
    },
  },
};
