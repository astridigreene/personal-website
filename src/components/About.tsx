"use client";

import { motion } from "framer-motion";
import { about, education, currentFocus } from "@/lib/site-data";
import {
  inViewOnce,
  sectionHeaderVariants,
  sectionSublineVariants,
  easeOutExpo,
} from "@/lib/motion-variants";

const stats = [
  { label: "School", value: education.school },
  { label: "GPA", value: education.gpa },
  { label: "Honors", value: education.honors },
] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-[var(--nav-height)] section-alt py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">

        {/* Section header */}
        <header className="mb-14">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight"
          >
            About
          </motion.h2>
          <motion.p
            variants={sectionSublineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl"
          >
            Background and focus.
          </motion.p>
        </header>

        {/* Single-column content — comfortable reading width, no whitespace gap */}
        <div className="max-w-2xl flex flex-col gap-10">

          {/* Bio — left-accented editorial block */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.44, ease: easeOutExpo }}
            className="relative pl-6 border-l-2 border-accent"
          >
            {/* Soft ambient glow behind the accent line */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-px top-0 h-full w-8"
              style={{
                background:
                  "linear-gradient(to right, hsl(var(--accent) / 0.07), transparent)",
              }}
            />
            <p className="text-[hsl(var(--foreground))] leading-relaxed text-lg md:text-[1.2rem]">
              {about.bio}
            </p>
          </motion.div>

          {/* Stats — horizontal labeled values separated by a divider */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.4, delay: 0.08, ease: easeOutExpo }}
            className="pt-8 border-t border-[hsl(var(--border))] flex flex-wrap gap-x-10 gap-y-5"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--muted))]">
                  {s.label}
                </span>
                <span className="text-sm font-semibold text-[hsl(var(--foreground))]">
                  {s.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Current focus — accent pill tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.4, delay: 0.14, ease: easeOutExpo }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--muted))] mb-3">
              Currently focused on
            </p>
            <ul className="flex flex-wrap gap-2">
              {currentFocus.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.92, y: 6 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={inViewOnce}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + i * 0.07,
                    ease: easeOutExpo,
                  }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.18 } }}
                  className="px-3 py-1.5 rounded-full text-sm font-medium
                    bg-accent/10 text-accent border border-accent/20 select-none cursor-default"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
