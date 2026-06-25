import { about, education, currentFocus } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

const stats = [
  { label: "school", value: education.school },
  { label: "gpa", value: education.gpa },
  { label: "honors", value: education.honors },
] as const;

export function About() {
  return (
    <section id="about" className="section-block scroll-mt-[var(--nav-height)]">
      <SectionHeading title="About" subtitle="background and focus" />

      <div className="panel-inset mb-4">
        <p>{about.bio}</p>
      </div>

      <table className="w-full border-collapse border-2 border-[hsl(var(--border))] text-sm mb-4">
        <tbody>
          <tr className="border-b-2 border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))]">
            {stats.map((s) => (
              <th
                key={s.label}
                className="border-r border-[hsl(var(--border))] px-3 py-1.5 text-left font-bold meta"
              >
                {s.label}
              </th>
            ))}
          </tr>
          <tr>
            {stats.map((s) => (
              <td
                key={s.label}
                className="border-r border-[hsl(var(--border))] px-3 py-2 last:border-r-0"
              >
                {s.value}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <p className="meta mb-2">currently focused on:</p>
      <p>
        {currentFocus.map((item, i) => (
          <span key={item}>
            {i > 0 && <span className="text-[hsl(var(--muted))]"> · </span>}
            <span className="tag">{item}</span>
          </span>
        ))}
      </p>
    </section>
  );
}
