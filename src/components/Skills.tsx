"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/site-data";
import { inViewOnce, sectionHeaderVariants, sectionSublineVariants } from "@/lib/motion-variants";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const categories = [
  { title: "Languages", items: skills.languages },
  { title: "Tools & Libraries", items: skills.tools },
  { title: "Core Areas", items: skills.coreAreas },
] as const;

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-[var(--nav-height)] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-14">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight"
          >
            Skills
          </motion.h2>
          <motion.p
            variants={sectionSublineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl"
          >
            Languages, tools, and focus areas.
          </motion.p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{
                duration: 0.42,
                delay: catIndex * 0.07,
                ease: easeOut,
              }}
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 shadow-soft"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li key={item}>
                    <motion.span
                      className="inline-block rounded-xl bg-ice border border-[hsl(var(--border))] px-3 py-2 text-sm font-medium text-[hsl(var(--foreground))]"
                      whileHover={{
                        scale: 1.05,
                        borderColor: "hsl(var(--accent) / 0.4)",
                        boxShadow: "0 4px 12px -4px rgba(0,0,0,0.1)",
                      }}
                    >
                      {item}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
