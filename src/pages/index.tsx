import { useRef } from "react";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LandingPage from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const landingRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (aboutRef.current && window.scrollY < aboutRef.current.offsetTop) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (
      projectsRef.current &&
      aboutRef.current &&
      window.scrollY >= aboutRef.current.offsetTop &&
      window.scrollY < projectsRef.current.offsetTop
    ) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const ScrollButton = () => (
    <div
      onClick={handleScroll}
      className="button rounded fixed w-8 h-8 bottom-7 md:inset-x-0 md:mx-auto right-7 md:right-0 transform cursor-pointer flex items-center justify-center"
    >
      <ArrowDownwardIcon fontSize="small" style={{ 
        color: "white" 

      }} />
    </div>
  );

  return (
    <main>
      <Navbar />
      {/* <ScrollButton /> */}
      <div ref={landingRef}>
        <LandingPage />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
