"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contact, contactCta } from "@/lib/site-data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

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
    <section id="contact" className="scroll-mt-24 section-alt py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] tracking-tight">
            Contact
          </h2>
          <p className="mt-3 text-[hsl(var(--muted))] text-lg max-w-2xl">
            {contactCta}
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
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
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[hsl(var(--foreground))] font-medium hover:text-accent transition-colors"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 md:p-8 shadow-soft"
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
        </div>
      </div>
    </section>
  );
}
