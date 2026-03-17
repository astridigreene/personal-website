"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { about, education, currentFocus } from "@/lib/site-data";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

  const stats = [
    { label: "School", value: education.school },
    { label: "GPA", value: education.gpa },
  ];

  return (
    <section id="about" className="scroll-mt-24 section-alt py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight">
            About
          </h2>
          <p className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl">
            Background and focus.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <motion.div
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
              whileHover={{ boxShadow: "0 20px 50px -15px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[hsl(var(--foreground))] leading-relaxed text-base md:text-lg">
                {about.bio}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 space-y-6"
          >
            <motion.div
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 shadow-soft"
              whileHover={{ scale: 1.01, boxShadow: "0 12px 40px -12px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted))] mb-4">
                Quick facts
              </h3>
              <ul className="space-y-3">
                {stats.map((s, i) => (
                  <li key={s.label} className="flex justify-between gap-4">
                    <span className="text-[hsl(var(--muted))]">{s.label}</span>
                    <span className="font-medium text-[hsl(var(--foreground))] text-right">
                      {s.value}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 shadow-soft"
              whileHover={{ scale: 1.01, boxShadow: "0 12px 40px -12px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted))] mb-4">
                Current focus
              </h3>
              <ul className="space-y-2">
                {currentFocus.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[hsl(var(--foreground))] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
