"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { cn } from "@/lib/utils";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 336 *** 903",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "phumintsnguyen@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "District 7, Ho Chi Minh City, Vietnam",
  },
];

const messageTemplates = [
  "Hi, I'm experiencing some issues with my pathfinding; it's affecting my emotions. Can you help me?",
  "Hi Paul,\nI am [yourname], a [role] at [company]. I am interested in your services and would like to discuss more about it.",
  "Hello Phú, I am interested in your application. I would like to know more about your expertise, can we schedule a call?",
];

const Contact = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [randomTemplate, setRandomTemplate] = useState(
    "Type your message here..."
  );

  const randomTemplateFunc = () => {
    const randomIndex = Math.floor(Math.random() * messageTemplates.length);
    setRandomTemplate(messageTemplates[randomIndex]);
  };
  var accum_count = 0;
  useEffect(() => {
    const timeout = setTimeout(() => {
      randomTemplateFunc();
      accum_count = 0;
    }, 10000);

    return () => clearTimeout(timeout); // Cleanup nếu component unmount
  }, []);

  const handleFocusTextArea = (e) => {
    setIsEditing(true);
    e.target.value = randomTemplate;
  };
  const typeDeleteHandler = () => {
    accum_count += 1;

    if (accum_count == randomTemplate.length) {
      randomTemplateFunc();
      accum_count = 0;
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert(
      "This function is not available now, please send an email instead. Sorry for this in-convinience."
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.35, ease: "easeIn" },
      }}
      exit={{ opacity: 0 }}
      className="py-3"
    >
      <div className="container mx-auto font- font-valentine">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* form */}
          <div className="flex-1 lg:w-[54%] order-2 lg:order-none">
            <form
              className="flex flex-col gap-6 p-8 bg-gradient-to-bl from-30% from-[#27272cbb] rounded-xl"
              onSubmit={formSubmitHandler}
            >
              {/* header */}
              <h3 className="text-4xl text-bold font-script font-semibold">
                Let's work{" "}
                <span className="text-accent [text-shadow:_2px_2px_1px_#00b900]">
                  together
                </span>
                <div className="text-2xl font-fancy text-white/80 tracking-wider">
                  I would love to hear from you
                </div>
              </h3>
              {/* form fields */}
              <div className="text-2xl grid grid-cols-1 md:grid-cols-2 gap-6 font-waterfall">
                <Input type="name" placeholder="How can I call you?" required />
                <Input type="email" placeholder="Your email address" required />
                <Input type="phone" placeholder="Your phone number" required />
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-prim/80 text-white/80 font-valentine text-xl">
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* textarea */}
              <div className="relative">
                {!isEditing && (
                  <div
                    className="absolute top-3 left-4 text-white/60 text-2xl pointer-events-none"
                    onClick={() => setIsEditing(true)}
                  >
                    <Typewriter
                      words={[randomTemplate]}
                      typeSpeed={50}
                      deleteSpeed={30}
                      delaySpeed={8000}
                      loop={false}
                      onDelete={typeDeleteHandler}
                      cursorColor="#00ff99"
                      cursorBlinking
                      cursor
                    />
                  </div>
                )}
                <Textarea
                  className={cn(
                    "h-[200px] text-2xl font-valentine",
                    !isEditing && "text-transparent"
                  )}
                  // placeholder="Type your message here"
                  // placeholder={isEditing ? "" : randomTemplate}
                  onFocus={handleFocusTextArea}
                  onBlur={() => setIsEditing(false)}
                ></Textarea>
              </div>
              {/* btn */}
              <div className="flex justify-start lg:justify-end">
                <Button
                  size="md"
                  className="w-40 text-2xl hover:text-3xl font-bold active:[text-shadow:_1px_1px_0px_white] transition-all duration-200"
                >
                  Send message
                </Button>
              </div>
            </form>
          </div>
          {/* info */}
          <div className=" flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c88] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 font-script font-extrabold text-xl">
                        {item.title}
                      </p>
                      <h3 className="text-2xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer white />
    </motion.section>
  );
};

export default Contact;
