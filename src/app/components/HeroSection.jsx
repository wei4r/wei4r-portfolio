"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { space_mono } from "../layout";
import ContactLink from "./ContactLink";

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="lg:py-12 px-4 xl:px-12 xl:mb-16">
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
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text lg:text-7xl bg-gradient-to-r from-primary-500 to-yellow-500">
              Hello I&apos;m{" "}&nbsp;
            </span>
            {windowWidth > 1024 ? <br /> : null}
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
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am now a Master&apos;s student @ Virginia Tech studying Computer Science and I am proficient in various programming languages and technologies.
          </p>
          <div className="flex justify-center sm:justify-start mb-3 flex-wrap">
            <a
              href="ShihHungWei.pdf"
              download="ShihHungWei.pdf"
              className="mt-2 inline-flex px-[2px] py-[2px] sm:w-fit rounded-full font-bold mr-4 bg-gradient-to-br from-primary-500 to-yellow-500 hover:bg-slate-900 text-white"
            >
              <span className="block bg-[#0f172a] hover:bg-gradient-to-br hover:from-primary-500 hover:to-yellow-500 rounded-full px-7 py-2">
                Resume
              </span>
            </a>
            <ContactLink/>
            <Link 
              href="https://www.linkedin.com/in/shihhung-wei"
              className="mt-2 inline-flex items-center sm:w-fit font-bold mr-4 py-2 px-4 border-2 rounded-full border-blue-600 text-gray-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <svg className="h-4 w-4 mr-2 pb-4px" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.3 480H7.4V180.9h92.9V480zm-46.1-317c-29.8 0-54-24.3-54-54.2s24.2-54.2 54-54.2 54 24.3 54 54.2-24.2 54.2-54 54.2zM447.1 480h-92.8V312c0-40-1.5-91.5-55.7-91.5-55.7 0-64.2 43.6-64.2 88.6V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"/></svg>
						  <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/wei4r"
              className="mt-2 inline-flex items-center sm:w-fit font-bold mr-4 py-2 px-4 border-2 rounded-full border-blue-600 text-gray-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
            >
  						<svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.254.793-.567 0-.28-.01-1.022-.015-2.007-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.18.688.795.57C20.565 21.795 24 17.303 24 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
            </Link>
            <Link
              href="https://type.wei4r.com"
              className="mt-2 border-yellow-400 text-gray-300 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 inline-flex items-center sm:w-fit font-bold mr-4 py-2 px-4 border-2 rounded-full transition duration-300"
            >
              <span>wei4r.type</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
