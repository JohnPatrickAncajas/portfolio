export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Alisto',
    slug: 'alisto-app',
    description: 'A React Native mobile app for emergency response.',
    technologies: ['React Native', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Game',
    slug: 'game',
    description: 'A 3D game prototype developed in Unity.',
    technologies: ['Unity', 'C#'],
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    slug: 'portfolio-v1',
    description: 'This very portfolio, built to showcase my work.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
];