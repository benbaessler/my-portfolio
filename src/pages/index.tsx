import { useRef } from "react";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import ScrollButton from "@/components/ScrollButton";
import LandingPage from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";

import Footer from "@/components/Footer";

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

  return (
    <main>
      <Navbar />
      <ScrollButton handleScroll={handleScroll} />
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
