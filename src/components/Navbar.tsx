"use client";

import { useEffect, useState } from "react";
import { ScrollLink } from "@/components/ScrollLink";
import { site } from "@/lib/site-data";
import { stripHashFromUrl } from "@/lib/scroll-to-section";

const navLinks = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "involvement", label: "involvement" },
  { id: "contact", label: "contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    stripHashFromUrl();
    const onHashChange = () => stripHashFromUrl();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const headerLine = 60;
    const onScroll = () => {
      const ids = ["home", ...navLinks.map((l) => l.id)];
      let current = ids[0] ?? "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= headerLine) {
          current = id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[hsl(var(--border))] bg-[hsl(215_48%_84%)] dark:bg-[hsl(var(--surface-elevated))]">
      <nav className="flex items-center justify-between px-4 py-2">
        <ScrollLink toTop className="nav-plain font-bold text-sm">
          {site.name.toLowerCase()}.com
        </ScrollLink>

        <div className="hidden md:flex items-center text-sm meta">
          {navLinks.map(({ id, label }, i) => {
            const isActive = activeId === id;
            return (
              <span key={id} className="flex items-center">
                {i > 0 && (
                  <span className="mx-1.5 text-[hsl(var(--border))]">|</span>
                )}
                <ScrollLink
                  sectionId={id}
                  className={`nav-plain ${isActive ? "font-bold underline" : ""}`}
                >
                  {label}
                </ScrollLink>
              </span>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden btn text-xs py-1 px-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "[ x ]" : "[ menu ]"}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t-2 border-[hsl(var(--border))] px-4 py-2 bg-[hsl(var(--surface))]">
          {navLinks.map(({ id, label }) => (
            <div key={id} className="py-1">
              <ScrollLink
                sectionId={id}
                onNavigate={() => setMobileOpen(false)}
                className="nav-plain text-sm"
              >
                &gt; {label}
              </ScrollLink>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
