"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { projectsByDateDesc } from "@/lib/site-data";
import {
  fadeUpScale,
  fadeUpScaleFeatured,
  inViewOnce,
  projectCardArrow,
  projectCardFeaturedShell,
  projectCardShell,
  projectCardTitle,
  sectionHeaderVariants,
  sectionSublineVariants,
  staggerContainer,
  staggerGridWrapper,
  tapScale,
} from "@/lib/motion-variants";

type Project = (typeof projectsByDateDesc)[number];

function ProjectLinks({ project }: { project: Project }) {
  const hasGithub = project.githubUrl && project.githubUrl.length > 0;
  const hasLive = project.liveUrl && project.liveUrl.length > 0;
  if (!hasGithub && !hasLive) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {hasGithub && (
        <motion.a
          href={project.githubUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] hover:border-accent hover:text-accent transition-colors"
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={tapScale}
        >
          <motion.span
            className="inline-flex"
            whileHover={{ scale: 1.1, rotate: -6 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <GitHubIcon className="w-4 h-4" />
          </motion.span>
          GitHub
        </motion.a>
      )}
      {hasLive && (
        <motion.a
          href={project.liveUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={tapScale}
        >
          Live site
        </motion.a>
      )}
    </div>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function HighlightRow({ children }: { children: ReactNode }) {
  return (
    <li className="text-[hsl(var(--foreground))] flex items-start gap-2">
      <motion.span
        className="text-accent mt-0.5 shrink-0 inline-block"
        variants={projectCardArrow}
        aria-hidden
      >
        →
      </motion.span>
      <span>{children}</span>
    </li>
  );
}

export function Projects() {
  const featured = projectsByDateDesc.find((p) => p.featured);
  const others = projectsByDateDesc.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-24 relative overflow-hidden py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      {/* Subtle ambient motion — low opacity, transform-only friendly */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <motion.div
          className="absolute -right-[20%] -top-[25%] h-[min(520px,55vw)] w-[min(520px,55vw)] rounded-full bg-accent/[0.07] blur-3xl"
          animate={{
            opacity: [0.45, 0.75, 0.45],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
        />
        <motion.div
          className="absolute -bottom-[30%] -left-[15%] h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-accent/[0.04] blur-3xl"
          animate={{
            opacity: [0.35, 0.6, 0.35],
            x: [0, 24, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
        />
      </div>

      <motion.div
        className="mx-auto max-w-5xl px-6"
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
      >
        <header className="mb-14">
          <motion.h2
            id="projects-heading"
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={sectionSublineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl"
          >
            Selected technical work.
          </motion.p>
        </header>

        <motion.div
          className="space-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
        >
          {featured && (
            <motion.article
              key={featured.id}
              variants={fadeUpScaleFeatured}
              className="group"
            >
              <motion.div
                className="rounded-2xl border-2 border-accent/30 bg-[hsl(var(--surface-elevated))] p-6 md:p-8"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={projectCardFeaturedShell}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Featured
                  </span>
                  <motion.span
                    className="text-sm text-[hsl(var(--muted))]"
                    variants={projectCardTitle}
                  >
                    {featured.date}
                  </motion.span>
                </div>
                <motion.h3
                  className="text-2xl md:text-3xl font-semibold text-[hsl(var(--foreground))]"
                  variants={projectCardTitle}
                >
                  {featured.title}
                </motion.h3>
                <p className="mt-3 text-[hsl(var(--muted))] text-lg">{featured.description}</p>
                <ul className="mt-5 space-y-2">
                  {featured.highlights.map((h, i) => (
                    <HighlightRow key={i}>{h}</HighlightRow>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tools.map((t) => (
                    <motion.span
                      key={t}
                      className="rounded-lg bg-accent/15 text-accent px-3 py-1.5 text-sm font-medium"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <ProjectLinks project={featured} />
              </motion.div>
            </motion.article>
          )}

          <motion.div
            variants={staggerGridWrapper}
            className="grid gap-6 sm:grid-cols-2"
          >
            {others.map((proj) => (
              <motion.article key={proj.id} variants={fadeUpScale} className="group h-full">
                <motion.div
                  className="h-full rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 flex flex-col"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={projectCardShell}
                >
                  <motion.span
                    className="text-sm text-[hsl(var(--muted))]"
                    variants={projectCardTitle}
                  >
                    {proj.date}
                  </motion.span>
                  <motion.h3
                    className="mt-2 text-xl font-semibold text-[hsl(var(--foreground))]"
                    variants={projectCardTitle}
                  >
                    {proj.title}
                  </motion.h3>
                  <p className="mt-2 text-sm text-[hsl(var(--muted))] leading-relaxed flex-1">
                    {proj.description}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {proj.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-[hsl(var(--foreground))] flex items-start gap-2"
                      >
                        <motion.span
                          className="text-accent mt-0.5 shrink-0 inline-block"
                          variants={projectCardArrow}
                        >
                          →
                        </motion.span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {proj.tools.map((t) => (
                      <motion.span
                        key={t}
                        className="rounded-md bg-ice px-2.5 py-1 text-xs font-medium text-[hsl(var(--foreground))]"
                        whileHover={{ scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 450, damping: 28 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <ProjectLinks project={proj} />
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
