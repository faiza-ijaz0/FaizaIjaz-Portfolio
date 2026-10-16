import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { ProjectMedia } from "@/components/ui/project-media";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-background-elevated/60 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] has-[:focus-visible]:-translate-y-1 has-[:focus-visible]:border-accent/40 sm:p-7">
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.title} project details`}
          className="absolute inset-0 z-[1] rounded-2xl focus-visible:outline-offset-[-3px]"
        />

        <span
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[5.5rem] font-medium leading-none text-foreground opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.06]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <ProjectMedia
          project={project}
          sizes="(min-width: 1280px) 410px, (min-width: 640px) 45vw, 100vw"
          className="relative mb-6 aspect-[16/10] w-full rounded-xl transition-transform duration-700 group-hover:scale-[1.01]"
        />

        <div className="relative flex items-center gap-3">
          <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="rounded-full border border-border-strong px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted">
            {project.category}
          </span>
        </div>

        <h3 className="relative mt-3 font-display text-xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>

        <p className="relative mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-foreground-muted">
          {project.tagline}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-5">
          <span
            aria-hidden
            className="relative inline-flex items-center gap-1.5 text-xs font-medium text-foreground-muted transition-colors duration-300 group-hover:text-accent"
          >
            View Project
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Visit Live Website
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-strong to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </article>
    </Reveal>
  );
}
