import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import LandingPage from "@/components/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="hidden md:inline">
        <Navbar />
      </div>
      <LandingPage />
    </main>
  );
}
