import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { AnimatedSphere } from "@/components/landing/animated-sphere";
import { profile, skills, projects, experience } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-10">
      <span className="w-8 h-px bg-foreground/30" />
      {index} / {children}
    </span>
  );
}

export default function PortfolioPage() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      {/* Navigation */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <nav className="mx-auto max-w-[1200px] bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl">
          <div className="flex items-center justify-between h-14 px-6">
            <a href="#" className="font-display text-xl tracking-tight">
              {profile.name}
            </a>
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="text-xs sm:text-sm bg-foreground text-background rounded-full px-4 h-8 inline-flex items-center hover:bg-foreground/90 transition-colors"
            >
              Say hello
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[750px] lg:h-[750px] opacity-30 pointer-events-none">
          <AnimatedSphere />
        </div>
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 py-32">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            {profile.available && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
            {profile.role} · {profile.location}
          </span>
          <h1 className="text-[clamp(3.5rem,13vw,11rem)] font-display leading-[0.9] tracking-tight mb-12">
            <span className="block">{first}</span>
            {rest.length > 0 && <span className="block text-muted-foreground">{rest.join(" ")}</span>}
          </h1>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-end">
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              {profile.tagline} {profile.intro}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#work"
                className="group inline-flex items-center bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full transition-colors"
              >
                View my work
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center h-14 px-8 text-base rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors"
              >
                Download résumé
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About + skills */}
      <section id="about" className="relative border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <SectionLabel index="01">About</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-6">
              {profile.about.map((p) => (
                <p key={p} className="text-2xl lg:text-3xl font-display leading-snug">
                  {p}
                </p>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 self-start">
              {skills.map((s) => (
                <div key={s.group} className="bg-background p-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                    {s.group}
                  </h3>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="relative border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <SectionLabel index="02">Selected work</SectionLabel>
          <div className="border-t border-foreground/10">
            {projects.map((p, i) => {
              const link = p.href ?? p.repo;
              return (
                <a
                  key={p.title}
                  href={link}
                  target={link?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group grid grid-cols-12 gap-4 lg:gap-8 py-10 border-b border-foreground/10 hover:bg-foreground/[0.02] transition-colors"
                >
                  <span className="col-span-2 lg:col-span-1 font-mono text-sm text-muted-foreground pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 lg:col-span-5">
                    <h3 className="text-4xl lg:text-5xl font-display tracking-tight flex items-start gap-3">
                      {p.title}
                      <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                  </div>
                  <div className="col-span-12 lg:col-span-6 col-start-3 lg:col-start-auto">
                    <p className="text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-3 py-1 rounded-full border border-foreground/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <SectionLabel index="03">Experience</SectionLabel>
          <ol className="space-y-12">
            {experience.map((e) => (
              <li key={`${e.title}-${e.period}`} className="grid lg:grid-cols-12 gap-2 lg:gap-8">
                <span className="lg:col-span-3 font-mono text-sm text-muted-foreground pt-1">{e.period}</span>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl lg:text-3xl font-display">
                    {e.title} <span className="text-muted-foreground">— {e.org}</span>
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-2xl">{e.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.95] tracking-tight mb-12">
            Let&apos;s build
            <br />
            something together.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 text-lg sm:text-2xl border-b border-foreground/30 hover:border-foreground pb-1 transition-colors break-all"
          >
            <Mail className="w-5 h-5 shrink-0" />
            {profile.email}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row gap-4 justify-between text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <div className="flex gap-6">
            {profile.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
              >
                {s.name}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
