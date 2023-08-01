import Project from "./Project";
import LensEchoLogo from "@/assets/logos/lens-echo.png";
import LendFiLogo from "@/assets/logos/lendfi.png";

const ProjectsPage = () => {
  return (
    <div className="page-container">
      <h2>Projects</h2>
      <div>
        <Project
          title="Lens Echo"
          link="https://twitter.com/mrbaessler/status/1658887825297637387"
          description="The first Web3 social interface on Discord, built with Lens Protocol. Lens Echo is bridging the gap between Web3 social and Discord, the most widely adopted communication app for online communities."
          workDescription="I planned and developed the Discord bot as well as a web app for managing the bot through a user friendly dashboard."
          tags={["TypeScript", "Express", "Next.js"]}
          image={LensEchoLogo}
          githubLink="https://github.com/benbaessler/lens-echo"
        />
        <Project
          title="LendFi"
          description="A platform for lending and borrowing ETH for NFT collateral (ERC-721)."
          workDescription="I planned and designed the application's development, architecture, and user interface using Figma. Additionally, I implemented the smart contract using Solidity, Hardhat, and Chai, and built the front-end application using React, TypeScript, and Ethers."
          tags={["Solidity", "TypeScript", "React"]}
          image={LendFiLogo}
          githubLink="https://github.com/benbaessler/lendfi-interface"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
