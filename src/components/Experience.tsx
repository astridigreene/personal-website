"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/site-data";
import { inViewOnce, sectionHeaderVariants, sectionSublineVariants } from "@/lib/motion-variants";

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.05 });
  const lastIndex = experiences.length - 1;

  return (
    <section id="experience" className="scroll-mt-24 section-alt py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-14">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight"
          >
            Experience
          </motion.h2>
          <motion.p
            variants={sectionSublineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl"
          >
            Roles and impact.
          </motion.p>
        </header>

        {/* Grid: fixed timeline column + fluid card column; consistent horizontal gap */}
        <div className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-6 gap-y-10 md:grid-cols-[1.5rem_minmax(0,1fr)] md:gap-x-8 md:gap-y-12">
          {experiences.map((exp, index) => (
            <Fragment key={exp.id}>
              <div className="relative flex justify-center justify-self-center">
                {/* Bridge line through row gap (connects to previous card row) */}
                {index > 0 && (
                  <div
                    className="absolute left-1/2 top-0 z-0 w-px -translate-x-1/2 -translate-y-full bg-[hsl(var(--border))] max-md:h-10 md:h-12"
                    aria-hidden
                  />
                )}

                {/* Dot: vertically aligned with card title row (matches p-6 / md:p-8) */}
                <motion.div
                  className="relative z-[1] mt-6 box-content h-3 w-3 shrink-0 rounded-full border-[3px] border-[hsl(var(--background))] bg-accent md:mt-8 dark:border-[hsl(var(--background))]"
                  whileHover={{ scale: 1.15, boxShadow: "0 0 0 6px hsl(var(--accent) / 0.2)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  aria-hidden
                />

                {/* Line from below dot to end of row + into next gap */}
                {index < lastIndex && (
                  <div
                    className="absolute left-1/2 z-0 w-px -translate-x-1/2 bg-[hsl(var(--border))] max-md:top-[calc(1.5rem+0.75rem)] max-md:bottom-[-2.5rem] md:top-[calc(2rem+0.75rem)] md:bottom-[-3rem]"
                    aria-hidden
                  />
                )}
              </div>

              <motion.article
                initial={{ opacity: 0, x: -24, filter: "blur(4px)" }}
                animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-w-0"
              >
                <motion.div
                  className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 24px 48px -16px rgba(0,0,0,0.15)",
                    borderColor: "hsl(var(--accent) / 0.25)",
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="shrink-0 text-sm text-[hsl(var(--muted))] sm:text-right">
                      <span>{exp.period}</span>
                      {exp.location && (
                        <>
                          <span className="mx-1.5">·</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[hsl(var(--foreground))]"
                      >
                        <span className="mt-0.5 shrink-0 text-accent">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
