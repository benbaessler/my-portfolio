import Image from "next/image";
import Button from "@/components/Button";
import ProfilePicture from "@/assets/images/pp.png";

const LandingPage = () => (
  <div className="page-container min-h-screen flex align-center justify-center relative">
    <div className="flex flex-wrap justify-center items-center mt-6 max-w-screen-xl">
      <div className="flex flex-col py-5 lg:w-1/2 items-center text-center lg:items-start lg:text-start">
        <div className="text-4xl md:text-6xl">
          <h1 className="mb-3">{"Hi, I'm"}</h1>
          <h1 className="font-semibold">Ben Bassler</h1>
        </div>
        <h2 className="text-xl md:text-2xl font-medium text-sky-400 my-6">
          Software Engineer
        </h2>
        <p className="text-l md:text-xl">
          A full-stack blockchain developer working on shaping the next
          generation of the web.
        </p>
        <div className="mt-9 text-xl">
          <Button text="Contact me" href="mailto:hello@benbassler.com" />
        </div>
      </div>
      {/* TODO: increase top margin */}
      <div className="flex flex-col lg:w-1/2 justify-end items-center">
        <div className="w-1/2 min-w-sm">
          <Image
            src={ProfilePicture}
            alt="Ben Baessler"
            className="rounded-lg w-full self-end"
          />
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
