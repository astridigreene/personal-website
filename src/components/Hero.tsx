import { ScrollLink } from "@/components/ScrollLink";
import { SudokuGame } from "@/components/SudokuGame";
import { site } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="home" className="section-block scroll-mt-0">
      <div className="flex flex-col md:flex-row md:gap-10 md:items-start">
        {/* left: intro */}
        <div className="flex-1 min-w-0">
          {/* headshot + name row */}
          <div className="flex items-center gap-4 mb-4">
            {site.headshot && (
              <div className="shrink-0" style={{ border: "2px solid hsl(var(--border-light))", padding: "3px", background: "hsl(var(--surface))" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.headshot}
                  alt={site.name}
                  style={{ width: "96px", height: "96px", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
              </div>
            )}
            <div>
              <p className="meta mb-0.5">computer science @ university of michigan</p>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {site.name}
              </h1>
            </div>
          </div>

          <p className="mb-5" style={{ color: "hsl(var(--muted))", maxWidth: "38rem" }}>
            {site.tagline}
          </p>

          <div className="flex gap-2 flex-wrap mb-6">
            <ScrollLink sectionId="projects" className="btn btn-primary">
              [ projects ]
            </ScrollLink>
            <ScrollLink sectionId="contact" className="btn">
              [ contact ]
            </ScrollLink>
            <ScrollLink sectionId="about" className="btn">
              [ about ]
            </ScrollLink>
          </div>

          {/* quick stats */}
          <div
            className="grid grid-cols-3 text-center"
            style={{
              border: "2px solid hsl(var(--border))",
              maxWidth: "340px",
            }}
          >
            {[
              { n: "3.7", label: "gpa" },
              { n: "5+", label: "projects" },
              { n: "4", label: "roles" },
            ].map(({ n, label }) => (
              <div
                key={label}
                style={{
                  borderRight: "1px solid hsl(var(--border))",
                  padding: "0.5rem 0.75rem",
                }}
              >
                <div
                  className="font-bold"
                  style={{ fontSize: "1.1rem", color: "hsl(var(--accent))" }}
                >
                  {n}
                </div>
                <div className="meta">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right: playable sudoku */}
        <div className="mt-8 md:mt-0 shrink-0">
          <p className="meta mb-2" style={{ color: "hsl(var(--accent))" }}>
            // playable sudoku — try it
          </p>
          <SudokuGame />
        </div>
      </div>
    </section>
  );
}
