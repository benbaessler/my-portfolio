import Image from "next/image";
import MeImage from "@/assets/images/me.png";

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

const About = () => {
  // Birthday: February 1st, 2004
  const birthDate = new Date(2004, 1, 1); // Month is 0-indexed, so 1 = February
  const currentAge = calculateAge(birthDate);

  return (
    <div className="page-container flex align-center justify-center">
      <div className="flex flex-wrap justify-center items-center mt-6 max-w-screen-xl">
        <div className="flex flex-col py-5 lg:w-1/2 items-center text-center lg:items-start lg:text-start">
          <div className="text-md md:text-lg">
            <p>
              I am a {currentAge}-year-old German-American software engineer based in Germany, with a passion for building ideas from the ground up. I began teaching myself to code in 2019, driven by the desire to create and innovate. Over time, I have honed my skills in languages like Python, JavaScript/TypeScript, Flutter, HTML/CSS, and Solidity, while exploring diverse areas of software engineering.
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
              I am particularly passionate about onchain social applications and have built various projects on platforms like Lens Protocol and Farcaster.
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
};

export default About;
