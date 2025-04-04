"use client";
import Footer from "@/components/Footer";
import Name from "@/components/Name";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  // font-[family-name:var(--font-waterfall)], font-[Waterfall]
  const downloadCV = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1c8IIbVaEKnWSx6Jomh4uXXbyLgcZMmIK",
      "_blank"
    );
  };
  return (
    <div>
      {/* Banner */}
      <section className="">
        {/* tree */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.5, ease: "easeIn" },
          }}
          className="absolute h-[300px] top-100 lg:top-30 left-[-2em] filter hue-rotate-304 brightness-89 contrast-125 saturate-186"
        >
          <img
            src="/assets/style/tree.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </motion.div>
        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
          }}
          className="container mx-auto h-full"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-6 lg:pb-8 relative">
            <div className="text-center lg:text-left order-2 lg:order-none font-title">
              <span className="text-xl uppercase">
                Computer Science Student
              </span>
              <h1 className="h2 text-nowrap flex flex-col">
                <span className="hidden">Hello there, I'm</span>
                <span className="">
                  <span className="text-red-500">H</span>
                  <span className="text-cyan-400">e</span>
                  <span className="text-fuchsia-500">l</span>
                  <span className="text-green-400">l</span>
                  <span className="text-orange-500">o</span>
                  <span>&nbsp;</span>
                  <span className="text-pink-500">t</span>
                  <span className="text-blue-400">h</span>
                  <span className="text-yellow-500">e</span>
                  <span className="text-emerald-500">r</span>
                  <span className="text-lime-500">e</span>
                  <span className="text-zinc-500">,</span>
                  <span>&nbsp;</span>
                  <span className="text-amber-500">I</span>
                  <span className="text-teal-400">'</span>
                  <span className="text-emerald-500">m</span>
                </span>
                <Name />
              </h1>
              <p className="font-valentine font-bold min-h-[128px] xl:min-h-[96px] lg:max-w-[95%] max-w-[500px] text-2xl leading-8 text-prim/90 mb-9 text-justify">
                I am pursuing an internship that enhances enterprise value and
                personal growth. My future aim is to secure a junior{" "}
                <span className="text-red-dark font-bold">
                  <Typewriter
                    words={[
                      "AI Engineer",
                      "ML Engineer",
                      "Data Scientist",
                      "Data Engineer",
                      "Data Analyst",
                      "Python Developer",
                      "Project Manager",
                      "Web Developer",
                      "Consultant",
                      "QA Engineer",
                      "Business Analyst",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    cursorColor="#A12D2E"
                    typeSpeed={60}
                    deleteSpeed={30}
                    delaySpeed={5000}
                  />
                </span>{" "}
                position within two years and advance to higher-level roles.
              </p>
              {/* btn & socials */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* download btn */}
                <Button
                  variant="outline-blue"
                  size="lg"
                  className="flex items-center"
                  onClick={downloadCV}
                >
                  <span>Download my CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 lg:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="h-9 w-9 border border-outline rounded-full flex justify-center items-center text-outline text-base hover:bg-red hover:border-red-dark hover:text-white hover:transition-all duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="lg:px-6 order-1 lg:order-none mt-3 lg:mt-[-1rem] mb-8 lg:mb-0">
              <Photo />
            </div>
          </div>
        </motion.div>
        {/* <Stats /> */}
      </section>
      <Footer className="lg:mt-20" />
    </div>
  );
}
