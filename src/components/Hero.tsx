"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site-data";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden pt-20 scroll-mt-0"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ice via-[hsl(var(--background))] to-[hsl(var(--background))]" />
        <motion.div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]"
          animate={{ x: [0, 80, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[80px]"
          animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--steel)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--steel)/0.15)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center mx-auto max-w-5xl px-6 text-center relative w-full">
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
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px -10px hsl(var(--accent) / 0.35)", rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
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

              <motion.div
                variants={item}
                className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                  <Link
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-glow transition-shadow"
                  >
                    View Projects
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                  <Link
                    href="#resume"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-6 py-3.5 text-sm font-semibold text-[hsl(var(--foreground))] hover:border-accent/50 hover:bg-ice transition-colors"
                  >
                    Resume
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
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
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col items-center gap-2 py-12 shrink-0"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[hsl(var(--muted)/0.9)]">
            Scroll
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border border-[hsl(var(--muted)/0.4)] flex justify-center pt-1.5"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-1 h-1 rounded-full bg-accent/80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
