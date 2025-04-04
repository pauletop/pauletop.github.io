"use client";

import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import StickMenu from "@/components/StickMenu";

const MobileNav = ({ pathname, links, menuColor }) => {
  const isHomePage = pathname === "/";
  menuColor =
    menuColor && ("text-inherit" || "text-accent hover:text-accent-hover");

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center transition-all">
        <CiMenuFries className={`text-[32px] cursor-pointer ${menuColor}`} />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-16 text-center text-2xl">
          <SheetTitle>
            <Link href="/">
              <h1 className="text-4xl font-semibold drop-shadow-sm group">
                <span
                  className={`${
                    isHomePage &&
                    "text-accent [text-shadow:_1px_1px_1px_#1C1C22]"
                  } group-hover:text-accent-hover group-hover:[text-shadow:_1px_1px_1px_#1C1C22]`}
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
          </SheetTitle>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          <StickMenu />
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent-hover border-b-2 border-accent-hover"
                } text-xl capitalize hover:text-accent hover:border-accent transition-all drop-shadow`}
              >
                {link.name}
              </Link>
            );
          })}
          <StickMenu />
        </nav>
        <footer className="font-caps text-center mt-8 cursor-default select-none">
          <p className="text-sm text-red-dark/80 font-bold">
            <span className="text-xl">&copy;</span> 2025 Paul. All rights
            reserved.
          </p>
        </footer>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
