"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Grainient from "@/components/reactbits/Grainient/Grainient";
import BlurText from "@/components/reactbits/BlurText/BlurText";
import { profile } from "@/lib/portfolio-data";

// null until the client has read the media query, so animations never mount and then unmount.
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background: static on reduced motion */}
      <div className="absolute inset-0 -z-0 opacity-70 pointer-events-none">
        {reduced === false && (
          <Grainient
            color1="#2a2f45"
            color2="#5b3a8c"
            color3="#0a0a0c"
            timeSpeed={0.2}
            warpStrength={1.2}
            grainAmount={0.08}
            contrast={1.4}
            zoom={0.9}
          />
        )}
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 py-32">
        <p className="inline-flex items-center gap-3 font-mono text-sm text-[#a8a59e] mb-8">
          {profile.available && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
          {profile.role} · {profile.location}
        </p>

        <h1 className="sr-only">{profile.name}</h1>
        <div
          aria-hidden="true"
          className="font-display text-[clamp(3.5rem,13vw,11rem)] leading-[0.9] tracking-tight text-[#f2efe9] mb-12"
        >
          {reduced !== false ? (
            <span className={reduced === null ? "invisible" : undefined}>
              <span className="block">{first}</span>
              {rest.length > 0 && <span className="block text-[#a8a59e]">{rest.join(" ")}</span>}
            </span>
          ) : (
            <>
              <BlurText text={first} animateBy="letters" delay={60} className="block" />
              {rest.length > 0 && (
                <BlurText text={rest.join(" ")} animateBy="letters" delay={60} className="block text-[#a8a59e]" />
              )}
            </>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-end">
          <p className="text-xl lg:text-2xl text-[#a8a59e] leading-relaxed max-w-xl">
            {profile.tagline} {profile.intro}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#work"
              className="group inline-flex items-center bg-[#f2efe9] hover:bg-white text-[#0a0a0c] px-8 h-14 text-base rounded-full transition-colors"
            >
              View my work
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center h-14 px-8 text-base rounded-full border border-white/20 text-[#f2efe9] hover:bg-white/5 transition-colors"
            >
              Download résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
