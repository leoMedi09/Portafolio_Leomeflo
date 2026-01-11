// src/sections/Projects.jsx
import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { projects } from '../data/user';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Projects = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Fondo animado con grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #1e3a8a 1px, transparent 1px),
                           linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Luz de fondo animada */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
       
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-blue-500 font-mono tracking-wider text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              PORTAFOLIO
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold text-white mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Proyectos Destacados
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-grow ml-8 mb-2 hidden md:block"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Componente separado para cada card con animaciones
const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-[#151515] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col relative"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
      }}
    >
      {/* Efecto de brillo al hacer hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0"
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.6 }}
      />

      {/* Partículas decorativas */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "100%",
                opacity: 0 
              }}
              animate={{ 
                y: "-100%",
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 0.5
              }}
            />
          ))}
        </>
      )}
     
      {/* Imagen */}
      <div className="h-48 overflow-hidden relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-90"></div>
        
        {/* Badge animado */}
        <motion.div
          className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/50"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
        >
          <span className="text-blue-300 text-xs font-mono">Proyecto {index + 1}</span>
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start mb-4">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Folder className="text-blue-500" size={28} />
          </motion.div>
          
          <motion.a 
            href={project.link}
            className="text-gray-400 hover:text-white transition p-2 rounded-full hover:bg-blue-500/10"
            whileHover={{ scale: 1.2, rotate: -45 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>

        <motion.h3 
          className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {project.title}
        </motion.h3>
       
        <motion.p 
          className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {project.description}
        </motion.p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <motion.span 
              key={i}
              className="text-xs font-mono text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition cursor-default"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                delay: index * 0.1 + 0.5 + i * 0.05,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;