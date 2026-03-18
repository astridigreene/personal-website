"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/site-data";
import { inViewOnce, sectionHeaderVariants, sectionSublineVariants } from "@/lib/motion-variants";

const categories = [
  { title: "Languages", items: skills.languages },
  { title: "Tools & Libraries", items: skills.tools },
  { title: "Core Areas", items: skills.coreAreas },
] as const;

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.08 });

  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28" ref={ref}>
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
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: catIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 shadow-soft"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.15 + catIndex * 0.05 + i * 0.03 }}
                  >
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
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
