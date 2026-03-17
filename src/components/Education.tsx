"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/site-data";

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

  return (
    <section id="education" className="scroll-mt-24 py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-[hsl(var(--muted))] text-lg">
            {education.school}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
        >
          <p className="text-xl font-semibold text-[hsl(var(--foreground))]">
            {education.degree}
          </p>
          <p className="mt-2 text-[hsl(var(--muted))]">
            GPA {education.gpa} · {education.honors}
          </p>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted))]">
            Relevant coursework
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {education.coursework.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                className="rounded-lg bg-ice border border-[hsl(var(--border))] px-3 py-1.5 text-sm font-medium text-[hsl(var(--foreground))]"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
