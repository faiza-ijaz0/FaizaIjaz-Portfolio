import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/project-card";

export function ProjectsList() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
