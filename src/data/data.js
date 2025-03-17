import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faChartLine,
  faServer,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

export const portfolioData = [
  {
    id: 1,
    section: "hero",
    content: {
      title: "Hola, soy Johannes.",
      subtitle: "Frontend Developer",
      description:
        "Diseño y desarrollo interfaces web rápidas, accesibles y escalables, optimizadas para rendimiento y experiencia de usuario. He trabajado en diversos proyectos, creando soluciones digitales eficientes para empresas que buscan destacar en la web.",
    },
  },
  {
    id: 2,
    section: "sobre-mi",
    content: {
      title: "Sobre mí",
      description:
        "Soy Johannes, desarrollador frontend apasionado por crear sitios web modernos, accesibles y optimizados. Me especializo en transformar ideas en experiencias digitales, combinando diseño intuitivo, rendimiento eficiente y código limpio.",
      detail: [
        "Diseño y desarrollo de interfaces con tecnologías modernas como React, TailwindCSS.",
        "Optimización de performance, garantizando que las aplicaciones sean rápidas, responsivas y accesibles.",
        "Experiencia de usuario (UX), asegurando que cada interacción sea fluida.",
        "Buenas prácticas en desarrollo web, aplicando principios como arquitectura escalable y mantenibilidad.",
        "Consumo de APIs y manejo de estado, integrando datos dinámicos de manera eficiente en aplicaciones frontend.",
      ],
      skills: [
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
      ],
    },
  },
  {
    id: 3,
    section: "proyectos",
    content: {
      title: "Proyectos",
      itemsList: [
        {
          title: "Marcobre",
          icon: faIndustry,
          description:
            "Renovación total del sitio web corporativo de Marcobre. Desarrollé la plataforma en React e implementé un CMS personalizado con un dashboard para la gestión dinámica del contenido.",
          technology: ["React", "TailwindCSS", "CMS personalizado", "API Rest"],
        },
        {
          title: "NetworkServices",
          icon: faServer,
          description:
            "Desarrollo de un sitio web moderno y responsivo para Networks Services, una empresa especializada en instalación de cableado estructurado y mantenimiento de servidores.",
          technology: ["React", "TailwindCSS", "JavaScript", "Vite"],
        },
        {
          title: "Brain Consulting",
          icon: faChartLine,
          description:
            "Creación de un sitio web profesional en WordPress para Brain Consulting, una consultora de TI. Diseñé una interfaz intuitiva y optimizada, asegurando una navegación fluida.",
          technology: ["WordPress", "Elementor", "Figma"],
        },
      ],
    },
  },
  {
    id: 4,
    section: "experiencia",
    content: {
      title: "Experiencia",
      itemsList: [
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
          skills: [
            "Vtex IO",
            "React",
            "JavaScript",
            "UX/UI",
            "Optimización Web",
          ],
        },
        {
          id: 2,
          title: "Desarrollador Frontend",
          subtitle:
            "Mantenimiento de sitio web y desarrollo de componentes UI.",
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
          subtitle:
            "Desarrollo web personalizado para empresas e instituciones.",
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
          skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Campañas de Marketing",
          ],
        },
      ],
    },
  },
  {
    id: 5,
    section: "contacto",
    content: {
      title: "Contáctame",
    },
  },
];
