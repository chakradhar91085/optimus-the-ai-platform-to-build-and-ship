import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading index="02" title="Selected work" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 100}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <article className="group relative h-full rounded-2xl border border-foreground/10 bg-card p-8 lg:p-10 hover-lift overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-glow/0 blur-3xl transition-colors duration-700 group-hover:bg-glow/15 pointer-events-none" />

                <div className="relative flex items-start justify-between gap-6">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                    {project.featured && <span className="ml-3 text-glow">Featured</span>}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code`}
                        className="p-2 rounded-full border border-foreground/10 text-muted-foreground hover:text-glow hover:border-glow/40 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live site`}
                        className="p-2 rounded-full border border-foreground/10 text-muted-foreground hover:text-glow hover:border-glow/40 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className={`relative mt-10 font-display tracking-tight ${project.featured ? "text-4xl lg:text-6xl" : "text-3xl lg:text-4xl"}`}>
                  {project.title}
                </h3>
                <p className="relative mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <ul className="relative mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-xs font-mono text-foreground/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
