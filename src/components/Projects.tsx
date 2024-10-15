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
              title="Cast Game"
              description="A prediction game for viral casts in Farcaster channels."
              tags={["Farcaster", "Frames", "Actions", "Frog"]}
              links={[
                {
                  title: "About",
                  href: "https://cast.game/about",
                },
                {
                  title: "Farcaster",
                  href: "https://warpcast.com/~/channel/castgame",
                },
                {
                  title: "GitHub",
                  href: "https://github.com/orgs/cast-game/repositories",
                }
              ]}
            />
            <Project
              title="Envisage"
              description="A Farcaster Frame for creating a unique, AI-generated art piece and minting it as an NFT on Base with payment in $DEGEN tips. "
              tags={["Farcaster", "Frames", "frames.js", "TypeScript"]}
              links={[
                {
                  title: "View",
                  href: "https://warpcast.com/benbaessler/0x07687b14",
                },
                {
                  title: "GitHub",
                  href: "https://github.com/benbaessler/envisage-nft-frame",
                }
              ]}
            />
            <Project
              title="Social Bot"
              description="All-In-One Discord interface for Web3 Social Protocols. Social Bot is bridging the gap between Web3 social and Discord, the most widely adopted communication app for online communities. Built on Lens Protocol."
              tags={["Lens Protocol", "Discord", "Next.js", "TypeScript"]}
              links={[
                {
                  title: "Try it out",
                  href: "https://socialbot.gg",
                },
                {
                  title: "GitHub",
                  href: "https://github.com/benbaessler/socialbot",
                },
                {
                  title: "Lens",
                  href: "https://share.lens.xyz/u/socialbot",
                },
                {
                  title: "Twitter",
                  href: "https://twitter.com/socialbotgg",
                },
              ]}
            />
            <Project
              title="ShopConnect"
              description="A browser extension that unlocks personalized deals for you while maintaining data privacy. Built during the ETHOnline 2023 hackathon, made it to the finalists."
              tags={["JavaScript", "Next.js", "Polygon ID"]}
              links={[
                {
                  title: "Showcase",
                  href: "https://ethglobal.com/showcase/shopconnect-0qanh",
                },
                {
                  title: "GitHub",
                  href: "https://github.com/shopconnectorg",
                }
              ]}
            />
            {/* <Project
              title="LendFi"
              description="A platform for lending and borrowing ETH for NFT collateral (ERC-721)."
              tags={["Solidity", "TypeScript", "React"]}
              links={[
                {
                  title: "GitHub",
                  href: "https://github.com/benbaessler/lendfi-interface",
                },
              ]}
            /> */}
            <p className="text-slate-200 flex pt-2 pb-12">
              <Button
                text="View all projects"
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
