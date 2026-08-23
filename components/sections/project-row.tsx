import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ui/project-visual";
import { Reveal } from "@/components/ui/reveal";
import { getProjectInitials } from "@/lib/project-initials";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <Link
        href={`/projects/${project.slug}`}
        className="group grid grid-cols-1 items-center gap-8 border-t border-border py-10 transition-colors duration-300 first:border-t-0 sm:py-12 lg:grid-cols-12 lg:gap-10"
      >
        <span className="font-mono text-xs text-foreground-subtle lg:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="order-2 lg:order-1 lg:col-span-6">
          <h3 className="font-display text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
            {project.tagline}
          </p>
          {project.technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-subtle">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="order-1 lg:order-2 lg:col-span-3">
          <ProjectVisual slug={project.slug} initials={getProjectInitials(project.title)} className="aspect-[4/3] w-full rounded-2xl" />
        </div>

        <div className="order-3 flex items-center justify-between lg:col-span-2 lg:flex-col lg:items-end lg:justify-center lg:gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground-subtle">
            {project.category}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
