"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/site-data";

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.05 });

  return (
    <section id="experience" className="scroll-mt-24 section-alt py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 44 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight">
            Experience
          </h2>
          <p className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl">
            Roles and impact.
          </p>
        </motion.header>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[hsl(var(--border))]" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -48, filter: "blur(4px)" }}
                animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-12 md:pl-14"
              >
                <motion.div
                  className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent border-4 border-[hsl(var(--background))] dark:border-[hsl(var(--background))]"
                  whileHover={{ scale: 1.4, boxShadow: "0 0 0 8px hsl(var(--accent) / 0.25)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                />
                <motion.div
                  className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
                  whileHover={{ y: -4, boxShadow: "0 24px 48px -16px rgba(0,0,0,0.15)", borderColor: "hsl(var(--accent) / 0.25)" }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-[hsl(var(--muted))] whitespace-nowrap">
                      {exp.period}
                      {exp.location && (
                        <>
                          <span className="mx-1.5">·</span>
                          {exp.location}
                        </>
                      )}
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm text-[hsl(var(--foreground))] leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-accent mt-0.5 shrink-0">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
