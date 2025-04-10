"use client";

import { motion } from "framer-motion";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/swiper-bundle.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Footer from "@/components/Footer";

const projects = [
  {
    num: "01",
    category: "vision",
    title: "Traffic Navigation System",
    description:
      "Implemented the YOLOv8 architecture to detect vehicles and predict traffic flow in future frames using LSTM. Then, using Dijkstra's algorithm to find the shortest path for user navigation.",
    duration: "Dec 2024 - present",
    stack: [
      {
        name: "python",
      },
      {
        name: "open.cv",
      },
    ],
    image: "/assets/project/thumb02.png",
    live: "",
    github: "https://github.com/NhatGiaHuyT/traffic-redirection-system",
  },
  {
    num: "02",
    category: "data",
    title: "Clustering for Market segmentation & Predicting stock prices",
    description:
      "Clustering data, reducing dimensionality, collaborative filtering, predicting stock prices, and multi-class classification, focusing on processing large-scale datasets",
    duration: "April - May 2024",
    stack: [
      {
        name: "Python",
      },
      {
        name: "PySpark",
      },
    ],
    image: "/assets/project/thumb01.png",
    live: "",
    github: "https://github.com/pauletop/mmds_final_tdtu",
  },
  {
    num: "03",
    category: "vision",
    title: "Vehicle Detection",
    description:
      "Implemented the latest YOLOv10 architecture to detect vehicles in real-time. Achieving high precision acrossdiverse scenarios. Built a user-friendly interface for model deployment.",
    duration: "April - May 2024",
    stack: [
      {
        name: "python",
      },
      {
        name: "open.cv",
      },
    ],
    image: "/assets/project/thumb02.png",
    live: "",
    github: "https://github.com/pauletop/YOLOv10-Vehicle-Detection",
  },
  {
    num: "04",
    category: "web",
    title: "E-commerce website",
    description:
      "Technology e-commerce website. Including two roles: administrator and customer",
    duration: "Nov - Dec 2023",
    stack: [
      {
        name: "Spring",
      },
      {
        name: "Thymeleaf",
      },
      {
        name: "PostgreSQL",
      },
    ],
    image: "/assets/project/thumb03.png",
    live: "",
    github: "https://github.com/pauletop/spring-boot-ecommerce",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get the current slide index
    const currentIndex = swiper.activeIndex;
    //  update the project state with the current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.35, ease: "easeIn" },
      }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex flex-col justify-center pt-8 lg:px-0"
    >
      <div className="container mx-auto font-mono">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 mt-6 lg:mt-0 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline number */}
              <div className="flex items-center justify-between gap-3">
                <div className="text-6xl leading-none font-extrabold text-transparent [-webkit-text-stroke:_1px_var(--color-white)]">
                  {project.num}
                </div>
                <div className="text-white/50 text-lg italic leading-none">
                  {project.duration && project.duration}
                </div>
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}&nbsp;project
              </h2>
              {/* project description */}
              <div className="text-white/60 font-gummy">
                <h3 className="text-white/80 text-xl font-bold">
                  {project.title}
                </h3>
                <p className="">{project.description}</p>
              </div>
              {/* project stack */}
              <ul className="flex gap-4 text-accent text-md font-pixel">
                {project.stack.map((item, index) => (
                  <li key={index} className="capitalize">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-5">
                {/* github */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <BsGithub className="text-white text-2xl group-hover:text-accent group-hover:text-3xl transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        sideOffset={0}
                        className=""
                        color="accent"
                      >
                        <p className="font-script text-lg">GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* live if */}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="disabled"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                          <BsArrowUpRight className="text-white text-2xl group-hover:text-accent group-hover:text-3xl transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          sideOffset={0}
                          className=""
                          color="accent"
                        >
                          <p className="font-script text-lg">Live Demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] relative p-5">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[535px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/8 z-10"></div>
                      <div className="w-full-h-full">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-11 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-prim text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-200"
              />
            </Swiper>
            {/* frame */}
            <div className="absolute inset-x-[-20px] inset-y-[-5px] w-[calc(100%_+_40px)] h-[calc(100%_+_10px)] lg:h-[calc(100%_+_20px_-80px)] z-20 pointer-events-none">
              <Image
                src="/assets/style/frame-safety.png"
                quality={100}
                alt=""
                fill
                className="object-fit filter hue-rotate-200 brightness-250 contrast-180 saturate-300"
              />
            </div>
          </div>
        </div>
        <Footer white className="lg:-mt-20" />
      </div>
    </motion.section>
  );
};

export default Work;
