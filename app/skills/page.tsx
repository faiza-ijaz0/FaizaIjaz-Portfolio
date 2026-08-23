import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Skills",
  description: `The engineering skill set of ${siteConfig.name} — software architecture, frontend and backend engineering, databases, AI integration, and delivery.`,
};

export default function SkillsPage() {
  return (
    <>
      <section className="pb-24 pt-[calc(76px+5rem)] sm:pb-32 sm:pt-[calc(76px+7rem)]">
        <Container>
          <SkillsGrid />

          <div className="mt-20 flex flex-col items-start gap-6 border-t border-border pt-14 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                Want to see this applied?
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
                The projects section shows how these capabilities come together in production systems.
              </p>
            </div>
            <Button href="/projects" size="lg">
              View Projects
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
