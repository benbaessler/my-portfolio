import Image from "next/image";
import MeImage from "@/assets/images/me.png";

const About = () => (
  <div className="page-container flex align-center justify-center">
    <div className="flex flex-wrap justify-center items-center mt-6 max-w-screen-xl">
      <div className="flex flex-col py-5 lg:w-1/2 items-center text-center lg:items-start lg:text-start">
        <h2>About Me</h2>
        <div className="text-lg">
          <p>
            As a German-American software developer based in London, I’ve been
            honing my skills in coding and blockchain since 2019. I’ve developed
            proficiency in languages like Python, Flutter, HTML & CSS, Swift,
            and JavaScript, contributing a unique perspective to projects.
          </p>
          <br />
          <p>
            In 2021, I shifted focus to blockchain, educating myself about
            crypto and web3, and learning Solidity and React. By August, I
            joined a web 3 start-up as a part-time blockchain developer.
          </p>
          <br />
          <p>
            From October 2022 to February 2023, I was a Software Engineer at
            Morpho Labs, gaining experience building decentralized lending
            platform software. Now, I’m open to new opportunities where I can
            apply my passion and skills.
          </p>
          <br />
          <p>
            Aside from software development, I’m driven by entrepreneurship,
            always seeking new challenges and innovations in the web3 space,
            with a keen interest in shaping the future of decentralized
            technology.
          </p>
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
