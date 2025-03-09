import React from "react";
import { SectionTitle } from "../components/SectionTitle";

const experiences = [
  {
    id: 1,
    title: "Supervisor Frontend",
    subtitle:
      "Planificación de proyectos, coordinación de equipo y desarrollo de soluciones digitales.",
    period: "Jul. 2022 – Feb. 2024",
    company: "Coolbox",
    image: "https://picsum.photos/200/300", // Reemplazar con una imagen real
    description:
      "Gestioné la planificación de proyectos, capacité a nuevos miembros del equipo en Vtex IO y desarrollé componentes en React. Analicé métricas clave para optimizar el rendimiento del sitio web.",
    skills: ["Vtex IO", "React", "JavaScript", "UX/UI", "Optimización Web"],
  },
  {
    id: 2,
    title: "Desarrollador Frontend",
    subtitle: "Mantenimiento de sitio web y desarrollo de componentes UI.",
    period: "Mar. 2021 – Jun. 2022",
    company: "Coolbox",
    image: "https://picsum.photos/200/300",
    description:
      "Desarrollé y mantuve el sitio web de Coolbox, implementando componentes en React y optimizando el rendimiento con Node.js y Git.",
    skills: [
      "Vtex IO",
      "React",
      "CSS",
      "Node.js",
      "Git",
      "Optimización de Rendimiento",
    ],
  },
  {
    id: 3,
    title: "Desarrollador Frontend Freelance",
    subtitle: "Desarrollo web personalizado para empresas e instituciones.",
    period: "Jul. 2020 – Feb. 2021",
    company: "Freelance",
    image: "https://picsum.photos/200/300",
    description:
      "Desarrollé sitios web para clientes, incluyendo proyectos gubernamentales como 'El País Que Queremos' y BrainConsulting, utilizando infraestructura AWS.",
    skills: ["React", "AWS", "Diseño Web", "JavaScript", "UI/UX"],
  },
  {
    id: 4,
    title: "Desarrollador Frontend",
    subtitle:
      "Desarrollo de sitios web e implementación de campañas de marketing.",
    period: "Feb. 2020 – Jun. 2020",
    company: "Wunderman Thompson Perú",
    image: "https://picsum.photos/200/300",
    description:
      "Desarrollé e implementé el sitio web de Movistar, incluyendo el desarrollo frontend para la campaña de marketing MAIA.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Campañas de Marketing"],
  },
];

export const ExperienceSection = () => {
  return (
    <>
      <section
        id="experiencia"
        /* className="px-8 2xl:h-[48rem] md:h-screen border-b border-gray-500/40" */
        className="px-8"
      >
        <SectionTitle title="Experiencia" />

        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col py-6 gap-6">
            {experiences.map((item) => {
              return (
                <article key={item.id} className="w-full pb-6 card-style">
                  <div className="flex justify-between items-center pb-2">
                    <h4 className="font-bold text-xl">{item.company}</h4>
                    <span>{item.period}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <h5 className="text-xl font-medium pb-2 text-blue-400">
                      {item.title}
                    </h5>
                    {/* <span>{item.company}</span> */}
                  </div>

                  <p className="text-sm font-light md:text-lg leading-7 pb-3 md:pb-6 text-[#a3a3a3]">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 py-2">
                    {item.skills.map((skill, index) => {
                      console.log(skill, index);
                      return (
                        <span
                          key={skill}
                          className="bg-blue-400/20 px-3 py-1 rounded-full font-light text-sm  "
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
