import React, { useState } from "react";
import { Link } from "react-scroll";

const links = [
  {
    section: "home",
    link: "Home",
  },
  {
    section: "sobre-mi",
    link: "Sobre mi",
  },
  {
    section: "projectos",
    link: "Projectos",
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
  return (
    <>
      <div className="w-full bg-[#18181b] text-white fixed border-b  border-gray-500/40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Johannes B.</h1>
            <nav>
              <ul className="flex">
                {links.map((item) => {
                  console.log(item);
                  return (
                    <li
                      key={item.section}
                      className={`px-6 border-b-2 transition-all duration-300 ${
                        linkActive === item.section
                          ? "border-indigo-500 text-white bg-neutral-800 "
                          : "border-transparent hover:border-indigo-500  hover:text-indigo-500 text-gray-400"
                      }`}
                    >
                      <Link
                        to={item.section}
                        spy={true}
                        smooth={true}
                        duration={700}
                        onSetActive={() => setLinkActive(item.section)}
                        className="py-7  block"
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
