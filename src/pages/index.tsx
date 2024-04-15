import { useRef } from "react";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LandingPage from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

const Home = () => (
  <main>
    <SpeedInsights />
    <Analytics mode="production" />
    <Navbar />
    <LandingPage />
    <About />
    <Projects />
  </main>
);

export default Home;
