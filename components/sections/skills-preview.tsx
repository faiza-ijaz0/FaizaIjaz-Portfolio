import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillsGrid } from "@/components/sections/skills-grid";

export function SkillsPreview() {
  const preview = skillGroups.slice(0, 4);

  return (
    <section className="border-t border-border bg-background-elevated/30 py-28 sm:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Engineering Skill Set"
            title="Breadth across the entire stack."
            description="Organized the way I think about a system — not a wall of logos, a capability map."
          />
          <Link
            href="/skills"
            className="group hidden shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent sm:inline-flex"
          >
            Full skill system
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14">
          <SkillsGrid groups={preview} />
        </div>

        <Link
          href="/skills"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent sm:hidden"
        >
          Full skill system
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Container>
    </section>
  );
}
