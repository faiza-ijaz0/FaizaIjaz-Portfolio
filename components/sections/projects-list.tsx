"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/sections/project-card";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "All";

const categories: Filter[] = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export function ProjectsList() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2 sm:mb-12">
        {categories.map((category) => {
          const count =
            category === "All" ? projects.length : projects.filter((project) => project.category === category).length;
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-300",
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border-strong text-foreground-muted hover:border-accent hover:text-accent",
              )}
            >
              {category}
              <span className={cn(isActive ? "opacity-80" : "text-foreground-subtle")}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {active === "All" ? "" : ` in ${active}`}
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />
        ))}
      </div>
    </div>
  );
}
