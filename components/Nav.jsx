"use client";
import Link from "next/link";

const Nav = ({ pathname, links }) => {
  // remove the item with path "/contact" from the links array
  // const filteredLinks = links.filter((link) => link.path !== "/contact");
  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => {
        return (
          <Link
            href={link.path}
            key={idx}
            className={`${
              link.path === pathname &&
              "text-accent border-b-2 border-accent hover:border-accent-hover"
            } capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
