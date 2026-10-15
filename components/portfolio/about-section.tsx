import { profile, stats } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading index="01" title="About me" />

        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-24">
          <Reveal>
            <div className="relative aspect-square w-full max-w-[320px] rounded-2xl border border-foreground/10 bg-card overflow-hidden">
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-8xl font-display text-glow">{profile.initials}</span>
                </div>
              )}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-glow/20 pointer-events-none" />
            </div>
          </Reveal>

          <div>
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-xl lg:text-2xl leading-relaxed text-foreground/80 mb-6">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-4xl lg:text-6xl font-display">{stat.value}</span>
                    <span className="mt-2 block text-sm font-mono text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
