"use client";
import React, { useTransition, useState, ReactNode } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { space_mono } from "../fonts";

interface TabData {
  title: string;
  id: string;
  content: ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-2">
        <div>
          <span className="text-white font-semibold">Languages:</span>
          <span className="text-[#ADB7BE] ml-2">Python, Java, C/C++, JavaScript, TypeScript</span>
        </div>
        <div>
          <span className="text-white font-semibold">Frameworks:</span>
          <span className="text-[#ADB7BE] ml-2">React, Next.js, Node.js, Django, PyTorch, TensorFlow</span>
        </div>
        <div>
          <span className="text-white font-semibold">Infrastructure:</span>
          <span className="text-[#ADB7BE] ml-2">AWS, GCP, Azure, Docker, Kubernetes, Spark, Hadoop</span>
        </div>
        <div>
          <span className="text-white font-semibold">Interests:</span>
          <span className="text-[#ADB7BE] ml-2">AI Agents, Multi-Agent Systems, Machine Learning, RAG</span>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <span className="text-white font-semibold">Virginia Tech</span>
          <span className="text-[#ADB7BE] block">Master of Engineering - Computer Science (2023-2024)</span>
        </li>
        <li>
          <span className="text-white font-semibold">National Yang Ming Chiao Tung University</span>
          <span className="text-[#ADB7BE] block">BS Computer Science & BS Biological Science (2018-2022)</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <span className="text-yellow-400 font-semibold">Software Engineer - TSMC</span>
          <span className="text-[#ADB7BE] block">Developing Web APIs & text-to-SQL services with RAG architecture</span>
        </li>
        <li>
          <span className="text-white font-semibold">Software Developer Intern - Radical AI</span>
          <span className="text-[#ADB7BE] block">Enhanced open-source AI Coach using Node.js and React.js</span>
        </li>
        <li>
          <span className="text-white font-semibold">R&D Intern - SHOPLINE</span>
          <span className="text-[#ADB7BE] block">Improved e-commerce platform quality by 30% through testing</span>
        </li>
        <li>
          <span className="text-white font-semibold">Undergraduate Researcher - NYCU</span>
          <span className="text-[#ADB7BE] block">Developed full-stack web tools for bioinformatics analysis</span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string): void => {
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
          I am a Master of Engineering in Computer Science graduate from Virginia Tech, currently working as a Software Engineer at TSMC. 
          My passion lies in developing innovative AI solutions, particularly in the realms of <span className="highlight">AI Agents</span>, <span className="highlight">LLMs</span>, and <span className="highlight">RAG</span>. 
          With experience spanning full-stack development, AI system design, and cloud deployment, I&apos;ve worked on projects ranging from e-commerce platforms to intelligent AI applications.<br></br>
          My technical expertise includes <span className="highlight">Python</span>, <span className="highlight">Java</span>, and <span className="highlight">JavaScript/TypeScript</span>, with frameworks such as <span className="highlight">ADK</span>, <span className="highlight">React.js</span>, <span className="highlight">Django</span>, and <span className="highlight">PyTorch</span>. 
          I&apos;m actively seeking software-related opportunities to further drive impactful AI solutions and push the boundaries of intelligent systems.
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
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;