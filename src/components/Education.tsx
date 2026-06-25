import { education } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-block scroll-mt-[var(--nav-height)]">
      <SectionHeading title="Education" subtitle={education.school} />

      <div className="panel">
        <p className="font-bold">{education.degree}</p>
        <p className="meta mt-1">
          {education.location} · expected graduation: {education.expectedGraduation}
        </p>
        <p className="meta mt-1">
          gpa: {education.gpa} · {education.honors}
        </p>
        <hr className="hr-thick" />
        <p className="font-bold text-sm mb-2">relevant coursework</p>
        <p>
          {education.coursework.map((c, i) => (
            <span key={c}>
              {i > 0 && <span className="text-[hsl(var(--muted))]"> · </span>}
              <span className="tag">{c}</span>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
