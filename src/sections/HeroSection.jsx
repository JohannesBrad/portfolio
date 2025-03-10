import React from "react";
import { Link } from "react-scroll";

export const HeroSection = () => {
  return (
    <>
      <section
        id="inicio"
        className="px-8 h-screen 2xl:h-[48rem]  flex items-center justify-center"
      >
        <div className="max-w-7xl text-center md:text-left">
          <div className="flex flex-col mt-16 items-center md:items-start">
            <h1 className="text-4xl md:text-7xl font-medium bg-gradient-to-b from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
              Hi, I'm Brad.
            </h1>
            {/* <h2 className="text-2xl md:text-3xl font-bold mt-5 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> */}
            <h2 className="text-2xl md:text-3xl font-medium mt-5 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              I'm a Frontend Developer
            </h2>
            <p className="text-lg md:text-2xl font-light mt-5 md:w-1/2 bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              I've spent the last 5 years building and scaling software for some
              pretty cool companies. I also teach people to paint online (incase
              you've got an empty canvas layin' around. Let's connect!
            </p>
            <Link
              to="contacto"
              smooth={true}
              duration={700}
              className=" bg-gradient-to-r from-blue-500 to-blue-700 bg-clip bg-indigo-500 text-white px-6 py-3 md:mt-5 rounded-md w-fit cursor-pointer mt-10"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
