import type { FC } from "react";
import Image from "next/image";

import TwitterIcon from "@/assets/icons/twitter.png";
import LensIcon from "@/assets/icons/lens.png";
import LinkedInIcon from "@/assets/icons/linkedin.png";
import Button from "@/components/Button";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 right-0 py-6 px-6 space-x-5 text-xl flex items-center">
      <Image src={TwitterIcon} alt="Twitter" className="h-11 w-11 cursor-pointer opacity-90	hover:opacity-100"/>
      <Image src={LensIcon} alt="Lens profile" className="h-11 w-11 cursor-pointer opacity-90	hover:opacity-100"/>
      <Image src={LinkedInIcon} alt="LinkedIn" className="h-11 w-11 cursor-pointer opacity-90	hover:opacity-100"/>
      <Button text="View my GitHub" href="https://github.com/benbaessler" />
    </nav>
  );
};

export default Navbar;
