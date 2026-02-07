// src/data/user.js - Alineado con tu CV real

export const user = {
  name: "Leonardo José Medina Flores",
  role: "IT Project Assistant & Developer", // Basado en tu experiencia en Growby
  // Alternativa: "Desarrollador Full Stack Junior"
  
  description: "Estudiante de IX ciclo de Ingeniería de Sistemas con experiencia en desarrollo de software, análisis de datos y aplicaciones móviles. Motivado por la tecnología, con habilidades en programación backend, bases de datos y trabajo en equipo. Actualmente enfocado en crear soluciones eficientes mientras continúo creciendo profesionalmente.",
  
  social: {
    github: "https://github.com/leoMedi09", 
    linkedin: "https://www.linkedin.com/in/leonardo-medina-flores", 
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=leonardojosemedinaflores0902@gmail.com&su=Contacto desde tu Portafolio&body=Hola Leonardo,%0D%0A%0D%0AMe gustaría contactarte...",
    whatsapp: "https://wa.me/51959540598"
  }
};

// Herramientas y Lenguajes Principales
export const skills = [
  { name: "Java", level: 85 },
  { name: "Python", level: 85 },
  { name: "Flask", level: 80 },                // Backend Framework
  { name: "React", level: 90 },
  { name: "Vite", level: 85 },                 // Build Tool
  { name: "Node.js", level: 75 },
  { name: "PostgreSQL", level: 80 },
  { name: "MySQL", level: 80 },
  { name: "Android Studio", level: 70 },       // IDE
  { name: "Flutter", level: 65 },
  { name: "MongoDB", level: 70 },
  { name: "Git", level: 85 },
];

// Proyectos reales de tu CV
export const projects = [
  {
    title: "TaskFlow - Gestor de Tareas Realtime",
    description: "Aplicación de productividad colaborativa con sincronización en tiempo real vía WebSockets. Incluye notificaciones en vivo, priorización de tareas, calendario y diseño responsive minimalista.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "TailwindCSS"],
    link: "https://github.com/leoMedi09/TaskFlow",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Guanacargo - Sistema Logístico",
    description: "Plataforma web completa para optimizar la gestión logística de envíos. Implementa módulos de clientes, encomiendas, tracking y control de almacén. Desarrollado con Flask, MySQL y digitalización de procesos.",
    tags: ["Python", "Flask", "MySQL", "Sistema Web"],
    link: "https://github.com/leoMedi09/GUANACARGO", 
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Cita Salud - App Móvil",
    description: "Aplicación móvil integral para gestión y reserva de citas médicas. Incluye API REST con FastAPI, app nativa Android y panel administrativo web. Gestiona médicos, horarios y disponibilidad en tiempo real.",
    tags: ["Android", "FastAPI", "PostgreSQL", "Vite"],
    link: "https://github.com/leoMedi09/Cita_Salud_RobleFarma",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Sistema CRUD de Gestión",
    description: "Aplicación web full-stack para administrar inventarios y usuarios con operaciones CRUD completas. Implementa autenticación, validaciones y conexión eficiente entre backend y frontend.",
    tags: ["React", "Python", "Flask", "MySQL"],
    link: "https://github.com/leoMedi09/Proyecto_CRUD_Gestion", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Chatbot con IA",
    description: "Asistente virtual que procesa lenguaje natural integrando APIs de OpenAI. Desarrollado con Streamlit para explorar automatización de atención al cliente y procesamiento inteligente de consultas.",
    tags: ["Python", "OpenAI API", "Streamlit", "NLP"],
    link: "https://github.com/leoMedi09/Chatbot_IA",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Portafolio Personal",
    description: "Portafolio web interactivo con animaciones modernas desarrollado con React, Vite y Framer Motion. Deploy automatizado en Vercel con integración continua desde GitHub.",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    link: "https://github.com/leoMedi09/Portafolio_Leomeflo",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
  }
];

// Experiencia laboral (opcional - para agregar una sección nueva)
export const experience = [
  {
    company: "Growby",
    position: "IT Project Assistant & Developer Intern",
    period: "Feb 2025 - Nov 2025",
    location: "Remoto - Lima, Perú",
    achievements: [
      "Asistencia técnica en proyectos V13 y SIFRAH con React, Vite y Flutter",
      "Desarrollo de scripts de automatización en Python con APIs REST",
      "Ejecución de pruebas QA con Postman, Swagger y JMeter",
      "Administración y optimización de PostgreSQL y MySQL",
      "Documentación de incidencias en Jira"
    ]
  }
];