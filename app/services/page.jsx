"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import StickMenu from "@/components/StickMenu";

const services = [
  {
    num: "01",
    title: "AI & ML",
    desc: "Developing cutting-edge artificial intelligence and machine learning solutions to automate processes and enhance efficiency.",
    href: "#ai-ml",
  },
  {
    num: "02",
    title: "Data Science",
    desc: "Leveraging advanced statistical methods and machine learning to uncover patterns and predict future trends.",
    href: "#data-science",
  },
  {
    num: "03",
    title: "Data Engineering",
    desc: "Building robust data pipelines and architectures to ensure seamless data flow and accessibility.",
    href: "#data-engineering",
  },
  {
    num: "04",
    title: "Solutions Advisory",
    desc: "Providing expert guidance to help businesses identify and implement effective solutions tailored to their unique challenges. Besides, I also provide emotional support to help you overcome your challenges.",
    href: "#solutions-advisory",
  },
  {
    num: "05",
    title: "Web Development",
    desc: "Creating dynamic and responsive web applications that enhance user experience and drive engagement.",
    href: "#Web",
  },
  {
    num: "06",
    title: "Project Management & Coordination",
    desc: "Overseeing projects from inception to completion, ensuring timely delivery and alignment with business objectives.",
    href: "#project-management",
  },
  {
    num: "07",
    title: "Teaching Assistant",
    desc: "Providing personalized support and guidance to help students excel in their studies and achieve their academic goals.",
    href: "#teaching-assistant",
  },
  {
    num: "08",
    title: "Entertainment",
    desc: "Creating engaging and innovative entertainment experiences powered by technology and creativity.",
    href: "#entertainment",
  },
];
const Services = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.5, ease: "easeIn" },
          }}
          className="text-center mb-10"
        >
          <div className="text-xl lg:text-2xl hidden sm:block mt-10">
            <h2 className="text-4xl font-bold mt-3 flex items-center justify-center gap-3">
              <span className="text-accent text-5xl">Paul's</span> Services
            </h2>
            <p className="mt-4 font-caps">
              I offer a range of services to help businesses leverage data and
              technology for growth and innovation.
            </p>
            <div className="my-6">
              <StickMenu width={"100%"} />
            </div>
          </div>
          {/* Service List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.5, duration: 0.5, ease: "easeIn" },
            }}
            className="font-mono grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 border-b border-white/20 cursor-default group"
                >
                  {/* top  */}
                  <div className="w-full flex justify-between items-center select-none">
                    <div className="text-5xl font-extrabold text-soutline text-transparent transition-all duration-300">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[68px] h-[68px] rounded-full bg-white/90 group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-prim text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent tracking-normal duration-300">
                    {service.title}
                  </h2>
                  <p className="opacity-80">{service.desc}</p>
                  <div></div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <Footer white />
    </section>
  );
};

export default Services;
