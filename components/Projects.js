"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Project One", description: "Short summary of project one.", image: "/images/project1.png", details: "Detailed information about project one." },
  { id: 2, title: "Project Two", description: "Short summary of project two.", image: "/images/project2.png", details: "Detailed information about project two." },
  { id: 3, title: "Project Three", description: "Short summary of project three.", image: "/images/project3.png", details: "Detailed information about project three." },
  { id: 4, title: "Project Four", description: "Short summary of project four.", image: "/images/project4.png", details: "Detailed information about project four." },
  { id: 5, title: "Project Five", description: "Short summary of project five.", image: "/images/project5.png", details: "Detailed information about project five." },
  { id: 6, title: "Project Six", description: "Short summary of project six.", image: "/images/project6.png", details: "Detailed information about project six." }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-gray-850 p-8 rounded-lg shadow-lg border border-gray-700 mt-12 backdrop-blur-md bg-opacity-30">
      <h2 className="text-xl font-semibold text-blue-400 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedProject(project)}
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

      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-gray-900 p-8 rounded-lg max-w-4xl w-full h-[90vh] flex flex-col items-center text-center relative border border-gray-700 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl" 
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <Image 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              width={500} 
              height={500} 
              className="w-full max-h-[60vh] object-cover rounded-lg" 
            />
            <h3 className="text-2xl font-semibold text-blue-400 mt-6">{selectedProject.title}</h3>
            <p className="text-gray-300 mt-4 px-6">{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}
