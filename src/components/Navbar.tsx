import type { FC } from "react";
import Image from "next/image";

import TwitterIcon from "@/assets/icons/twitter.png";
import LensIcon from "@/assets/icons/lens.png";
import LinkedInIcon from "@/assets/icons/linkedin.png";
import GitHubIcon from "@/assets/icons/github.png";

const SOCIAL_ICONS = [
  {
    name: "Twitter",
    image: TwitterIcon,
    link: "https://twitter.com/mrbaessler",
  },
  {
    name: "Lens profile",
    image: LensIcon,
    link: "https://lensfrens.xyz/benbaessler.lens",
  },
  {
    name: "LinkedIn",
    image: LinkedInIcon,
    link: "https://linkedin.com/in/benbaessler",
  },
  {
    name: "GitHub",
    image: GitHubIcon,
    link: "https://github.com/benbaessler",
  },
];

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 right-0 py-6 px-6 space-x-5 text-xl flex items-center">
      {SOCIAL_ICONS.map((icon) => (
        <a
          key={icon.name}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={icon.image}
            alt={icon.name}
            className="h-10 w-10 cursor-pointer opacity-90	hover:opacity-100"
          />
        </a>
      ))}
      {/* <div className="hidden md:inline">
        <Button text="View my GitHub" href="https://github.com/benbaessler" />
      </div> */}
    </nav>
  );
};

export default Navbar;
