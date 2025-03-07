import React from "react";

const experiencia = [
  {
    id: 1,
    title: "Marcobre",
    subtitle: "A real-time coaching app for students learning to paint.",
    period: "2023 - 2024",
    company: "Atlanta",
    image: "https://picsum.photos/200/300",
    description:
      "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    id: 2,
    title: "NetworkServices",
    subtitle: "A real-time coaching app for students learning to paint.",
    period: "2023 - 2024",
    company: "Atlanta",
    image: "https://picsum.photos/200/300",
    description:
      "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
  },
  {
    id: 3,
    title: "Mannesi",
    subtitle: "A real-time coaching app for students learning to paint.",
    period: "2023 - 2024",
    company: "Atlanta",
    image: "https://picsum.photos/200/300",
    description:
      "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
  },
  {
    id: 4,
    title: "BR-Blue",
    subtitle: "A real-time coaching app for students learning to paint.",
    period: "2023 - 2024",
    company: "Atlanta",
    image: "https://picsum.photos/200/300",
    description:
      "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
  },
];

/* const dataExperiencia = experiencia.find((item) => item.id === 1);
const dataSkills = dataExperiencia.skills || []; */

export const ExperienceSection = () => {
  return (
    <>
      <section
        id="experiencia"
        className="px-8 2xl:h-[48rem] md:h-screen border-b border-gray-500/40"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold flex pt-10 md:py-10">
            Experiencia
          </h2>
        </div>

        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col py-6 gap-12">
            {experiencia.map((item) => {
              return (
                <article
                  key={item.id}
                  className="w-full pb-6 border-b border-gray-500/40"
                >
                  <div className="flex justify-between items-center pb-2">
                    <h4>{item.title}</h4>
                    <span>{item.period}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <h5 className="text-xl  text-indigo-400">
                      {item.subtitle}
                    </h5>
                    <span>{item.company}</span>
                  </div>

                  <p className="leading-8">{item.description}</p>
                  {/*     <div>
                    {dataSkills.map((skill) => {
                      <span
                        key={skill}
                        className="bg-gray-500 text-white rounded-md p-1 px-2 w-fit"
                      >
                        ddd
                        {skill}
                      </span>;
                    })}
                  </div> */}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
