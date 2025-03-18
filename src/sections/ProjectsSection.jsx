import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionTitle } from "../components/SectionTitle";

export const ProjectsSection = ({ data }) => {
  if (!data || !data.content) return null;
  const { content } = data;
  return (
    <>
      <section id="proyectos" className="px-8 2xl:h-[48rem]">
        <SectionTitle title="Proyectos" />

        <div className="max-w-7xl mx-auto ">
          {/* <div className="flex flex-col md:flex-row py-6 gap-8 flex-wrap justify-start"> */}
          <div className="flex flex-col md:flex-row py-6 gap-8 justify-start">
            {content.itemsList.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-1/2 flex p-6 card-style hover:border-[#6d6d6d]"
                >
                  <article
                  /* className="w-full md:w-[25rem] flex p-6 card-style" */
                  >
                    <div className="py-4">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-2xl pb-6 text-white"
                      />
                      <h3 className="text-lg font-medium md:text-xl leading-7 mb-1 text-blue-500">
                        {item.title}
                      </h3>
                      <div className="flex gap-2 py-1">
                        <span className="text-blue-300 py-1 rounded-full font-light text-sm ">
                          {" "}
                          {item.technology.join(" - ")}
                        </span>
                      </div>
                      <p className="text-sm font-light md:text-lg leading-7 pb-3 md:pt-2 text-[#a3a3a3]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
