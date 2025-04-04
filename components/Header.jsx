import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const links = [
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  // {
  //   name: "Cover Letter",
  //   path: "/cover-letter",
  // },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = ({ pathname }) => {
  const isHomePage = pathname === "/";
  const isCoverLetter = pathname === "/cover-letter";
  return (
    <section className={`select-none font-title`}>
      <header className={`py-8 lg:py-10`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold drop-shadow-sm group">
              <span
                className={`${
                  isHomePage &&
                  "text-accent-hover [text-shadow:_1px_1px_1px_#1C1C22] opacity-85 group-hover:opacity-100"
                } group-hover:text-accent-hover`}
              >
                Paul
              </span>
              <span
                className={`${
                  isHomePage || "text-accent"
                } ml-1 text-2xl group-hover:opacity-30`}
              >
                e
              </span>
            </h1>
          </Link>

          {/* desktop Nav */}
          <div
            className={`hidden lg:flex items-center gap-8 ${
              isCoverLetter &&
              "opacity-50  hover:opacity-100 transition-all duration-300"
            }`}
          >
            <Nav links={links} pathname={pathname} />
            <Link href="/contact">
              <Button>Contact me</Button>
            </Link>
          </div>

          {/* mobile Nav */}
          <div
            className={`lg:hidden ${
              (isHomePage || isCoverLetter) && "text-prim"
            }`}
          >
            <MobileNav pathname={pathname} links={links} />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
