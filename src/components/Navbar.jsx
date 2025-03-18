import React, { useState } from "react";
import { Link } from "react-scroll";

const links = [
  {
    section: "inicio",
    link: "Inicio",
  },
  {
    section: "sobre-mi",
    link: "Sobre mí",
  },
  {
    section: "proyectos",
    link: "Proyectos",
  },
  {
    section: "experiencia",
    link: "Experiencia",
  },
  {
    section: "contacto",
    link: "Contacto",
  },
];

export const Navbar = () => {
  const [linkActive, setLinkActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = (section) => {
    setLinkActive(section);
    setIsOpen(false); // Cierra el menú después de hacer clic en un enlace
  };
  return (
    <>
      <div className="w-full bg-[#18181b] text-white fixed border-b border-[#393939] px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-medium">Johannes B.</h1>

            <nav>
              {/* Menu Mobile */}
              <div
                className=" rounded-md w-12 h-12 flex flex-col items-center justify-center md:hidden cursor-pointer relative my-3"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`absolute w-8 h-[4px] bg-white rounded transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>

                <span
                  className={`absolute w-8 h-[4px] bg-white rounded transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>

                <span
                  className={`absolute w-8 h-[4px] bg-white rounded transition-transform duration-300 ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></span>
              </div>
              {isOpen && (
                <div
                  className="fixed top-18 inset-0 bg-black/50  md:hidden transition-opacity duration-300"
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en el fondo
                ></div>
              )}
              <ul
                className={`md:flex absolute md:static left-0 h-screen md:h-auto w-64 md:w-auto bg-[#18181b] md:bg-transparent flex-col md:flex-row items-start md:items-center py-8 pl-8 md:p-0 transition-transform duration-300
                    ${
                      isOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                    }`}
              >
                {links.map((item) => {
                  return (
                    <li
                      key={item.section}
                      className={`md:px-6 border-b-2 transition-all duration-300 cursor-pointer ${
                        linkActive === item.section
                          ? "border-blue-500 text-white bg-neutral-800"
                          : "border-transparent hover:border-blue-500 hover:text-blue-500 text-gray-400"
                      }`}
                    >
                      <Link
                        to={item.section}
                        spy={true}
                        smooth={true}
                        duration={700}
                        offset={-80}
                        onSetActive={() => handleNavClick(item.section)}
                        onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                        className="py-3 md:py-6 block"
                      >
                        {item.link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
