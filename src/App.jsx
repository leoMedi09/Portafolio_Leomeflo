// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 1. Barra de Navegación */}
      <Navbar />
      
      <main>
        {/* 2. Portada (Ya la tienes en sections/Hero.jsx) */}
        <Hero />
        
        {/* 3. Habilidades (Ya la tienes en sections/Skills.jsx) */}
        <Skills />
        
        {/* 4. Proyectos (Ya la tienes en sections/Projects.jsx) */}
        <Projects />
      </main>

      {/* 5. Footer simple */}
      <footer className="py-8 text-center border-t border-gray-900 text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Leonardo Medina. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}

export default App;