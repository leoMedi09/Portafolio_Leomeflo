import React from "react";
import { skills } from "../data/user";
import { motion, useInView } from "framer-motion";
import { Database, Smartphone, Code2, Terminal, Server, Layout, Cpu, Zap, Palette, Bot } from "lucide-react";

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Fondo con partículas */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Luz de fondo */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto lateral */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Stack Tecnológico
            </motion.h2>

            <motion.p
              className="text-gray-400 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Mi caja de herramientas combina la potencia del backend con{" "}
              <motion.span
                className="text-blue-400 font-semibold"
                whileHover={{ scale: 1.05, color: "#60a5fa" }}
              >
                Java y Python
              </motion.span>
              , la gestión eficiente de datos con{" "}
              <motion.span
                className="text-blue-400 font-semibold"
                whileHover={{ scale: 1.05, color: "#60a5fa" }}
              >
                SQL
              </motion.span>
              {" "}y el desarrollo moderno con React.
            </motion.p>

            {/* Bloque de código animado */}
            <motion.div
              className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)" }}
            >
              {/* Efecto de escaneo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0"
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.code
                className="text-sm text-gray-300 relative z-10 block"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <TypewriterCode />
              </motion.code>

              {/* Indicador de cursor */}
              <motion.div
                className="absolute bottom-4 right-4 flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Stats decorativas */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              {[
                { label: "Proyectos", value: "6+" },
                { label: "Tecnologías", value: skills.length },
                { label: "Experiencia", value: "10M" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    backgroundColor: "rgba(59, 130, 246, 0.05)"
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                >
                  <motion.div
                    className="text-2xl font-bold text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Grid de Skills 2.0 (Cards) */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} isInView={isInView} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Componente Card de Skill Mejorado
const SkillCard = ({ skill, index, isInView }) => {

  const getIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('python')) return <Terminal className="w-6 h-6 text-yellow-500" />;
    if (n.includes('flask')) return <Server className="w-6 h-6 text-white" />; // Flask (Backend)
    if (n.includes('vite')) return <Zap className="w-6 h-6 text-yellow-400" />; // Vite (Rápido)
    if (n.includes('react') || n.includes('javascript')) return <Code2 className="w-6 h-6 text-blue-400" />;
    if (n.includes('node')) return <Server className="w-6 h-6 text-green-500" />;
    if (n.includes('sql') || n.includes('mongo')) return <Database className="w-6 h-6 text-indigo-400" />;
    if (n.includes('android') || n.includes('flutter')) return <Smartphone className="w-6 h-6 text-purple-400" />;
    if (n.includes('java')) return <Cpu className="w-6 h-6 text-red-500" />;
    if (n.includes('git')) return <Bot className="w-6 h-6 text-orange-500" />;
    return <Layout className="w-6 h-6 text-gray-400" />;
  };

  return (
    <motion.div
      className="group relative p-4 bg-gray-900/40 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, type: "spring" }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 group-hover:via-blue-500/10 transition-all duration-500" />

      <div className="flex items-center gap-4 relative z-10">
        <div className="p-2.5 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300 ring-1 ring-white/5 group-hover:ring-blue-500/30">
          {getIcon(skill.name)}
        </div>

        <div>
          <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
            {skill.name}
          </h3>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-1 w-4 rounded-full ${i < (skill.level / 20)
                  ? "bg-blue-500"
                  : "bg-gray-700"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Componente de texto con efecto máquina de escribir
const TypewriterCode = () => {
  const codeLines = [
    { text: 'class', color: 'text-purple-400' },
    { text: ' Developer ', color: 'text-yellow-400' },
    { text: '{', color: 'text-gray-300' },
    { text: '\n  focus', color: 'text-blue-400' },
    { text: ': ', color: 'text-gray-300' },
    { text: '"Scalability"', color: 'text-green-400' },
    { text: ';\n  passion', color: 'text-blue-400' },
    { text: ': ', color: 'text-gray-300' },
    { text: '"Problem Solving"', color: 'text-green-400' },
    { text: ';\n}', color: 'text-gray-300' },
  ];

  const [displayedText, setDisplayedText] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < codeLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedText([...displayedText, codeLines[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, codeLines.length]);

  return (
    <span>
      {displayedText.map((line, i) => (
        <motion.span
          key={i}
          className={line.color}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {line.text}
        </motion.span>
      ))}
      {currentIndex >= codeLines.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-blue-400"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default Skills;