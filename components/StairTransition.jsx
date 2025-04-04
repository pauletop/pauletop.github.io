"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = ({ currentBg }) => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-10 flex">
            <Stairs />
          </div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 0.15, duration: 0.5, ease: "easeInOut" },
            }}
            className={`${
              currentBg || "bg-white"
            } h-screen w-screen fixed top-0 pointer-events-none`}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
