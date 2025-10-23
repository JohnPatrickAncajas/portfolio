import { projects } from '@/lib/data';
import ProjectCard from '../ui/ProjectCard';

export default function ProjectList() {
  return (
    <section>
      <h2>Featured Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}