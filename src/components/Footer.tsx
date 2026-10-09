"use client";

import { useEffect } from "react";
import { ScrollLink } from "@/components/ScrollLink";
import { contact, site } from "@/lib/site-data";
import { stripHashFromUrl } from "@/lib/scroll-to-section";

export function Footer() {
  const year = new Date().getFullYear();

  useEffect(() => {
    stripHashFromUrl();
  }, []);

  return (
    <footer className="section-block border-t-2 border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] py-4">
      <hr className="hr-thick" />
      <p className="text-center meta mb-3">
        (c) {year} {site.name} — built by hand, probably
      </p>
      <p className="text-center text-sm">
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <span className="text-[hsl(var(--muted))]"> | </span>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <span className="text-[hsl(var(--muted))]"> | </span>
        <a href={`mailto:${contact.email}`}>email</a>
      </p>
      <p className="text-center meta mt-3 text-xs">
        last updated: {year}
      </p>
    </footer>
  );
}
