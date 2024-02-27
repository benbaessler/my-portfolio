import type { FC } from "react";
import Image from "next/image";

import TwitterIcon from "@/assets/icons/twitter.png";
import LensIcon from "@/assets/icons/lens.png";
import LinkedInIcon from "@/assets/icons/linkedin.png";
import GitHubIcon from "@/assets/icons/github.png";
import FarcasterIcon from "@/assets/icons/farcaster.png";

const SOCIAL_ICONS = [
  {
    name: "Farcaster",
    image: FarcasterIcon,
    link: "https://warpcast.com/benbaessler",
  },
  {
    name: "Lens profile",
    image: LensIcon,
    link: "https://share.lens.xyz/u/benbassler.lens",
  },
  {
    name: "Twitter",
    image: TwitterIcon,
    link: "https://twitter.com/mrbaessler",
  },
  {
    name: "LinkedIn",
    image: LinkedInIcon,
    link: "https://linkedin.com/in/benbassler",
  },
  {
    name: "GitHub",
    image: GitHubIcon,
    link: "https://github.com/benbaessler",
  },
];

const Navbar: FC = () => {
  return (
    <nav className="fixed backdrop-blur-md rounded-full top-3 right-3 p-4 space-x-4 text-xl flex items-center">
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
            className="h-10 w-10 cursor-pointer opacity-70	hover:opacity-100"
          />
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
