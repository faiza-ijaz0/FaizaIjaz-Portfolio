import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experienceTimeline } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/sections/timeline";

export function JourneyPreview() {
  const preview = experienceTimeline.slice(0, 3);

  return (
    <section className="border-t border-border py-28 sm:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Journey"
            title="Four years of deliberate growth."
            description="From frontend-focused features to full ownership of production systems."
          />
          <Link
            href="/about"
            className="group hidden shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent sm:inline-flex"
          >
            Full journey
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14">
          <Timeline entries={preview} />
        </div>

        <Link
          href="/about"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent sm:hidden"
        >
          Full journey
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Container>
    </section>
  );
}
