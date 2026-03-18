"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type SectionVariant = "default" | "alt" | "elevated" | "navy";

type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
  noPadding?: boolean;
};

const variantClasses: Record<SectionVariant, string> = {
  default: "section-default",
  alt: "section-alt",
  elevated: "section-elevated",
  navy: "section-navy",
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  variant = "default",
  noPadding,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.08, margin: "0px 0px -80px 0px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-[var(--nav-height)] ${variantClasses[variant]} ${noPadding ? "" : "py-20 md:py-28"} ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        {(title || subtitle) && (
          <motion.header
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-14"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.header>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
