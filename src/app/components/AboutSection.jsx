"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { space_mono } from "../layout";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>Fullstack Academy of Code</li> */}
        <li>Virginia Tech Computer Science MEng</li>
        <li>National Chiao Tung University CS BS</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Developer Intern - Radical AI</li>
        <li>R&D Intern - SHOPLINE</li>
        <li>Undergraduate Researcher - NYCU</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white sm:pt-[5%] pt-[15%] min-h-screen" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-8 sm:px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:flex flex-col h-full hidden">
          <Image className="self-center pb-4 sm:py-12 w-[300px] sm:w-full" src="/images/about-image.jpg" width={500} height={500} alt="About Me" />
        </div>
        <div className="sm:mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className={`text-4xl font-bold text-white mb-4 ${space_mono.className}`}>About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Computer Science graduate student at Virginia Tech. 
          My passion lies in developing innovative software solutions, particularly in the realms of web development and machine learning. 
          With experience in full-stack development, I&apos;ve worked on projects ranging from e-commerce platforms to AI-driven applications.<br></br>
          My toolkit includes <span className="highlight">Python</span>, <span className="highlight">JavaScript</span>, and <span className="highlight">C++</span>, as well as frameworks such as <span className="highlight">React.js, Node.js</span>, and <span className="highlight">Pytorch</span>. 
          Always eager to learn and tackle new challenges, I&apos;m excited about opportunities to create impactful applications that push the boundaries of technology.
          </p>
          <div className={`flex flex-row justify-start mt-8 ${space_mono.className}`} >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className={`mt-4 ${space_mono.className}`}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
