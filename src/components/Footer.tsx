"use client";

import { motion } from "framer-motion";
import { contact, site } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))]"
    >
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[hsl(var(--muted))]">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[hsl(var(--muted))] hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[hsl(var(--muted))] hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm font-medium text-[hsl(var(--muted))] hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
