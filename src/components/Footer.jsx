import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
      {/*      <div className="w-full bg-neutral-900 text-white  border-b  border-gray-500/40 px-8">
        <div className="max-w-7xl mx-auto py-8">
          <p className="text-center text-sm text-[#5a5a5a]">
            Desarrollado por Johannes Berrocal - 2025 - Todos los derechos
            reservados
          </p>
        </div>
      </div> */}

      <div className="w-full bg-neutral-900 text-white border-b border-gray-500/40 px-8">
        <div className="max-w-7xl mx-auto py-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
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
            <a href="mailto:correo@ejemplo.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 hover:text-white text-xl"
              />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Desarrollado por Johannes Berrocal - 2025 - Todos los derechos
            reservados
          </p>
        </div>
      </div>
    </>
  );
};
