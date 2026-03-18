"use client";

import { motion } from "framer-motion";
import { extracurriculars } from "@/lib/site-data";
import { inViewOnce } from "@/lib/motion-variants";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Extracurriculars() {
  return (
    <section id="extracurriculars" className="scroll-mt-[var(--nav-height)] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.4, ease: easeOut }}
          className="text-xl font-semibold text-[hsl(var(--foreground))] mb-8"
        >
          Campus Involvement
        </motion.h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {extracurriculars.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: easeOut,
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
