import Project from "./Project";
import Job from "./Job";

import Button from "./Button";

const ProjectsPage = () => {
  return (
    <div className="page-container flex align-center justify-center">
      <div className="flex flex-wrap justify-between w-full max-w-screen-xl">
        <div className="flex flex-col lg:w-1/2 pr-10">
          <h2>My Projects</h2>
          <div>
            <Project
              title="Lens Echo"
              description="The first Web3 social interface on Discord, built with Lens Protocol. Lens Echo is bridging the gap between Web3 social and Discord, the most widely adopted communication app for online communities."
              tags={["TypeScript", "Express", "Next.js"]}
              links={[
                {
                  title: "Try it out",
                  href: "https://lensecho.xyz",
                },
                {
                  title: "GitHub",
                  href: "https://github.com/benbaessler/lens-echo",
                },
                {
                  title: "Lens",
                  href: "https://share.lens.xyz/u/lensecho.lens",
                },
                {
                  title: "Twitter",
                  href: "https://twitter.com/lensechoxyz",
                },
              ]}
            />
            <Project
              title="LendFi"
              description="A platform for lending and borrowing ETH for NFT collateral (ERC-721)."
              tags={["Solidity", "TypeScript", "React"]}
              links={[
                {
                  title: "GitHub",
                  href: "https://github.com/benbaessler/lendfi-interface",
                },
              ]}
            />
            <p className="text-slate-200 flex pt-2 pb-12">
              <Button
                text="View all projects on GitHub"
                href="https://github.com/benbaessler"
              />
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <h2>Work Experience</h2>
          <div>
            <Job
              title="Software Engineer"
              companyName="Morpho Labs"
              companySite="https://morpho.org"
              description="Morpho is a peer-to-peer layer built on top of lending pools like Compound or Aave. "
              tags={["DeFi", "TypeScript", "React"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
