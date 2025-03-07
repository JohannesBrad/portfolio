import React from "react";

export const AboutSection = () => {
  return (
    <>
      <section
        id="sobre-mi"
        className="px-8 2xl:h-[48rem] md:h-screen border-b border-gray-500/40"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold flex pt-10 md:py-10">
            Sobre mí
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row py-6 gap-12">
            <div className="md:w-3/5">
              <p className="text-lg md:text-xl leading-7 pb-3 md:pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                molestias porro soluta nihil reiciendis. Quaerat voluptatibus,
                nihil error eveniet, odit earum debitis id unde, assumenda eius
                doloremque. Consectetur, asperiores optio.
              </p>
              <p className="text-lg md:text-xl leading-7 pb-3 md:pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                molestias porro soluta nihil reiciendis. Quaerat voluptatibus,
                nihil error eveniet, odit earum debitis id unde, assumenda eius
                doloremque. Consectetur, asperiores optio.
              </p>
              <p className="text-lg md:text-xl leading-7 pb-3 md:pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                molestias porro soluta nihil reiciendis. Quaerat voluptatibus,
                nihil error eveniet, odit earum debitis id unde, assumenda eius
                doloremque. Consectetur, asperiores optio.
              </p>
              <div>
                <p className="text-indigo-500">Mis links</p>
              </div>
            </div>
            <div className="flex flex-col md:w-2/5">
              <h3 className="text-lg font-semibold mb-2">Skill</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "React", "Redux"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-gray-500 text-white rounded-md p-1 px-2 w-fit"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
