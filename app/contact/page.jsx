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
import emailjs from "@emailjs/browser";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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

const services = [
  "AI & ML",
  "Data Science",
  "Data Engineering",
  "Solutions Advisory",
  "Web Development",
  "Project Management & Coordination",
  "Teaching Assistant",
  "Entertainment",
];

const survey = [
  "Social Networking Sites",
  "Search Engines",
  "My Application",
  "Other Sources",
];

const messageTemplates = [
  "Hi, I am facing issues with my pathfinding that are impacting my emotional well-being. I need assistance to resolve this.",
  "Hi Paul,\nI am [yourname], a [role] at [company]. I am interested in your services and would like to discuss it further.",
  "Hello Phú, I am interested in your application and would like to know more about your expertise. Can we schedule a call?",
  "Hi there, I'm impressed with your work and would love to explore a collaboration. May we connect further?",
  "Xin chào, mình muốn gửi một chút phản hồi về [website/dự án của bạn]. Mong bạn tiếp tục phát triển!",
  "Hi, I'm [Your Name]. I'm reaching out to [purpose]. Looking forward to hearing from you!",
  "Cảm ơn bạn đã chia sẻ thông tin hữu ích. Mong có cơ hội kết nối với bạn trong tương lai!",
  "Chào Phú, mình là [tên của bạn]. Mình thấy hứng thú với [dự án]. Bạn có thể chia sẻ và thảo luận thêm không?",
  "Dear Paul,\nI’m reaching out on behalf of [company/organization name]. We’ve been impressed with your portfolio and the quality of your past work. We are currently seeking a collaborator for a project in [project name/related field], and believe you could be a great fit.\nIf this sounds interesting to you, we’d be happy to connect and discuss the opportunity in more detail.\nKind regards,\n[Your Name]",
  "Xin chào,\nTôi là [Tên bạn], hiện đang làm việc trong lĩnh vực [lĩnh vực chuyên môn]. Tôi rất quan tâm đến những dự án mà bạn đang thực hiện và tin rằng chúng ta có thể cùng nhau tạo ra giá trị.\nNếu bạn quan tâm đến việc hợp tác hoặc muốn thảo luận thêm, tôi rất mong được kết nối và trao đổi cụ thể hơn.\nCảm ơn bạn đã dành thời gian đọc tin nhắn này. Mong sớm nhận được phản hồi từ bạn.",
];

const mode = "browser"; // "node" | "browser"

const Contact = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [randomTemplate, setRandomTemplate] = useState(
    "Type your message here..."
  );
  const [formAlertMessage, setFormAlertMessage] = useState({
    status: false,
    message: "",
    description: "",
  });

  var accum_count = 0;
  const randomTemplateFunc = () => {
    const randomIndex = Math.floor(Math.random() * messageTemplates.length);
    setRandomTemplate(messageTemplates[randomIndex]);

    accum_count = 0;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      randomTemplateFunc();
    }, 10000);

    return () => clearTimeout(timeout); // Cleanup nếu component unmount
  }, []);

  const formHandler = {
    onFocusTextArea: (e) => {
      setIsEditing(true);
      e.target.value = randomTemplate.length === 25 ? "" : randomTemplate;
    },
    onBlurTextArea: (e) => {
      if (e.target.value.length === 0) {
        setIsEditing(false);
        randomTemplateFunc();
      }
    },
    typewriterOnDelete: () => {
      accum_count += 1;

      if (accum_count === randomTemplate.length) {
        randomTemplateFunc();
      }
    },
    onSubmitForm: async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const choice = formData.get("choice");
      const message = formData.get("message");
      const data = {
        title: "New message from portfolio",
        time: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
        }),
        name,
        email,
        phone,
        choice,
        message,
      };
      // send email using emailjs
      if (mode === "browser") {
        try {
          const result = await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            data,
            {
              publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            }
          );
          console.log("Email sent successfully!", result);
          setFormAlertMessage({
            status: 200,
            message: "Email sent successfully!",
            description:
              "I will get back to you as soon as possible.\nThank you for your message.",
          });
        } catch (error) {
          console.error("Error sending email:", error);
          setFormAlertMessage({
            status: 500,
            message: "Error sending email!",
            description:
              "I apologize for the inconvenience.\nPlease send via another service.",
          });
          return;
        }
        return;
      }

      // get from environment variable
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.status === 200) {
        setFormAlertMessage({
          status: 200,
          message: "Email sent successfully! I will get back to you soon.",
        });
      } else {
        setFormAlertMessage({
          status: res.status,
          message:
            res.message +
            "Please send via email!\nI apologize for the inconvenience.",
        });
      }
    },
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
              onSubmit={formHandler.onSubmitForm}
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
                <Input
                  type="name"
                  name="name"
                  placeholder="How can I call you?"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
                <Select name="choice" required className="text-xl">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="What brings you here?" />
                  </SelectTrigger>
                  <SelectContent className="bg-prim/80 text-white/80 font-valentine max-h-[300px] overflow-y-auto">
                    <SelectGroup>
                      <SelectLabel>You are from...</SelectLabel>
                      {survey.map((choice, index) => {
                        return (
                          <SelectItem key={index} value={choice}>
                            {choice}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* textarea */}
              <div className="relative">
                {!isEditing && (
                  <div
                    className="absolute top-3 left-4 text-white/60 text-2xl pointer-events-none w-[calc(inherit_-_16px)]"
                    onClick={() => setIsEditing(true)}
                  >
                    <Typewriter
                      words={[randomTemplate]}
                      typeSpeed={50}
                      deleteSpeed={30}
                      delaySpeed={8000}
                      loop={false}
                      onDelete={formHandler.typewriterOnDelete}
                      onType={(text, count) => {
                        if (text.length === randomTemplate.length) {
                          setIsEditing(false);
                        }
                      }}
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
                  name="message"
                  onFocus={formHandler.onFocusTextArea}
                  onBlur={formHandler.onBlurTextArea}
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
      {/* alert dialog */}
      <AlertDialog
        open={formAlertMessage.status}
        onOpenChange={setFormAlertMessage}
      >
        <AlertDialogContent className="bg-prim/80 text-white/80 font-valentine">
          <AlertDialogHeader>
            <AlertDialogTitle
              className={cn(
                "text-2xl font-bold",
                (formAlertMessage.status === 500 && "text-red-500") ||
                  "text-green-500"
              )}
            >
              {formAlertMessage.message}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-xl">
              {formAlertMessage.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-bold text-xl rounded-lg active:[text-shadow:_1px_1px_0px_white]">
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer white />
    </motion.section>
  );
};

export default Contact;
