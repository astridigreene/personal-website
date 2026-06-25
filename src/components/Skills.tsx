import { skills } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

const categories = [
  { title: "Languages", items: skills.languages },
  { title: "Developer Tools", items: skills.tools },
  { title: "Interests", items: skills.interests },
] as const;

export function Skills() {
  return (
    <section id="skills" className="section-block section-block-alt scroll-mt-[var(--nav-height)]">
      <SectionHeading title="Skills" subtitle="languages, tools, and focus areas" />

      <div className="grid-bordered grid md:grid-cols-3 gap-0">
        {categories.map((cat) => (
          <div key={cat.title}>
            <p className="panel-header">{cat.title}</p>
            <div className="p-2">
              {cat.items.map((item, i) => (
                <span key={item}>
                  {i > 0 && <br />}
                  <span className="tag">{item}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
