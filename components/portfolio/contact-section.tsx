import { ArrowUpRight, Mail } from "lucide-react";
import { contact, profile } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-40 border-t border-foreground/10 overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[500px] rounded-full bg-glow/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-glow">
            04
            <span className="w-8 h-px bg-glow/40" />
          </span>
          <h2 className="mt-4 text-[clamp(3rem,9vw,8rem)] font-display leading-[0.95] tracking-tight">
            Let&apos;s build
            <br />
            something together.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <a
            href={`mailto:${contact.email}`}
            className="group mt-12 inline-flex items-center gap-4 text-2xl lg:text-4xl font-display border-b border-foreground/20 pb-2 hover:text-glow hover:border-glow transition-colors"
          >
            <Mail className="w-6 h-6 lg:w-8 lg:h-8" />
            {contact.email}
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={250}>
          <ul className="mt-16 flex flex-wrap gap-4">
            {contact.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm hover:border-glow/50 hover:text-glow transition-colors"
                >
                  {social.name}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <footer className="mt-24 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between gap-4 text-sm font-mono text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" className="hover:text-foreground transition-colors">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
