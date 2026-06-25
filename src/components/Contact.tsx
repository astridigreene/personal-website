import { contact, contactCta } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

const channels = [
  { label: "GitHub", href: contact.github, external: true },
  { label: "LinkedIn", href: contact.linkedin, external: true },
  { label: "Email", href: `mailto:${contact.email}`, external: false },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-block section-block-alt scroll-mt-[var(--nav-height)]">
      <SectionHeading title="Contact" subtitle={contactCta} />

      <table className="w-full border-collapse border-2 border-[hsl(var(--border))] text-sm">
        <tbody>
          {channels.map(({ label, href, external }, i) => (
            <tr
              key={label}
              className={i < channels.length - 1 ? "border-b border-[hsl(var(--border))]" : ""}
            >
              <th className="border-r border-[hsl(var(--border))] px-3 py-2 text-left font-bold meta w-28 bg-[hsl(var(--surface-elevated))]">
                {label}
              </th>
              <td className="px-3 py-2">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {href.replace(/^mailto:/, "")}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
