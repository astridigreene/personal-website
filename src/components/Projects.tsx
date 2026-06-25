import { projectsByDateDesc } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

type Project = (typeof projectsByDateDesc)[number];

function ProjectLinks({ project }: { project: Project }) {
  const hasGithub = project.githubUrl && project.githubUrl.length > 0;
  const hasLive = project.liveUrl && project.liveUrl.length > 0;
  if (!hasGithub && !hasLive) return null;
  return (
    <p className="mt-3 text-sm">
      {hasGithub && (
        <>
          <a href={project.githubUrl!} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </>
      )}
      {hasGithub && hasLive && <span className="text-[hsl(var(--muted))]"> | </span>}
      {hasLive && (
        <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer">
          live
        </a>
      )}
    </p>
  );
}

export function Projects() {
  const featured = projectsByDateDesc.find((p) => p.featured);
  const others = projectsByDateDesc.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-block scroll-mt-[var(--nav-height)]">
      <SectionHeading title="Projects" subtitle="selected technical work" />

      {featured && (
        <article className="panel mb-4 border-[hsl(var(--accent))]">
          <p className="meta mb-1">
            <strong className="text-[hsl(var(--foreground))]">[featured]</strong>{" "}
            {featured.date}
          </p>
          <h3 className="font-bold text-lg mb-2">{featured.title}</h3>
          <p className="text-[hsl(var(--muted))] mb-3">{featured.description}</p>
          <ul className="list-dash text-sm space-y-1 mb-3">
            {featured.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          <p>
            {featured.tools.map((t, i) => (
              <span key={t}>
                {i > 0 && " "}
                <span className="tag">{t}</span>
              </span>
            ))}
          </p>
          <ProjectLinks project={featured} />
        </article>
      )}

      <div className="grid-bordered grid sm:grid-cols-2 gap-0">
        {others.map((proj) => (
          <article key={proj.id}>
            <p className="meta mb-1">{proj.date}</p>
            <h3 className="font-bold mb-2">{proj.title}</h3>
            <p className="text-sm text-[hsl(var(--muted))] mb-2">{proj.description}</p>
            <ul className="list-dash text-sm space-y-1 mb-2">
              {proj.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <p className="mb-0">
              {proj.tools.map((t, i) => (
                <span key={t}>
                  {i > 0 && " "}
                  <span className="tag">{t}</span>
                </span>
              ))}
            </p>
            <ProjectLinks project={proj} />
          </article>
        ))}
      </div>
    </section>
  );
}
