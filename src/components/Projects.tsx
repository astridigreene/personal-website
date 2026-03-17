"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/site-data";

type Project = (typeof projects)[number];

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
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <GitHubIcon className="w-4 h-4" />
          GitHub
        </motion.a>
      )}
      {hasLive && (
        <motion.a
          href={project.liveUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
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
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.05 });

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 44 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl">
            Selected technical work.
          </p>
        </motion.header>

        <div className="space-y-10">
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 48, filter: "blur(6px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <motion.div
                className="rounded-2xl border-2 border-accent/30 bg-[hsl(var(--surface-elevated))] p-6 md:p-8 shadow-soft"
                whileHover={{
                  y: -6,
                  borderColor: "hsl(var(--accent) / 0.5)",
                  boxShadow: "0 28px 56px -16px hsl(var(--accent) / 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Featured
                  </span>
                  <span className="text-sm text-[hsl(var(--muted))]">{featured.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[hsl(var(--foreground))]">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[hsl(var(--muted))] text-lg">{featured.description}</p>
                <ul className="mt-5 space-y-2">
                  {featured.highlights.map((h, i) => (
                    <li key={i} className="text-[hsl(var(--foreground))] flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-accent/15 text-accent px-3 py-1.5 text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ProjectLinks project={featured} />
              </motion.div>
            </motion.article>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((proj, index) => (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <motion.div
                  className="h-full rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 shadow-soft"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 24px 48px -12px rgba(0,0,0,0.18)",
                    borderColor: "hsl(var(--accent) / 0.35)",
                    scale: 1.01,
                  }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                >
                  <span className="text-sm text-[hsl(var(--muted))]">{proj.date}</span>
                  <h3 className="mt-2 text-xl font-semibold text-[hsl(var(--foreground))]">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-sm text-[hsl(var(--muted))] leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-[hsl(var(--foreground))]">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {proj.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-ice px-2.5 py-1 text-xs font-medium text-[hsl(var(--foreground))]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ProjectLinks project={proj} />
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
