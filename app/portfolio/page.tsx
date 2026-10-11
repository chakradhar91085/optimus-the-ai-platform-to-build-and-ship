import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { Hero } from "@/components/portfolio/hero";
import { Work } from "@/components/portfolio/work";
import { profile, skills, experience } from "@/lib/portfolio-data";

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
    <span className="inline-flex items-center gap-3 text-sm font-mono text-[#8a8780] mb-10">
      <span className="w-8 h-px bg-white/25" />
      {index} / {children}
    </span>
  );
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0a0c] text-[#f2efe9] font-sans antialiased">
      {/* Navigation */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <nav className="mx-auto max-w-[1200px] bg-[#0a0a0c]/70 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between h-14 px-6">
            <a href="#" className="font-display text-xl tracking-tight">
              {profile.name}
            </a>
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#c9c6bf] hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="text-xs sm:text-sm bg-[#f2efe9] text-[#0a0a0c] rounded-full px-4 h-8 inline-flex items-center hover:bg-white transition-colors"
            >
              Say hello
            </a>
          </div>
        </nav>
      </header>

      <Hero />

      {/* About + skills */}
      <section id="about" className="relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <SectionLabel index="01">About</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-6">
              {profile.about.map((p) => (
                <p key={p} className="text-2xl lg:text-3xl font-display leading-snug text-[#f2efe9]">
                  {p}
                </p>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden self-start">
              {skills.map((s) => (
                <div key={s.group} className="bg-[#0a0a0c] p-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[#8a8780] mb-4">{s.group}</h3>
                  <ul className="space-y-2 text-[#c9c6bf]">
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
      <section id="work" className="relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <SectionLabel index="02">Selected work</SectionLabel>
          <Work />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <SectionLabel index="03">Experience</SectionLabel>
          <ol className="space-y-12">
            {experience.map((e) => (
              <li key={`${e.title}-${e.period}`} className="grid lg:grid-cols-12 gap-2 lg:gap-8">
                <span className="lg:col-span-3 font-mono text-sm text-[#8a8780] pt-1">{e.period}</span>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl lg:text-3xl font-display">
                    {e.title} <span className="text-[#8a8780]">— {e.org}</span>
                  </h3>
                  <p className="text-[#a8a59e] mt-2 max-w-2xl">{e.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.95] tracking-tight mb-12">
            Let&apos;s build
            <br />
            something together.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 text-lg sm:text-2xl border-b border-white/30 hover:border-white pb-1 transition-colors break-all"
          >
            <Mail className="w-5 h-5 shrink-0" />
            {profile.email}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row gap-4 justify-between text-sm text-[#8a8780]">
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
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
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
