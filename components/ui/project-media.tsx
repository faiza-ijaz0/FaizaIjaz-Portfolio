import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ui/project-visual";
import { getProjectInitials } from "@/lib/project-initials";
import { cn } from "@/lib/utils";

/** Real homepage screenshot when available, otherwise the generated placeholder visual. */
export function ProjectMedia({
  project,
  sizes,
  preload = false,
  className,
}: {
  project: Project;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  if (!project.image) {
    return <ProjectVisual slug={project.slug} initials={getProjectInitials(project.title)} className={className} />;
  }

  return (
    <div className={cn("relative overflow-hidden bg-background-panel", className)}>
      <Image
        src={project.image}
        alt={`Homepage of the ${project.title} live website`}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover object-top"
      />
      <div aria-hidden className="absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_var(--raw-border)]" />
    </div>
  );
}
