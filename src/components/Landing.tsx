import Image from "next/image";

import Button from "@/components/Button";

import ProfilePicture from "@/assets/pp.png";

const LandingPage = () => {
  return (
    <div className="page-container flex align-center justify-center">
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex flex-col px-10 py-5 md:w-1/2 items-center text-center md:items-start md:text-start">
          <div className="text-5xl md:text-6xl">
            <h1 className="mb-3">{"Hi, I'm"}</h1>
            <h1 className="font-semibold">Ben Baessler</h1>
          </div>
          <h2 className="text-2xl font-medium text-sky-400 my-6">
            Software Engineer • Researcher
          </h2>
          <p className="text-xl">
            I am a full-stack blockchain developer working on shaping the next
            generation of the web.
          </p>
          <div className="mt-9 text-xl">
            <Button text="Get in touch" href="mailto:hello@benbaessler.com" />
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 justify-center items-center">
          <div className="w-4/6 max-w-lg min-w-sm">
            <Image
              src={ProfilePicture}
              alt="Ben Baessler"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
