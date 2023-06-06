import { useRef } from "react";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import ScrollButton from "@/components/ScrollButton";
import LandingPage from "@/components/Landing";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const landingRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (aboutRef.current && window.scrollY < aboutRef.current.offsetTop) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main>
      <div className="hidden md:inline">
        <Navbar />
      </div>
      <div ref={landingRef}>
        <LandingPage />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <ScrollButton handleScroll={handleScroll} />
    </main>
  );
}
