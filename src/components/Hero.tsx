"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site-data";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ice via-[hsl(var(--background))] to-[hsl(var(--background))]" />
        <motion.div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px]"
          animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[80px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--steel)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--steel)/0.15)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center relative">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16 md:text-left">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row md:items-center md:gap-16 flex-1 w-full"
          >
            <motion.div className="flex justify-center md:justify-end order-2 md:order-2 flex-shrink-0" variants={item}>
              <motion.div
                className="w-44 h-44 md:w-56 md:h-56 rounded-2xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] shadow-soft flex items-center justify-center overflow-hidden ring-2 ring-accent/20"
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px -12px hsl(var(--accent) / 0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {site.headshot ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={site.headshot}
                    alt={site.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl md:text-6xl font-bold text-accent select-none">
                    AG
                  </span>
                )}
              </motion.div>
            </motion.div>

            <div className="order-1 md:order-1 flex-1 mb-8 md:mb-0 text-left">
              <motion.p
                variants={item}
                className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4"
              >
                Computer Science · University of Michigan
              </motion.p>
              <motion.h1
                variants={item}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[hsl(var(--foreground))] tracking-tight"
              >
                {site.name}
              </motion.h1>
              <motion.p
                variants={item}
                className="mt-5 text-lg md:text-xl text-[hsl(var(--muted))] max-w-xl md:mx-0 mx-auto leading-relaxed"
              >
                {site.tagline}
              </motion.p>
              <motion.p
                variants={item}
                className="mt-3 text-sm md:text-base text-[hsl(var(--muted))] max-w-lg md:mx-0 mx-auto"
              >
                {site.currently}
              </motion.p>

              <motion.div
                variants={item}
                className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-glow transition-shadow"
                  >
                    View Projects
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#resume"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-6 py-3.5 text-sm font-semibold text-[hsl(var(--foreground))] hover:border-accent/50 hover:bg-ice transition-colors"
                  >
                    Resume
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-transparent px-6 py-3.5 text-sm font-semibold text-accent hover:bg-accent/10 transition-colors"
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[hsl(var(--muted))]">
            Scroll
          </span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-[hsl(var(--muted)/0.5)] flex justify-center pt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
