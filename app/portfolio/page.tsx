import type { Metadata } from "next";
import { profile } from "@/lib/portfolio-data";
import { PortfolioNav } from "@/components/portfolio/portfolio-nav";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { AboutSection } from "@/components/portfolio/about-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ContactSection } from "@/components/portfolio/contact-section";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

export default function PortfolioPage() {
  return (
    <div className="dark bg-background text-foreground">
      <main className="relative min-h-screen overflow-x-hidden noise-overlay">
        <PortfolioNav />
        <PortfolioHero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
