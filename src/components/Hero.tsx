import { ScrollLink } from "@/components/ScrollLink";
import { site } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="home" className="section-block scroll-mt-0">
      <table className="w-full border-collapse" role="presentation">
        <tbody>
          <tr>
            <td className="align-top pr-4 pb-4 md:pb-0 w-full md:w-auto">
              <p className="meta mb-2">
                Computer Science / University of Michigan
              </p>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">
                {site.name}
              </h1>
              <p className="text-[hsl(var(--muted))] max-w-lg mb-5">
                {site.tagline}
              </p>
              <p>
                <ScrollLink sectionId="projects" className="btn btn-primary mr-2">
                  [ projects ]
                </ScrollLink>
                <ScrollLink sectionId="contact" className="btn">
                  [ contact ]
                </ScrollLink>
              </p>
            </td>
            <td className="align-top hidden md:table-cell">
              <div className="panel p-1 w-36 h-36">
                {site.headshot ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={site.headshot}
                    alt={site.name}
                    className="w-full h-full object-cover border border-[hsl(var(--border))]"
                  />
                ) : (
                  <span className="flex items-center justify-center w-full h-full text-3xl font-bold">
                    AG
                  </span>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="md:hidden mt-4 panel p-1 w-28 h-28">
        {site.headshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={site.headshot}
            alt={site.name}
            className="w-full h-full object-cover border border-[hsl(var(--border))]"
          />
        ) : null}
      </div>
    </section>
  );
}
