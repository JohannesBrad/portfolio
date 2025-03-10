import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faServer,
  faChartLine,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

import { SectionTitle } from "../components/SectionTitle";

const projects = [
  {
    id: 1,
    title: "Marcobre",
    icon: faIndustry,
    description:
      "Renovación total del sitio web corporativo de Marcobre. Desarrollé la plataforma en React y , implementando un CMS personalizado con un dashboard para la gestión dinámica del contenido. Esto permitió a la empresa actualizar su información de manera sencilla y eficiente.",
    technology: ["React", "TailwindCSS", "CMS personalizado", "API Rest"],
  },
  {
    id: 2,
    title: "NetworkServices",
    icon: faServer,
    description:
      "Desarrollo de un sitio web moderno y responsivo para Networks Services, una empresa especializada en instalación de cableado estructurado y mantenimiento de servidores. Implementé la plataforma utilizando React y TailwindCSS, optimizando el rendimiento y la experiencia de usuario para facilitar la presentación de sus servicios.",
    technology: ["React", "TailwindCSS", "JavaScript", "Vite"],
  },
  {
    id: 3,
    title: "Brain Consulting",
    icon: faChartLine,
    description:
      "Creación de un sitio web profesional en WordPress para Brain Consulting, una consultora de TI. Diseñé una interfaz intuitiva y optimizada, asegurando una navegación fluida y una presentación clara de sus servicios. Se implementaron mejoras en SEO y optimización de carga para una mejor visibilidad en buscadores.",
    technology: ["Wordpress", "Elementor", "Figma"],
  },
  /* 
  {
    id: 4,
    title: "Mannesi",
    image: "https://picsum.photos/200/300",
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. ",
  },
   {
    id: 4,
    title: "BR-Blue",
    image: "https://picsum.photos/200/300",
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. ",
  }, */
];

export const ProjectsSection = () => {
  return (
    <>
      <section id="proyectos" className="px-8 2xl:h-[48rem] md:h-screen">
        <SectionTitle title="Proyectos" />

        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col md:flex-row py-6 gap-8 flex-wrap justify-start">
            {projects.map((item) => {
              return (
                <article
                  key={item.id}
                  className="w-full md:w-[25rem] flex p-6 card-style"
                >
                  <div className="py-4">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-2xl pb-6 text-[#a3a3a3]"
                    />
                    <h3 className="text-lg font-medium md:text-xl leading-7 mb-1 text-blue-500">
                      {item.title}
                    </h3>
                    <div className="flex gap-2 py-1">
                      <span className="text-blue-300 py-1 rounded-full font-light text-sm ">
                        {" "}
                        {item.technology.join(" - ")}
                      </span>
                    </div>
                    <p className="text-sm font-light md:text-lg leading-7 pb-3 md:pt-2 text-[#a3a3a3]">
                      {item.description}
                    </p>
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
