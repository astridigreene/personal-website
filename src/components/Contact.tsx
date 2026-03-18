"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact, contactCta } from "@/lib/site-data";
import { inViewOnce, sectionHeaderVariants, sectionSublineVariants, tapScale } from "@/lib/motion-variants";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const links = [
    { label: "Email", href: `mailto:${contact.email}`, value: contact.email },
    { label: "LinkedIn", href: contact.linkedin, value: "linkedin.com/in/astridgreene" },
    { label: "GitHub", href: contact.github, value: "github.com/astridigreene" },
  ];

  return (
    <section id="contact" className="scroll-mt-24 section-alt py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-14">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight"
          >
            Contact
          </motion.h2>
          <motion.p
            variants={sectionSublineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl"
          >
            {contactCta}
          </motion.p>
        </header>

        <motion.div
          className="grid md:grid-cols-2 gap-10 md:gap-12"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -28, y: 12 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
            whileHover={{ boxShadow: "0 24px 56px -18px hsl(var(--foreground) / 0.08)", y: -2 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted))] mb-5">
              Get in touch
            </h3>
            <ul className="space-y-4">
              {links.map(({ label, href, value }) => (
                <li key={label}>
                  <span className="block text-xs font-medium text-[hsl(var(--muted))] mb-1">
                    {label}
                  </span>
                  <motion.a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block text-[hsl(var(--foreground))] font-medium hover:text-accent transition-colors"
                    whileHover={{ x: 3, y: -1 }}
                    whileTap={tapScale}
                    transition={{ type: "spring", stiffness: 400, damping: 26 }}
                  >
                    {value}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 28, y: 12 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
            whileHover={{ boxShadow: "0 24px 56px -18px hsl(var(--foreground) / 0.08)", y: -2 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted))] mb-5">
              Send a message
            </h3>
            {submitted ? (
              <p className="text-[hsl(var(--foreground))]">
                Thanks for your message. Connect this form to an API or service to send emails.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted))] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted))] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted))] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                    placeholder="Your message"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
