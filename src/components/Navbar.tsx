import type { FC } from "react";
import Link from "next/link";

import Button from "@/components/Button";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 right-0 py-7 px-10 space-x-10 text-xl">
      {[
        ["Home", "#home"],
        ["About", "#about"],
        ["Work", "#work"],
        ["Contact", "#contact"],
      ].map(([title, href]) => (
        <Link href={href} key={title}>
          <span className="cursor-pointer hover:text-sky-400 transition-colors duration-200">
            {title}
          </span>
        </Link>
      ))}
      <Button text="View my GitHub" href="https://github.com/benbaessler" />
    </nav>
  );
};

export default Navbar;
