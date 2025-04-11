"use client";

import { motion } from "framer-motion";

const Name = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.2, duration: 0.36, ease: "easeIn" },
      }}
      className="h1 relative flex max-w-[165px] justify-center self-center mt-5 mb-1 lg:my-6 cursor-default" //lg:self-auto lg:max-w-[273px]
    >
      <span className="font-title text-green-light absolute text-[80px] lg:text-[110px] ml-3 lg:ml-8 mt-[-20px] font-bold tracking-widest uppercase select-none">
        PAUL
        <span className="lowercase text-[20px] lg:text-[80px] text-prim/20">
          e
        </span>
      </span>
      <span className="font-script text-red relative drop-shadow-md text-[60px] lg:text-[86px] [text-shadow:_2px_2px_1px_white]">
        Minh Phú
      </span>
    </motion.div>
  );
};

export default Name;
