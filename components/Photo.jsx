"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full">
      {/* circle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.36, ease: "easeInOut" },
        }}
        className="flex justify-center items-center"
      >
        {/* images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.36, ease: "easeIn" },
          }}
          className="w-[286px] h-[286px] lg:w-[369px] lg:h-[369px] absolute z-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.5, ease: "easeIn" },
            }}
          >
            <Image
              src="/assets/style/frame-elip.png"
              priority
              quality={100}
              fill
              alt="Home page frame"
              className="object-fit z-1 filter hue-rotate-110 brightness-120 contrast-65 saturate-300"
            />
          </motion.div>
          <Image
            src="/assets/photo1.jpg"
            quality={100}
            fill
            alt=""
            className="object-cover object-center rounded-full w-[99%!important] z-0 mix-blend-multiply"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] z-1"
          fill="transparent"
          viewBox="0 0 412 412"
          xlmns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="206"
            cy="206"
            r="204"
            stroke="#EA5455"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 36 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
              transition: {
                delay: 0.5,
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
