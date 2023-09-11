import Project from "./Project";
import Job from "./Job";

const ProjectsPage = () => {
  return (
    <div className="page-container flex align-center justify-center">
      <div className="flex flex-wrap justify-between w-full max-w-screen-xl">
        <div className="flex flex-col lg:w-1/2">
          <h2>My Projects</h2>
          <div>
            <Project
              title="Lens Echo"
              link="https://twitter.com/mrbaessler/status/1658887825297637387"
              description="The first Web3 social interface on Discord, built with Lens Protocol. Lens Echo is bridging the gap between Web3 social and Discord, the most widely adopted communication app for online communities."
              tags={["TypeScript", "Express", "Next.js"]}
              githubLink="https://github.com/benbaessler/lens-echo"
            />
            <Project
              title="LendFi"
              description="A platform for lending and borrowing ETH for NFT collateral (ERC-721)."
              tags={["Solidity", "TypeScript", "React"]}
              githubLink="https://github.com/benbaessler/lendfi-interface"
            />
            <p className="text-slate-200">
              <a
                href="https://github.com/benbaessler"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                You can view all of my projects on GitHub
              </a>
              .
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
