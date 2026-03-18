"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { extracurriculars } from "@/lib/site-data";

export function Extracurriculars() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

  return (
    <section id="extracurriculars" className="scroll-mt-[var(--nav-height)] py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl font-semibold text-[hsl(var(--foreground))] mb-6"
        >
          Campus Involvement
        </motion.h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {extracurriculars.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5 shadow-soft"
            >
              <p className="font-semibold text-[hsl(var(--foreground))]">{item.shortName}</p>
              <p className="mt-1 text-sm text-[hsl(var(--muted))]">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
