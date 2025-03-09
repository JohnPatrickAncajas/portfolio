"use client";

import Image from "next/image";

const projects = [
  { id: 1, title: "Dialecto", description: "Short summary of project one. Short summary of project one. Short summary of project one. Short summary of project one. Short summary of project one.", image: "/images/project1.png" },
  { id: 2, title: "FlapItLawin", description: "Short summary of project two. Short summary of project two. Short summary of project two. Short summary of project two. Short summary of project two.", image: "/images/project2.png" },
  { id: 3, title: "QuizMe", description: "Short summary of project three. Short summary of project three. Short summary of project three. Short summary of project three. Short summary of project three.", image: "/images/project3.png" },
  { id: 4, title: "C Lessons", description: "Short summary of project four. Short summary of project four. Short summary of project four. Short summary of project four. Short summary of project four.", image: "/images/project4.png" },
  { id: 5, title: "Memo", description: "Short summary of project five. Short summary of project five. Short summary of project five. Short summary of project five. Short summary of project five.", image: "/images/project5.png" },
  { id: 6, title: "Academicart", description: "Short summary of project six. Short summary of project six. Short summary of project six. Short summary of project six. Short summary of project six.", image: "/images/project6.png" }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700 mt-12 backdrop-blur-md bg-opacity-30">
      <h2 className="text-xl font-semibold text-blue-400 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-blue-400 mt-4">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
