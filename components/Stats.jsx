"use client";

import { Stick } from "next/font/google";
import CountUp from "react-countup";
import StickMenu from "./StickMenu";

const StatsData = [
  { num: 100, text: "From Social Networking Sites" },
  { num: 2, text: "From Search Engines" },
  { num: 5, text: "From My Application" },
  { num: 1, text: "From Other Sources" },
];
const Stats = () => {
  return (
    <section className="text-prim/80 pt-4 pb-12 lg:py-0">
      <div className="container mx-auto font-caps flex flex-col items-center">
        {/* <h1 className="text-xl lg:text-3xl font-extrabold text-center lg:text-left">
          <span className="text-yellow">My</span> Statistics
        </h1>
        <StickMenu /> */}
        <div className="flex justify-center flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none lg:h-[83px]">
          {StatsData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-2 items-center justify-center lg:justify-start"
              >
                <h2 className="text-yellow text-4xl lg:text-6xl font-extrabold">
                  <CountUp start={0} end={item.num} duration={5} delay={2} />+
                </h2>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } text-lg lg:text-xl leading-snug text-yellow-dark`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
