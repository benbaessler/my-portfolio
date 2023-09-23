import Image from "next/image";
import MeImage from "@/assets/images/me.png";

const About = () => (
  <div className="page-container flex align-center justify-center">
    <div className="flex flex-wrap justify-center items-center mt-6 max-w-screen-xl">
      <div className="flex flex-col py-5 lg:w-1/2 items-center text-center lg:items-start lg:text-start">
        <div className="text-lg">
          <p>
            I am a German-American software engineer based in London. I started
            teaching myself how to code in 2019 with a clear goal in mind:
            empowering myself to build my own ideas. I’ve developed proficiency
            in languages like Python, JavaScript/TypeScript, Flutter, HTML &
            CSS, and Solidity while exploring various software engineering
            domains.
          </p>
          <br />
          <p>
            From October 2022 to February 2023, I was a Software Engineer at
            Morpho Labs, working with technologies like DeFi, React, and
            TypeScript while gaining valuable experience working in a fast-paced
            start-up environment.
          </p>
          <br />
          <p>
            In April 2023 I started developing my own open source project on
            Lens Protocol called Lens Echo. Currently, I am continuing to
            research and build in the Web3 social industry as I am very passionate about the
            future of the space.
          </p>
          {/* <br />
          <p>
            Aside from software development, I’m driven by entrepreneurship,
            always seeking new challenges and innovations in the web3 space,
            with a keen interest in shaping the future of decentralized
            technology.
          </p> */}
        </div>
      </div>
      {/* TODO: increase top margin */}
      <div className="flex flex-col lg:w-1/2 justify-center items-center">
        <div className="w-1/2 min-w-sm mt-12">
          <Image
            src={MeImage}
            alt="Ben Baessler"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
