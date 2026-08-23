"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { ProjectRow } from "@/components/sections/project-row";
import { cn } from "@/lib/utils";

const ALL = "All" as const;

export function ProjectsList() {
  const [active, setActive] = useState<ProjectCategory | typeof ALL>(ALL);

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
        {[ALL, ...projectCategories].map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-200",
              active === category
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border-strong text-foreground-muted hover:border-accent hover:text-accent",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {filtered.length === 0 ? (
          <p className="border-t border-border py-16 text-center text-sm text-foreground-muted">
            No projects in this category yet.
          </p>
        ) : (
          filtered.map((project, i) => <ProjectRow key={project.slug} project={project} index={i} />)
        )}
      </div>
    </div>
  );
}
