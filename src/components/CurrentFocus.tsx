import { Section } from "./Section";
import { currentFocus } from "@/lib/site-data";

export function CurrentFocus() {
  return (
    <Section
      id="focus"
      title="Current focus"
      subtitle="What I'm working on right now."
    >
      <ul className="flex flex-wrap gap-3">
        {currentFocus.map((item, i) => (
          <li
            key={i}
            className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-5 py-3 text-sm text-[hsl(var(--foreground))] shadow-soft dark:shadow-soft-dark"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
