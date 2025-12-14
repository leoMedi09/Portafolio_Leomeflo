// src/sections/Projects.jsx
import React from 'react';
import { ExternalLink, Folder } from 'lucide-react'; 
import { projects } from '../data/user';

const Projects = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-blue-500 font-mono tracking-wider text-sm">PORTAFOLIO</span>
            <h2 className="text-4xl font-bold text-white mt-2">Proyectos Destacados</h2>
          </div>
          <div className="h-[1px] bg-gray-800 flex-grow ml-8 mb-2 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-[#151515] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col">
              
              {/* Imagen */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-90"></div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  {/* AQUÍ se usa el Folder que faltaba importar */}
                  <Folder className="text-blue-500" size={28} />
                  <a href={project.link} className="text-gray-400 hover:text-white transition">
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;