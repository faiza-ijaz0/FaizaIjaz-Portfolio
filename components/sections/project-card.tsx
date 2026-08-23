import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-background-elevated/60 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] focus-visible:-translate-y-1 focus-visible:border-accent/40 sm:p-7"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[5.5rem] font-medium leading-none text-foreground opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.06]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="relative font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>

        <h3 className="relative mt-3 font-display text-xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>

        <p className="relative mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-foreground-muted">
          {project.tagline}
        </p>

        <span className="relative mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-xs font-medium text-foreground-muted transition-colors duration-300 group-hover:text-accent">
          View Project
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>

        <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-strong to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </Link>
    </Reveal>
  );
}
