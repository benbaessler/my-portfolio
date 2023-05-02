import type { FC } from "react";
import Link from "next/link";

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
      <a
        href="https://github.com/benbaessler"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-700 px-8 py-4 rounded-full transition-colors duration-200 hover:bg-indigo-800"
      >
        View my GitHub
      </a>
    </nav>
  );
};

export default Navbar;
