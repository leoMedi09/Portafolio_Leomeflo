import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { userProfile } from "../data/user";

const Hero = () => {

    return (
       <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      {/* Fondo con efecto de luz sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        <div className="max-w-3xl">
          
          {/* Saludo estilo código */}
          <div className="inline-block px-3 py-1 mb-4 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
            <span className="text-blue-400 font-mono text-sm">Hello_World.java</span>
          </div>

          {/* Nombre y Rol */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{userProfile.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            {userProfile.role}
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
            {userProfile.description}
          </p>

          {/* Botones y Redes Sociales */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a 
              href="#portfolio"
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Ver Proyectos
            </a>
            
            <div className="flex gap-4 md:ml-6">
              <SocialBtn href={userProfile.social.github} icon={<Github size={20} />} />
              <SocialBtn href={userProfile.social.linkedin} icon={<Linkedin size={20} />} />
              <SocialBtn href={userProfile.social.email} icon={<Mail size={20} />} />
            </div>
          </div>

        </div>
      </div>
    </section> 
    );

};

const SocialBtn = ({ href, icon }) => (
    <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;

