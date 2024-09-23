"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { space_mono } from "../layout";
import ContactLink from "./ContactLink";
import SocialButton from "./SocialButton";

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="lg:py-8 px-4 xl:px-8 xl:mb-16">
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-transparent sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="object-contain rounded-full"
              fill
              sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 380px"
              priority={true}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start flex-col"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold pl-6">
            <span className="text-transparent bg-clip-text lg:text-7xl bg-gradient-to-r from-primary-500 to-yellow-500">
              Hello I&apos;m{" "}&nbsp;
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                "Hank Wei",
                1000,
                "Software Engineer",
                1000,
                "wei4r",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={space_mono.className}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl px-8">
            I am now a Master&apos;s student @ Virginia Tech studying Computer Science and I am proficient in various programming languages and technologies.
          </p>
          <div className="flex justify-center sm:justify-start mb-3 flex-wrap gap-4">
            <div className="flex justify-center sm:justify-start mb-3 flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="ShihHungWei.pdf"
              download="ShihHungWei.pdf"
              className="mt-2 inline-flex px-[2px] py-[2px] sm:w-fit rounded-full font-bold bg-gradient-to-br from-primary-500 to-yellow-500 hover:bg-slate-900 text-white"
            >
              <span className="flex items-center justify-center bg-pageBg hover:bg-gradient-to-br hover:from-primary-500 hover:to-yellow-500 rounded-full px-7 py-2">
                Resume
              </span>
            </a>
            <ContactLink/>
            </div>
            <SocialButton
              href="https://www.linkedin.com/in/shihhung-wei"
              name="LinkedIn"
              color="blue-600"
              icon={
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.3 480H7.4V180.9h92.9V480zm-46.1-317c-29.8 0-54-24.3-54-54.2s24.2-54.2 54-54.2 54 24.3 54 54.2-24.2 54.2-54 54.2zM447.1 480h-92.8V312c0-40-1.5-91.5-55.7-91.5-55.7 0-64.2 43.6-64.2 88.6V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"/>
                </svg>
              }
            />
            <SocialButton
              href="https://github.com/wei4r"
              name="GitHub"
              color="blue-600"
              icon={
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.254.793-.567 0-.28-.01-1.022-.015-2.007-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.18.688.795.57C20.565 21.795 24 17.303 24 12c0-6.63-5.37-12-12-12z"/></svg>
              }
            />
            <SocialButton
              href="https://type.wei4r.com"
              name="wei4r.type"
              color="blue-600"
              icon={
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-280v-400 400Z"/></svg>
              }
            />
            <SocialButton
              href="https://www.instagram.com/wei4r"
              name="Instagram"
              color="pink-600"
              icon={
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              }
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
