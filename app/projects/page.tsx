import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ProjectsList } from "@/components/sections/projects-list";

export const metadata: Metadata = {
  title: "Projects",
  description: `A selection of platforms and products built by ${siteConfig.name} — SaaS platforms, full-stack web applications, and live client websites, engineered end to end.`,
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pb-24 pt-[calc(76px+5rem)] sm:pb-32 sm:pt-[calc(76px+7rem)]">
        <Container>
          <ProjectsList />
        </Container>
      </section>
    </>
  );
}
