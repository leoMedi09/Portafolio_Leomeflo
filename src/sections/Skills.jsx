import React from "react";
import { skills } from "../data/user";

const Skills = () => {

    return(

        <section id="skills" className="py-24 bg-[#0A0A0A] relative">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto lateral */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Stack Tecnológico</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Mi caja de herramientas combina la potencia del backend con <span className="text-blue-400">Java y Python</span>, 
              la gestión eficiente de datos con <span className="text-blue-400">SQL</span> y el desarrollo moderno con React.
            </p>
            {/* Un detalle visual decorativo */}
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <code className="text-sm text-gray-300">
                <span className="text-purple-400">class</span> <span className="text-yellow-400">Developer</span> {'{'} <br/>
                &nbsp;&nbsp;<span className="text-blue-400">focus</span>: <span className="text-green-400">"Scalability"</span>;<br/>
                &nbsp;&nbsp;<span className="text-blue-400">passion</span>: <span className="text-green-400">"Problem Solving"</span>;<br/>
                {'}'}
              </code>
            </div>
          </div>

          {/* Barras de Progreso */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-blue-400 font-mono text-sm">{skill.level}%</span>
                </div>
                
                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full relative group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    );

}

export default Skills;
