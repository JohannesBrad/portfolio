import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-3xl font-bold">Johannes B.</h1>
            <nav>
              <ul className="flex gap-8">
                <li>
                  <Link to="home" smooth={true} duration={700}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="sobre-mi" smooth={true} duration={700}>
                    Sobre mi
                  </Link>
                </li>
                <li>
                  <Link to="projectos" smooth={true} duration={700}>
                    Projectos
                  </Link>
                </li>
                <li>
                  <Link to="experiencia" smooth={true} duration={700}>
                    Experiencia
                  </Link>
                </li>
                <li>
                  <Link to="contacto" smooth={true} duration={700}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
