"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fade = (delay: string) =>
    `transition-all duration-1000 ${delay} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Glow orb */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[640px] h-[640px] lg:w-[900px] lg:h-[900px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-glow/20 blur-[120px] animate-pulse [animation-duration:6s]" />
        <div className="absolute inset-[30%] rounded-full bg-glow/30 blur-[80px]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className={`mb-8 flex flex-wrap items-center gap-4 ${fade("")}`}>
          {profile.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-glow/30 bg-glow/10 px-3 py-1 text-xs font-mono text-glow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-glow opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
              </span>
              Available for work
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            {profile.location}
          </span>
        </div>

        <h1 className={`text-[clamp(3rem,11vw,9rem)] font-display leading-[0.9] tracking-tight ${fade("delay-100")}`}>
          <span className="block text-muted-foreground text-[0.45em] leading-tight mb-2">Hi, I&apos;m</span>
          <span className="block">{profile.name}</span>
        </h1>

        <p className={`mt-6 font-mono text-lg lg:text-xl text-glow ${fade("delay-200")}`}>
          &gt; {profile.role}
          <span className="inline-block w-2.5 h-5 ml-1 align-middle bg-glow animate-pulse" />
        </p>

        <div className={`mt-12 grid lg:grid-cols-2 gap-10 lg:gap-24 items-end ${fade("delay-300")}`}>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
            {profile.tagline} {profile.intro}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
            >
              <a href="#projects">
                View my work
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            {profile.resumeUrl ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-foreground/20 bg-transparent hover:bg-foreground/5"
              >
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Résumé
                </a>
              </Button>
            ) : (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-foreground/20 bg-transparent hover:bg-foreground/5"
              >
                <a href="#contact">Get in touch</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
