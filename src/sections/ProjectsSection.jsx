import React from "react";

const projects = [
  {
    id: 1,
    title: "Marcobre",
    image: "https://picsum.photos/200/300",
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. ",
  },
  {
    id: 2,
    title: "NetworkServices",
    image: "https://picsum.photos/200/300",
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. ",
  },
  {
    id: 3,
    title: "Mannesi",
    image: "https://picsum.photos/200/300",
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. ",
  },
  {
    id: 4,
    title: "BR-Blue",
    image: "https://picsum.photos/200/300",
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. ",
  },
];

export const ProjectsSection = () => {
  return (
    <>
      <section
        id="projectos"
        className="px-8 2xl:h-[48rem] md:h-screen border-b border-gray-500/40"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold flex pt-10 md:py-10">
            Projectos
          </h2>
        </div>

        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col md:flex-row py-6 gap-12">
            {projects.map((item) => {
              return (
                <article
                  key={item.id}
                  className="border border-gray-500/40 rounded-lg p-6"
                >
                  <img src={item.image} alt="" className="bg-cover" />
                  <div className="py-4">
                    <h3 className="text-indigo-500">{item.title}</h3>
                    <p>{item.description}</p>
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
