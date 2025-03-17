import React from "react";
import { SectionTitle } from "../components/SectionTitle";

export const ExperienceSection = ({ data }) => {
  if (!data || !data.content) return null;
  const { content } = data;
  return (
    <>
      <section id="experiencia" className="px-8">
        <SectionTitle title="Experiencia" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col py-6 gap-6">
            {content.itemsList.map((item) => {
              return (
                <article key={item.id} className="w-full pb-6 card-style">
                  <div className="flex justify-between items-center pb-2">
                    <h4 className="font-bold text-xl">{item.company}</h4>
                    <span>{item.period}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <h5 className="text-xl font-medium pb-2 text-blue-400">
                      {item.title}
                    </h5>
                  </div>

                  <p className="text-sm font-light md:text-lg leading-7 pb-3 md:pb-6 text-[#a3a3a3]">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 py-2">
                    {item.skills.map((skill, index) => {
                      return (
                        <span
                          key={skill}
                          className="bg-blue-400/20 px-3 py-1 rounded-full font-light text-sm  "
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
