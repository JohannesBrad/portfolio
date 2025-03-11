import React from "react";
import { Link } from "react-scroll";

export const HeroSection = () => {
  return (
    <>
      <section
        id="inicio"
        className="px-8 h-screen 2xl:h-[48rem] flex items-center justify-center  bg-radial-[at_50%_55%] from-[#01398d] via-[#171717] to-[#101010] to-90%"
      >
        <div className="max-w-7xl text-center md:text-left">
          <div className="flex flex-col mt-16 items-center md:items-center">
            <h1 className="text-4xl md:text-7xl font-medium bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Hola, soy Johannes.
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mt-5 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              Frontend Developer
            </h2>
            <p className="text-center text-lg md:text-2xl font-normal mt-5 md:w-1/2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Diseño y desarrollo interfaces web rápidas, accesibles y
              escalables, optimizadas para rendimiento y experiencia de usuario.
              He trabajado en diversos proyectos, creando soluciones digitales
              eficientes para empresas que buscan destacar en la web.
            </p>
            <Link
              to="contacto"
              smooth={true}
              duration={700}
              className=" bg-gradient-to-r from-blue-500 to-blue-700 bg-clip bg-indigo-500 text-white px-6 py-3 md:mt-8 rounded-md w-fit cursor-pointer mt-10"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
