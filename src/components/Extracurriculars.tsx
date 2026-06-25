import { extracurriculars } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function Extracurriculars() {
  return (
    <section className="section-block scroll-mt-[var(--nav-height)]">
      <SectionHeading title="Campus Involvement" />

      <table className="w-full border-collapse border-2 border-[hsl(var(--border))] text-sm">
        <tbody>
          {extracurriculars.map((name, i) => (
            <tr
              key={name}
              className={
                i < extracurriculars.length - 1
                  ? "border-b border-[hsl(var(--border))]"
                  : ""
              }
            >
              <td className="px-3 py-2">{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
