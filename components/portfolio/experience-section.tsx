import { experience, skills } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading index="03" title="Skills & experience" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Skills */}
          <div className="space-y-10">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 75}>
                <h3 className="font-mono text-sm text-muted-foreground mb-4">{group.group}</h3>
                <ul className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-foreground/10 bg-card px-4 py-2 text-base transition-colors hover:border-glow/40 hover:text-glow"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          {/* Timeline */}
          <ol className="relative border-l border-foreground/10">
            {experience.map((item, i) => (
              <li key={`${item.title}-${item.org}`} className="relative pl-8 pb-12 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-glow shadow-[0_0_12px_var(--glow)]" />
                <Reveal delay={i * 100}>
                  <span className="font-mono text-sm text-glow">{item.period}</span>
                  <h3 className="mt-2 text-2xl lg:text-3xl font-display">{item.title}</h3>
                  <p className="mt-1 text-foreground/70">{item.org}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
