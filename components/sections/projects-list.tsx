import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/project-card";

export function ProjectsList() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
