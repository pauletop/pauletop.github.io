"use client";
import {
  FaHtml5,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import {
  SiPytorch,
  SiTailwindcss,
  SiNextdotjs,
  SiApachespark,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiSpringboot,
  SiFlask,
  SiMongodb,
} from "react-icons/si";

const about = {
  title: "About",
  desc: "Final-year Computer Science student specializing in AI, Data, and Backend Development. Skilled in Python, machine learning, and data analysis, with a proactive mindset and strong collaboration skills. Seeking roles to leverage technical expertise and grow into Junior positions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nguyễn Minh Phú",
    },
    // {
    //   fieldName: "Phone",
    //   fieldValue: "(+84) 336 667 903",
    // },
    // {
    //   fieldName: "Experience",
    //   fieldValue: "No",
    // },
    {
      fieldName: "LinkedIn",
      fieldValue: "nmphu",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnamese",
    },
    {
      fieldName: "Email",
      fieldValue: "phumintsnguyen@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "experience",
  desc: "As an undergraduate, I have worked on projects like real-time vehicle detection using YOLOv10 and a full-stack e-commerce app, honing skills in backend development, data processing, and machine learning. Currently, as a Teaching Assistant at Life Skill Academy, I manage attendance, coordinate classes, and assist students, enhancing my communication and organizational skills.",
  items: [
    {
      company: "TDTU's Division of Skills Training",
      position: "Teaching Assistant",
      duration: "2023 - 2025",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "education",
  desc: "I am currently pursuing a Bachelor of Computer Science at Ton Duc Thang University. My coursework has equipped me with a solid understanding of algorithms, database systems, machine learning, and software engineering principles. Through academic competitions and extracurricular activities, I have expanded my knowledge beyond the classroom, gaining practical insights into real-world applications of technology. With an expected graduation date of the end of 2025, I am committed to lifelong learning and professional excellence.",
  items: [
    // {
    //   institution: "Online Course Platform",
    //   degree: "Full Stack Web Development Bootcamp",
    //   duration: "2025",
    // },
    {
      institution: "Ton Duc Thang University",
      degree: "Computer Science",
      degreeTitle: "Bachelor of Computer Science",
      duration: "2021 - 2025",
      courseHighlights: [
        "Machine Learning & Deep Learning",
        "Data Structures & Algorithms",
        "Database Systems & Analysis",
        "Security & Cloud Computing",
        "Web Development & Business Analysis",
      ],
    },
    {
      institution: "VAIP",
      degree: "AI Programming for Engineering",
      degreeTitle: "Certificate of Completion",
      duration: "Summer 2024",
      courseHighlights: "",
    },
  ],
};
const skills = {
  icon: "/assets/resume/cap.svg",
  title: "skills",
  desc: "I am proficient in a variety of programming languages, tools, and frameworks that enable me to develop efficient and scalable solutions. My expertise spans data processing, machine learning, and other technologies. I am also experienced in collaborative tools for version control and project management.",
  skillList: [
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaDatabase />,
      name: "sql",
    },
    {
      icon: <SiApachespark />,
      name: "spark",
    },
    {
      icon: <SiScikitlearn />,
      name: "scikit-learn",
    },
    {
      icon: <SiPytorch />,
      name: "pytorch",
    },
    {
      icon: <SiOpencv />,
      name: "opencv",
    },
    {
      icon: <SiTensorflow />,
      name: "tensorflow",
    },
    {
      icon: <SiKeras />,
      name: "keras",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiSpringboot />,
      name: "spring boot",
    },
    {
      icon: <SiFlask />,
      name: "flask",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

// Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.

const Resume = () => {
  const [educationHoveredIndex, setEducationHoveredIndex] = useState(null);
  const [showContentAbout, setShowContentAbout] = useState(false);
  var value = "experience"; // default value

  const handler = {
    onClickTabsTrigger: (e) => {
      const target = e.target;
      value = target.id.split("-")[3] ? target.id.split("-")[3] : value;
      if (!value) return;
      setShowContentAbout(false); // reset
      if (value === "about") {
        const fadeoutTimeout = setTimeout(() => {
          const commandElement = document.getElementById("about-me-command");
          if (commandElement) {
            commandElement.classList.add("animate-fade-out");
          }
        }, 1500);

        const timeout = setTimeout(() => {
          setShowContentAbout(true); // show after typing done
        }, 2000); // adjust to match typing speed

        return () => {
          clearTimeout(fadeoutTimeout);
          clearTimeout(timeout);
        };
      }
    },
  };
  const highlight = (children) => (
    <span className="text-blue-light [text-shadow:_2px_2px_1px_blue]">
      {children}
    </span>
  );
  const descStyle =
    "font-gummy text-base max-w-[800px] text-white/80 mx-auto lg:mx-0 tracking-wider";
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.25, duration: 0.35, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col lg:flex-row gap-[60px]"
          >
            <TabsList
              className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6 uppercase select-none"
              onClick={handler.onClickTabsTrigger}
            >
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full text-xl font-script">
              {/* exp */}
              <TabsContent value="experience" className="w-full" id="exp">
                <div className="flex flex-col gap-[30px] text-center lg:text-left font-script">
                  <h3 className="text-5xl font-bold">
                    {highlight("My")}&nbsp;{experience.title}
                  </h3>
                  <p className={descStyle}>{experience.desc}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid gird-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-gradient-to-tr from-[#8b8baa66] from-50% to-[#20202599] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent font-medium">
                              {item.duration}
                            </span>
                            <h3 className="text-3xl max-w-[260px] min-h-[60px] text-center font-script [text-shadow:_2px_2px_1px_#0396FF] lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 font-caps">
                                {item.company}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* education */}
              <TabsContent value="education" className="w-full" id="edu">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-5xl font-bold">
                    {highlight("My")}&nbsp;{education.title}
                  </h3>
                  <p className={descStyle}>{education.desc}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid gird-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        const isHovered = educationHoveredIndex === index;
                        return (
                          <li
                            key={index}
                            onMouseEnter={() => setEducationHoveredIndex(index)}
                            onMouseLeave={() => setEducationHoveredIndex(null)}
                          >
                            {/* tooltip */}
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full bg-gradient-to-tr from-[#8b8baa66] from-50% to-[#20202599] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 group transition-all duration-300">
                                  <span className="text-accent font-medium select-none">
                                    {item.duration}
                                  </span>
                                  <h3 className="text-3xl max-w-[260px] min-h-[60px] text-center font-script [text-shadow:_2px_2px_1px_#0396FF] lg:text-left select-all">
                                    {item.degree}
                                  </h3>
                                  <div className="flex items-center gap-3 min-h-[28px]">
                                    {/* dot */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className="text-white/60 font-caps group-hover:text-accent/68">
                                      <span className="group-hover:max-w-[90%] bottom-0 left-0 group-hover:w-full select-none">
                                        {isHovered && item.courseHighlights ? (
                                          <Typewriter
                                            words={item.courseHighlights}
                                            typeSpeed={40}
                                            deleteSpeed={15}
                                            delaySpeed={800}
                                            loop={false}
                                          />
                                        ) : (
                                          item.institution
                                        )}
                                        {/* {item.institution} */}
                                      </span>
                                    </p>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent
                                  className="font-medium text-sm"
                                  color="accent"
                                  side="bottom"
                                >
                                  <p className="capitalize text-xl [text-shadow:_1px_1px_1px_#0396FF88] font-caps">
                                    {item.degreeTitle}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full h-full" id="skills">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center lg:text-left">
                    <h3 className="text-5xl font-bold">
                      {highlight("My")}&nbsp;{skills.title}
                    </h3>
                    <p className={descStyle}>{skills.desc}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px] gap-[20px]">
                        {skills.skillList.map((skill, index) => {
                          return (
                            <li key={index} className="">
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[150px] bg-gradient-to-tr from-[#8b8baa66] from-25% to-[#23232999] py-6 px-10 rounded-xl flex justify-center items-center group hover:inset-shadow-sm inset-shadow-accent/40 hover:ring ring-blue-light/25">
                                    <div className="text-6xl group-hover:text-[80px] group-hover:text-accent transition-all duration-500 ">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent
                                    className="font-medium text-sm"
                                    color="accent"
                                  >
                                    <p className="capitalize text-2xl [text-shadow:_1px_1px_1px_#0396FF88] font-script">
                                      {skill.name}
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </div>
              </TabsContent>
              {/* about me */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
                id="about"
              >
                <div className="flex flex-col gap-[30px] overflow-hidden">
                  <h3 className="text-5xl font-bold">
                    {about.title}&nbsp;{highlight("me")}
                  </h3>
                  <p className={descStyle}>{about.desc}</p>
                  <div className="relative">
                    {/* display normal by ul */}
                    {showContentAbout && (
                      <ul className="grid gird-cols-1 lg:grid-cols-2 gap-y-6 max-w-[820px] mx-auto lg:mx-0">
                        {about.info.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="flex items-center justify-center xl:justify-start gap-3"
                            >
                              <span className="text-white/60">
                                {item.fieldName}
                              </span>
                              <span className="w-[3px] h-[3px] rounded-full bg-accent/60"></span>
                              <span className="text-3xl font-valentine font-bold [text-shadow:_2px_2px_1px_#00ff9999]">
                                {item.fieldValue}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {/*  */}
                    {showContentAbout || (
                      <div
                        className="bg-black/60 p-6 rounded-xl text-white/80 shadow-md w-full text-left font-pixel"
                        id="about-me-command"
                      >
                        <div className="text-xl flex items-center gap-2">
                          <span className="text-red text-xl">$ </span>
                          <Typewriter
                            words={["cat about_paul"]}
                            typeSpeed={60}
                            delaySpeed={1000}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
      <Footer white={true} />
    </>
  );
};

export default Resume;
