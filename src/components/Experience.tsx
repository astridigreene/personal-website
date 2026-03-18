"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { experiences } from "@/lib/site-data";
import { inViewOnce, sectionHeaderVariants, sectionSublineVariants } from "@/lib/motion-variants";

function smoothstep(edge0: number, edge1: number, x: number) {
  if (edge1 <= edge0) return x >= edge1 ? 1 : 0;
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function TimelineDot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const scale = useTransform(progress, (p) => {
    if (total <= 1) return 1.12;
    const tk = index / (total - 1);
    if (p >= tk) {
      return 1.06 + 0.14 * Math.exp(-(p - tk) * 10);
    }
    const ramp = smoothstep(tk - 0.16, tk, p);
    return 1 + ramp * 0.22;
  });

  const glow = useTransform(progress, (p) => {
    if (total <= 1) return 1;
    const tk = index / (total - 1);
    return 0.22 + 0.78 * smoothstep(tk - 0.1, tk + 0.04, p);
  });
  const boxShadow = useTransform(glow, (g) => {
    const spread = 6 + g * 18;
    const alpha = 0.2 + g * 0.45;
    return `0 0 0 3px hsl(var(--background)), 0 0 ${spread}px hsl(var(--accent) / ${alpha})`;
  });

  return (
    <motion.div
      className="relative z-[2] mt-6 box-content h-3 w-3 shrink-0 rounded-full border-[3px] border-[hsl(var(--background))] bg-accent md:mt-8 dark:border-[hsl(var(--background))]"
      style={{ scale, boxShadow }}
      aria-hidden
    />
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.05 });
  const n = experiences.length;

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 0.88", "end 0.12"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 32,
    mass: 0.35,
    restDelta: 0.0008,
  });

  const trackGlowOpacity = useTransform(smoothProgress, [0, 0.15, 1], [0.2, 0.85, 1]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-mt-24 section-alt py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-14">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight"
          >
            Experience
          </motion.h2>
          <motion.p
            variants={sectionSublineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl"
          >
            Roles and impact.
          </motion.p>
        </header>

        <div
          ref={gridRef}
          className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-6 gap-y-10 md:grid-cols-[1.5rem_minmax(0,1fr)] md:gap-x-8 md:gap-y-12"
          style={{ gridTemplateRows: `repeat(${n}, auto)` }}
        >
          {/* Left rail: subgrid rows align with each experience card */}
          <div
            className="col-start-1 row-start-1 row-end-[-1] grid grid-rows-subgrid gap-0 relative min-w-[1.25rem] md:min-w-[1.5rem]"
            aria-hidden
          >
            {/* Static track + scroll-driven fill (same vertical axis as dots) */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-9 bottom-9 md:top-11 md:bottom-11 w-px z-0 rounded-full overflow-visible">
              <div
                className="absolute inset-0 rounded-full bg-[hsl(var(--border))]"
                aria-hidden
              />
              <motion.div
                className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full rounded-full origin-top"
                style={{
                  scaleY: smoothProgress,
                  background:
                    "linear-gradient(180deg, hsl(var(--accent)) 0%, hsl(199 82% 52%) 45%, hsl(192 78% 48%) 100%)",
                  boxShadow:
                    "0 0 14px hsl(var(--accent) / 0.45), 0 0 28px hsl(199 82% 52% / 0.2)",
                }}
              />
              <motion.div
                className="absolute left-1/2 top-0 -translate-x-1/2 w-6 h-full origin-top pointer-events-none rounded-full blur-md -z-10"
                style={{
                  scaleY: smoothProgress,
                  background:
                    "linear-gradient(180deg, hsl(var(--accent) / 0.4) 0%, transparent 72%)",
                  opacity: trackGlowOpacity,
                }}
              />
            </div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex justify-center justify-self-center w-full"
              >
                <TimelineDot index={index} total={n} progress={smoothProgress} />
              </div>
            ))}
          </div>

          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              style={{ gridColumn: 2, gridRow: index + 1 }}
              initial={{ opacity: 0, x: -24, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-w-0"
            >
              <motion.div
                className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
                whileHover={{
                  y: -4,
                  boxShadow: "0 24px 48px -16px rgba(0,0,0,0.15)",
                  borderColor: "hsl(var(--accent) / 0.25)",
                }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="shrink-0 text-sm text-[hsl(var(--muted))] sm:text-right">
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span className="mx-1.5">·</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[hsl(var(--foreground))]"
                    >
                      <span className="mt-0.5 shrink-0 text-accent">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
