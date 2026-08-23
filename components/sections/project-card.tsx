import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ui/project-visual";
import { Reveal } from "@/components/ui/reveal";
import { getProjectInitials } from "@/lib/project-initials";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.08} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] focus-visible:-translate-y-1 focus-visible:border-accent/40"
      >
        <ProjectVisual
          slug={project.slug}
          initials={getProjectInitials(project.title)}
          className="aspect-[16/10] w-full shrink-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="flex flex-1 flex-col p-8 sm:p-9">
          <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground-muted sm:text-[15px]">
            {project.tagline}
          </p>
          <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-[13px] font-medium text-foreground-muted transition-colors duration-300 group-hover:text-accent">
            View Project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
