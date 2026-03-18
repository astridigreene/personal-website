import type { Variants } from "framer-motion";

/** Premium ease — smooth deceleration, no linear snap */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const transitionBase = {
  duration: 0.55,
  ease: easeOutExpo,
} as const;

export const transitionSlow = {
  duration: 0.72,
  ease: easeOutExpo,
} as const;

/** Section titles / intros */
export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSlow,
  },
};

export const sectionSublineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...transitionBase, delay: 0.08 },
  },
};

/** Parent: staggers direct children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

/** Tighter stagger for dense grids */
export const staggerContainerTight: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

/** Card / block entrance: translateY + opacity + subtle scale */
export const fadeUpScale: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: easeOutExpo,
    },
  },
};

export const fadeUpScaleFeatured: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: easeOutExpo,
    },
  },
};

/** Shared viewport for scroll reveals */
export const inViewOnce = {
  once: true as const,
  amount: 0.12,
  margin: "0px 0px -8% 0px",
};

/** Section wrapper (between-section feel) */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const sectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
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

export const projectCardIcon: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.08, rotate: -4, transition: springCard },
};

/** Nested grid after featured — staggers only grid cards */
export const staggerGridWrapper: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};
