"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { leadership } from "@/lib/site-data";

export function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <section id="leadership" className="scroll-mt-24 section-alt py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight">
            Leadership & Community
          </h2>
          <p className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl">
            Initiative and impact outside the classroom.
          </p>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft max-w-3xl"
        >
          <div className="flex flex-wrap items-baseline gap-2 gap-y-1">
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
              {leadership.title}
            </h3>
            <span className="text-accent font-medium">{leadership.role}</span>
            <span className="text-sm text-[hsl(var(--muted))]">{leadership.period}</span>
          </div>
          <ul className="mt-6 space-y-3">
            {leadership.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="text-[hsl(var(--foreground))] leading-relaxed flex gap-3"
              >
                <span className="text-accent shrink-0 mt-0.5">→</span>
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
