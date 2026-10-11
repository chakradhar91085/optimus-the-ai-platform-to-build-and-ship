"use client";

import { ArrowUpRight } from "lucide-react";
import SpotlightCard from "@/components/reactbits/SpotlightCard/SpotlightCard";
import { projects } from "@/lib/portfolio-data";

export function Work() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => {
        const link = p.href ?? p.repo;
        return (
          <a
            key={p.title}
            href={link}
            target={link?.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="block group"
          >
            <SpotlightCard
              theme="dark"
              spotlightColor="rgba(160, 150, 255, 0.35)"
              className="h-full !p-8 !rounded-2xl"
            >
              <div className="flex items-center justify-between font-mono text-xs text-[#8a8780] mb-10">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f2efe9] flex items-start gap-3 mb-4">
                {p.title}
                <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-[#a8a59e] leading-relaxed mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 text-[#c9c6bf]">
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </a>
        );
      })}
    </div>
  );
}
