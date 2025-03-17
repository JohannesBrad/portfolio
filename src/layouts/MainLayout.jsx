import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { ContactSection } from "../sections/ContactSection";

export const MainLayout = ({ portfolioData }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection
          data={portfolioData.find((item) => item.section === "hero") || {}}
        />
        <AboutSection
          data={portfolioData.find((item) => item.section === "sobre-mi") || {}}
        />
        <ProjectsSection
          data={
            portfolioData.find((item) => item.section === "proyectos") || {}
          }
        />
        <ExperienceSection
          data={
            portfolioData.find((item) => item.section === "experiencia") || {}
          }
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
