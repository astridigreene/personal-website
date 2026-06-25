import { experiences } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-block section-block-alt scroll-mt-[var(--nav-height)]"
    >
      <SectionHeading title="Experience" subtitle="roles and impact" />

      <div className="panel-stack">
        {experiences.map((exp) => (
          <article key={exp.id} className="panel">
            <table className="w-full border-collapse text-sm mb-3" role="presentation">
              <tbody>
                <tr>
                  <td className="align-top pr-4">
                    <h3 className="font-bold">{exp.role}</h3>
                    <p className="text-[hsl(var(--link))]">{exp.company}</p>
                  </td>
                  <td className="align-top text-right meta whitespace-nowrap">
                    {exp.period}
                    {exp.location && (
                      <>
                        <br />
                        {exp.location}
                      </>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-dash text-sm space-y-1">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
