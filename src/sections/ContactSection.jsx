import React from "react";
import { SectionTitle } from "../components/SectionTitle";

export const ContactSection = () => {
  return (
    <>
      <section
        id="contacto"
        /* className="px-8 2xl:h-[48rem] md:h-screen border-b border-gray-500/40" */
        className="px-8 border-b border-gray-500/40"
      >
        <SectionTitle title="Contacto" />
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col py-6 gap-6">
            <article className="w-full pb-6">
              <div className="flex justify-between items-center pb-2">
                <h4 className="font-bold text-xl">
                  ¡Envíame un correo electrónico si quieres contactárme!
                </h4>
              </div>
              <div className="flex justify-between items-center pb-2">
                <h5 className="text-xl font-medium pb-2 text-blue-400">
                  b23johannes@gmail.com
                </h5>
                {/* <span>{item.company}</span> */}
              </div>
              {/*    <p className="text-sm font-light md:text-lg leading-7 pb-3 md:pb-6 text-[#a3a3a3]">
                item.description
              </p> */}
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
