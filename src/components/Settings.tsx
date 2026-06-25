"use client";

import { useTheme } from "./ThemeProvider";

const options = [
  { value: "light" as const, label: "light" },
  { value: "dark" as const, label: "dark" },
];

export function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <section
      id="settings"
      className="section-block scroll-mt-[var(--nav-height)] border-b-0"
    >
      <h2 className="font-bold text-sm uppercase tracking-wide border-b-2 border-[hsl(var(--accent))] inline-block pb-0.5 mb-4">
        Settings
      </h2>

      <fieldset className="panel-inset">
        <legend className="meta font-bold px-1">appearance</legend>
        <p className="text-sm text-[hsl(var(--muted))] mb-3">
          pick light or dark mode
        </p>
        <div className="inline-flex border-2 border-[hsl(var(--border))]">
          {options.map(({ value, label }) => {
            const selected = theme === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setTheme(value)}
                className={`px-4 py-1.5 text-sm border-r border-[hsl(var(--border))] last:border-r-0 ${
                  selected
                    ? "bg-[hsl(var(--accent))] text-white font-bold"
                    : "bg-[hsl(var(--surface))] hover:bg-[hsl(var(--ice))]"
                }`}
              >
                [ {label} ]
              </button>
            );
          })}
        </div>
      </fieldset>
    </section>
  );
}
