"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { research } from "@/lib/site-data";

export function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.15 });

  return (
    <section id="research" className="scroll-mt-24 section-elevated py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight">
            Research
          </h2>
          <p className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl">
            Academic and technical research.
          </p>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft overflow-hidden"
        >
          <div className="flex flex-wrap items-center gap-2 text-sm text-[hsl(var(--muted))] mb-4">
            <span>{research.institution}</span>
            <span>·</span>
            <span>{research.period}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[hsl(var(--foreground))] leading-tight">
            {research.title}
          </h3>
          <p className="mt-4 text-[hsl(var(--foreground))] leading-relaxed">
            {research.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {research.keywords.map((k, i) => (
              <motion.span
                key={k}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="rounded-lg bg-ice border border-[hsl(var(--border))] px-3 py-1.5 text-sm font-medium text-[hsl(var(--foreground))]"
              >
                {k}
              </motion.span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
