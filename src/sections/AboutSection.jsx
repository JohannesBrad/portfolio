//import { ChevronRight } from "lucide-react";
import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const AboutSection = ({ data }) => {
  const { content } = data;
  return (
    <>
      <section id="sobre-mi" className="px-8 2xl:h-[48rem] md:h-screen">
        <SectionTitle title="Sobre mí" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row py-6 gap-8">
            <div className="md:w-3/4 p-6 card-style">
              <p className="text-md font-light md:text-xl leading-7 pb-3 md:pb-6 text-[#a3a3a3]">
                {content.description}
              </p>
              <h3 className="text-lg font-light md:text-xl leading-7 mb-2">
                Mi enfoque en el desarrollo web:
              </h3>
              <ul className="">
                {content.detail.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="list-disc text-md md:text-xl font-light leading-7 text-[#a3a3a3] flex items-center gap-1"
                    >
                      - {item}
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center gap-3">
                <p className="text-blue-500 py-4 md:text-lg">
                  Conoce un poco más:
                </p>
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
                {content.skills.map(({ name, color }) => (
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
