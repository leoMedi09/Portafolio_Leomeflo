// src/data/user.js

// DATOS PERSONALES
export const userProfile = {
  name: "Leonardo José Medina Flores",
  role: "Estudiante de Ingeniería de Sistemas y Computación",
  
  description: "Desarrollador de Software con sólida formación en Python, Java y SQL. Me especializo en construir soluciones eficientes, desde aplicaciones móviles hasta sistemas web escalables.",
  social: {
    github: "https://github.com/leoMedi09", 
    linkedin: "https://www.linkedin.com/in/leomedina", 
    email: "mailto:leomedinaflores09@gmail.com"
  }
};

// HABILIDADES TÉCNICAS

export const skills = [
  { name: "Python & Flask/FastAPI", level: 95 },
  { name: "Java & Programación OO", level: 85 },
  { name: "SQL (MySQL/PostgreSQL)", level: 90 }, 
  { name: "React, Vite & Tailwind", level: 80 }, 
  { name: "Android Studio & Móvil", level: 75 },
];

// PROYECTOS DESTACADOS

export const projects = [
  {
    title: "Cita Salud - App Móvil",
    description: "Solución integral para reserva de citas médicas en zonas rurales. Incluye App nativa Android y panel administrativo Web.",
    tags: ["Android Studio", "FastAPI", "PostgreSQL", "Vite"], 
    link: "#", 
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000" 
  },
  {
    title: "Guanacargo - Logística",
    description: "Plataforma web para optimizar la gestión de envíos y encomiendas. Módulos de tracking, almacén y administración de clientes.",
    tags: ["Python Flask", "MySQL", "Tailwind CSS"],
    link: "#",
    image: "https://images.unsplash.com/photo-1566576912902-199bd62052db?auto=format&fit=crop&q=80&w=1000" 
  },
  {
    title: "Automatización Growby",
    description: "Scripts de Python para descarga masiva de datos y automatización de correos integrados con ERP mediante APIs REST.",
    tags: ["Python", "Automatización", "APIs REST"], 
    link: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000" 
  }
];