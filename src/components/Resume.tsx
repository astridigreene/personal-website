"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { site, resumeSummary, education } from "@/lib/site-data";

export function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  const highlights = [
    `${education.degree} at ${education.school}`,
    "Technical analysis & RAG systems",
    "Research & full-stack development",
    "Data structures, algorithms, ML",
  ];

  return (
    <section id="resume" className="scroll-mt-24 section-navy py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Resume
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl">
            Summary and download.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
        >
          <p className="text-white/90 leading-relaxed text-lg">
            {resumeSummary}
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-2">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="text-white/80 flex items-center gap-2 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {h}
              </motion.li>
            ))}
          </ul>
          <motion.a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-navy px-6 py-3.5 text-sm font-semibold shadow-soft"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume (PDF)
            <span className="text-navy/70">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
