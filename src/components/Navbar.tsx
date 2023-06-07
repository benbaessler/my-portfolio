import type { FC } from "react";
import Link from "next/link";

import Button from "@/components/Button";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 right-0 py-7 px-10 space-x-10 text-xl">
      <Button text="View my GitHub" href="https://github.com/benbaessler" />
    </nav>
  );
};

export default Navbar;
