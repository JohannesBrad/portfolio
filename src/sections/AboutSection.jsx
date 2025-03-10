//import { ChevronRight } from "lucide-react";
import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const skill = [
  { name: "HTML", color: "text-orange-400 bg-orange-900/20" },
  { name: "CSS", color: "text-blue-400 bg-blue-900/20" },
  { name: "JavaScript", color: "text-yellow-400 bg-yellow-900/20" },
  { name: "React", color: "text-sky-400 bg-sky-900/20" },
  { name: "Git", color: "text-red-400 bg-red-900/20" },
  { name: "WordPress", color: "text-indigo-400 bg-indigo-900/20" },
  { name: "Tailwind CSS", color: "text-teal-400 bg-teal-900/20" },
  { name: "Bootstrap", color: "text-purple-400 bg-purple-900/20" },
  { name: "Linux", color: "text-gray-300 bg-gray-800/20" },
  { name: "MySQL", color: "text-cyan-400 bg-cyan-900/20" },
  { name: "Vtex", color: "text-pink-400 bg-pink-900/20" },
  { name: "AWS", color: "text-amber-300 bg-amber-800/20" },
];

export const AboutSection = () => {
  return (
    <>
      <section id="sobre-mi" className="px-8 2xl:h-[48rem] md:h-screen">
        <SectionTitle title="Sobre mí" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row py-6 gap-8">
            <div className="md:w-3/4 p-6 card-style">
              <p className="text-sm font-light md:text-lg leading-7 pb-3 md:pb-6 text-[#a3a3a3]">
                Soy Johannes Berrocal, un desarrollador frontend apasionado por
                crear sitios web modernos, accesibles y altamente optimizados.
                Me especializo en transformar ideas en experiencias digitales
                impactantes, combinando diseño intuitivo, rendimiento eficiente
                y código limpio.
              </p>
              <h3 className="text-lg font-light md:text-xl leading-7 mb-2">
                Mi enfoque en el desarrollo web:
              </h3>
              <ul>
                {[
                  "Diseño y desarrollo de interfaces con tecnologías modernas como React, TailwindCSS.",
                  "Optimización de performance, garantizando que las aplicaciones sean rápidas, responsivas y accesibles.",
                  "Experiencia de usuario (UX), asegurando que cada interacción sea fluida.",
                  "Buenas prácticas en desarrollo web, aplicando principios como arquitectura escalable, mantenibilidad.",
                  "Consumo de APIs y manejo de estado, integrando datos dinámicos de manera eficiente en aplicaciones frontend.",
                ].map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-sm md:text-lg font-light leading-7 text-[#a3a3a3] flex items-center gap-1"
                    >
                      {/* <ChevronRight size="16px" color="#a3a3a3" /> {item} */}
                      {item}
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center gap-3">
                <p className="text-blue-500 py-4">Mis links</p>
                <a
                  href="https://github.com/JohannesBrad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-400 hover:text-white text-xl"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/tu-perfil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-gray-400 hover:text-white text-xl"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col md:w-1/4 p-6 card-style">
              <h3 className="text-lg font-semibold mb-2">Skill</h3>
              <div className="flex flex-wrap gap-3">
                {skill.map(({ name, color }) => (
                  <span
                    key={name}
                    className={`px-3 py-1 rounded-full font-light text-sm ${color}`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
