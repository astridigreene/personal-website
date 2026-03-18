"use client";

import { motion } from "framer-motion";
import { about, education, currentFocus } from "@/lib/site-data";
import {
  inViewOnce,
  sectionHeaderVariants,
  sectionSublineVariants,
  sectionReveal,
  sectionStagger,
} from "@/lib/motion-variants";

export function About() {
  const stats = [
    { label: "School", value: education.school },
    { label: "GPA", value: education.gpa },
  ];

  return (
    <section id="about" className="scroll-mt-[var(--nav-height)] section-alt py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
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

        {/*
          items-start: prevents grid from equalizing column heights.
          Without it, the bio card stretches to match the stacked sidebar height,
          leaving awkward empty space at the card bottom.
        */}
        <motion.div
          className="grid md:grid-cols-12 gap-8 md:gap-12 items-start"
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
        >
          {/* Bio — main content column */}
          <motion.div variants={sectionReveal} className="md:col-span-7">
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

          {/* Sidebar — two compact cards stacked */}
          <motion.div variants={sectionReveal} className="md:col-span-5 flex flex-col gap-6">
            {/* Quick facts */}
            <motion.div
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
              whileHover={{ scale: 1.01, boxShadow: "0 12px 40px -12px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted))] mb-5">
                Quick facts
              </h3>
              <ul className="space-y-3">
                {stats.map((s) => (
                  <li key={s.label} className="flex items-start justify-between gap-6">
                    <span className="text-[hsl(var(--muted))] shrink-0">{s.label}</span>
                    <span className="font-medium text-[hsl(var(--foreground))] text-right">
                      {s.value}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Current focus */}
            <motion.div
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
              whileHover={{ scale: 1.01, boxShadow: "0 12px 40px -12px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted))] mb-5">
                Current focus
              </h3>
              <ul className="space-y-2.5">
                {currentFocus.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={inViewOnce}
                    transition={{ duration: 0.36, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-2.5 text-[hsl(var(--foreground))]"
                  >
                    {/* mt-[5px] aligns the dot with the cap-height of the first text line */}
                    <span className="w-1.5 h-1.5 mt-[5px] rounded-full bg-accent shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
