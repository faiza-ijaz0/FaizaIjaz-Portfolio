import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { ProjectsList } from "@/components/sections/projects-list";

export const metadata: Metadata = {
  title: "Projects",
  description: `A selection of platforms, tools, and products built by ${siteConfig.name} — SaaS platforms, booking systems, and full-stack web applications.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Projects"
        title="A record of what's been built."
        description="SaaS platforms, booking systems, and full-stack applications — each one built from data model to deployed interface."
      />
      <section className="pb-28 pt-20 sm:pb-36">
        <Container>
          <ProjectsList />
        </Container>
      </section>
    </>
  );
}
