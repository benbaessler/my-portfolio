import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import LandingPage from "@/components/Landing";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="hidden md:inline">
        <Navbar />
      </div>
      <LandingPage />
      <About />
    </main>
  );
}
