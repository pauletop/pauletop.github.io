"use client";
import Header from "./Header";
import { usePathname } from "next/navigation";
import PageTransition from "./PageTransition";
import StairTransition from "./StairTransition";

const Main = ({ children }) => {
  const pathname = usePathname();
  const currentBg =
    (pathname === "/" && "bg-[url(/assets/style/bg_footer.jpg)] text-prim") ||
    pathname === "/cover-letter" ||
    "bg-[url(/assets/style/bg_body.jpg)] text-white";
  return (
    <div className={`${currentBg} min-h-screen w-full`}>
      <Header pathname={pathname} />
      <StairTransition currentBg={currentBg} />
      <PageTransition>{children}</PageTransition>
    </div>
  );
};

export default Main;
