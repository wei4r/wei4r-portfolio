"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ErrorBoundary from "./ErrorBoundary";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "CoverCraft AI",
    description: "Multi-agent cover letter generator that analyzes resumes, researches jobs/companies, and creates personalized cover letters using Google's Agent Development Kit",
    image: "/images/projects/1.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/wei4r/covercraft-ai",
    previewUrl: "https://github.com/wei4r/covercraft-ai",
  },
  {
    id: 2,
    title: "wei4r.type",
    description: "Minimalistic Typing Game built with Next.js",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/wei4r/wei4r.type",
    previewUrl: "https://type.wei4r.com",
  },
  {
    id: 3,
    title: "BookShelf",
    description: "Innovative online platform designed to enhance the book purchasing experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/wei4r/BookShelf",
    previewUrl: "https://github.com/wei4r/BookShelf",
  },
  {
    id: 4,
    title: "FDA Drug Approval Prediction",
    description: "This project utilizes machine learning to predict whether compounds will be approved by the FDA as drugs",
    image: "/images/projects/4.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/wei4r/FDA-Approval-Prediction",
    previewUrl: "https://github.com/wei4r/FDA-Approval-Prediction",
  },
  {
    id: 5,
    title: "Spaceship Game",
    description: "Simple Spaceship Game built with Vanilla JS",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/wei4r/Spaceship-Game",
    previewUrl: "https://github.com/wei4r/Spaceship-Game",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string): void => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <ErrorBoundary>
      <section id="projects" className="scroll-mt-16">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="AI"
            isSelected={tag === "AI"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ErrorBoundary>
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </ErrorBoundary>
            </motion.li>
          ))}
        </ul>
      </section>
    </ErrorBoundary>
  );
};

export default ProjectsSection;