import Image from "next/image";
import Portait from "@/assets/me.png";


const About = () => (
  <div className="page-container">
    <h2>About Me</h2>
    <div className="flex flex-wrap">
      <div className="md:w-1/2">
        <p>
          As a German-American software developer based in London, I’ve been
          honing my skills in coding and blockchain since 2019. I’ve developed
          proficiency in languages like Python, Flutter, HTML & CSS, Swift, and
          JavaScript, contributing a unique perspective to projects.
        </p>
        <br />
        <p>
          In 2021, I shifted focus to blockchain, educating myself about crypto
          and web3, and learning Solidity and React. By August, I joined a web 3
          start-up as a part-time blockchain developer. From October 2022 to
          February 2023, I was a Software Engineer at Morpho Labs, gaining
          experience building decentralized lending platform software.
        </p>
        <br />
        <p>
          Now, I’m open to new opportunities where I can apply my passion and
          skills. Aside from software development, I’m driven by
          entrepreneurship, always seeking new challenges and innovations in the
          web3 space, with a keen interest in shaping the future of
          decentralized technology.
        </p>
      </div>
      <div className="flex flex-col md:w-1/2 justify-center items-center">
        <div className="w-1/2 max-w-lg min-w-sm">
          <Image
            src={Portait}
            alt="Ben Baessler"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
