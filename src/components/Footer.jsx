import React from "react";

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
              <i className="fab fa-github text-gray-400 hover:text-white text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-gray-400 hover:text-white text-xl"></i>
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
