import Link from 'next/link';
import type { Project } from '@/lib/data';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <Link href={`/projects/${project.slug}`}>
        View Details
      </Link>
    </div>
  );
}