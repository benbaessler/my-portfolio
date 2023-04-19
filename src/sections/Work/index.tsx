import "./style.css";
import GitHubIcon from "../../assets/icons/media/github.png";
import LinkIcon from "../../assets/icons/link.png";

const JobMorpho = () => {
  return (
    <div className="expContainer">
      <h3 id="showcaseTitle">Full-time Employment</h3>
      <div className="experienceTitleContainer">
        <h3>
          Software Engineer{" "}
          <span>
            @{" "}
            <a
              href="https://morpho.xyz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Morpho Labs
            </a>
          </span>
        </h3>
      </div>
      <p id="jobDetails">October 2022 - February 2023</p>
      <p className="jobsum">
        A full-time job as a Software Engineer for a decentralized lending
        platform on Ethereum working on building the future of finance.
      </p>
      <ul>
        <li>
          <p>
            Implemented new features and functionality in a TypeScript-based
            codebase, utilizing React for frontend development and The Graph for
            querying decentralized data.
          </p>
        </li>
        <li>
          <p>
            Utilized Tenderly and other tools to monitor and debug smart
            contracts deployed on Ethereum.
          </p>
        </li>
        <li>
          <p>
            Participated in agile development processes, including daily
            stand-ups, sprint planning, and code reviews, using tools such as
            Jira, Notion and GitHub.
          </p>
        </li>
        <li>
          <p>
            Work independently and as part of a team to deliver high-quality,
            secure software for the DeFi space.
          </p>
        </li>
      </ul>
      <p>
        <b>Technologies:</b> TypeScript, Ethereum, Chai, Mocha, Ethers, web3.js,
        React, Material UI, Figma, Jira, GitHub, Notion, Git, Agile
      </p>
    </div>
  );
};

const JobNevam = () => {
  return (
    <div className="expContainer">
      <h3 id="showcaseTitle">Part-time Employment</h3>
      <div className="experienceTitleContainer">
        <h3>
          Blockchain Software Developer <span>@ Nevam</span>
        </h3>
      </div>
      <p id="jobDetails">August 2021 - June 2022</p>
      <p className="jobsum">
        A part-time, remote position for a web3 start-up building a social media
        platform for NFT artists to express themselves via their own created
        metaverses.
      </p>
      <ul>
        <li>
          <p>
            Planned and created an NFT smart contract using Solidity, Hardhat
            and OpenZeppelin, wrote extensive tests with Chai, and audited the
            contract using Mythril.
          </p>
        </li>
        <li>
          <p>
            Built a decentralized social media web app using React, CSS,
            Bootstrap, and web3.js / Ethers for integrating Ethereum.
          </p>
        </li>
        <li>
          <p>
            Learned how to work in an agile team environment, use tools like
            Confluence, Jira and Bitbucket, able to work autonomously.
          </p>
        </li>
      </ul>
      <p>
        <b>Technologies used:</b> Solidity, TypeScript, JavaScript, Hardhat,
        Ethereum, Polygon, OpenZeppelin, Chai, Ethers, Mythril, React, CSS,
        Figma, Bootstrap, web3.js, Confluence, Jira, Bitbucket, Git, Agile
      </p>
    </div>
  );
};

const ProjBadger = () => {
  return (
    <div className="expContainer">
      <h3 id="showcaseTitle">Project Showcase</h3>
      <div className="experienceTitleContainer">
        <h3 id="projTitle">Gitcoin Bounty: Bridge Whale Bot</h3>
      </div>
      <p>
        A bot for monitoring a Twitter account (@RenAssetsBot) and sharing
        incoming tweets to a Discord channel based on keywords.
      </p>
      <ul>
        <li>
          <p>
            Planned and built the bot using Python, Discord API and Twitter API
            (Tweepy).
          </p>
        </li>
        <li>
          <p>Packaged the finished project in a Docker container.</p>
        </li>
        <li>
          <p>
            Submitted the project to Gitcoin and received a payout of 20 BADGER
            tokens at a value of about $500.
          </p>
        </li>
      </ul>
      <p>
        <b>Technologies used:</b> Python, Discord, discord.py, Tweepy, Twitter
        API, Docker, Ethereum
      </p>
      <div className="projLinkContainer">
        <a
          href="https://github.com/benbaessler/bridge-whale-bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} id="githubIcon" />
        </a>
        <a
          href="https://gitcoin.co/issue/Badger-Finance/gitcoin/18/100026127"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkIcon} />
        </a>
      </div>
    </div>
  );
};

const ProjNevam = () => {
  return (
    <div className="expContainer">
      <h3 id="showcaseTitle">Project Showcase</h3>
      <div className="experienceTitleContainer">
        <h3 id="projTitle">Nevam's NFT collection</h3>
      </div>
      <p>
        ERC-1155 NFT smart contract for Nevam's upcoming collection on Polygon
        Mainnet.
      </p>
      <ul>
        <li>
          <p>
            Planned and wrote the smart contract using Solidity, Hardhat and
            OpenZeppelin.
          </p>
        </li>
        <li>
          <p>
            Extensively tested the contract by deploying it to Mumbai testnet as
            well as writing unit tests with Chai.
          </p>
        </li>
        <li>
          <p>
            Integrated a whitelist for minting in a pre-sale period using Merkle
            tree.
          </p>
        </li>
      </ul>
      <p>
        <b>Technologies used:</b> Solidity, TypeScript, JavaScript, Hardhat,
        Ethereum, Polygon, OpenZeppelin, Chai, Ethers, Mythril
      </p>
      <div className="projLinkContainer">
        <a
          href="https://github.com/benbaessler/nevam-nfts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} id="githubIcon" style={{ margin: 0 }} />
        </a>
      </div>
    </div>
  );
};

const ProjLendFi = () => {
  return (
    <div className="expContainer">
      <h3 id="showcaseTitle">Project Showcase</h3>
      <div className="experienceTitleContainer">
        <h3 id="projTitle">LendFi</h3>
      </div>
      <p>
        A platform for lending and borrowing ETH for NFT collateral (ERC-721).
      </p>
      <ul>
        <li>
          <p>
            Planned out the development and architecture of the application and
            designed the user interface using Figma.
          </p>
        </li>
        <li>
          <p>
            Wrote, tested and deployed the smart contract to Rinkeby testnet
            using Solidity, Hardhat and Chai.
          </p>
        </li>
        <li>
          <p>
            Built the front-end application with React, TypeScript and Ethers.
          </p>
        </li>
      </ul>
      <p>
        <b>Technologies used:</b> Solidity, TypeScript, React, CSS, JavaScript,
        Hardhat, Ethereum, Rinkeby, OpenZeppelin, Chai, Ethers, Slither, Figma
      </p>
      <div className="projLinkContainer">
        <a
          href="https://github.com/benbaessler/lendfi-interface"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} id="githubIcon" />
        </a>
      </div>
    </div>
  );
};

const ProjSubscription = () => {
  return (
    <div className="expContainer">
      <h3 id="showcaseTitle">Project Showcase</h3>
      <div className="experienceTitleContainer">
        <h3 id="projTitle">Solidity Subscription</h3>
      </div>
      <p>
        A Solidity smart contract that can manage periodical subscriptions paid
        with crypto on-chain.
      </p>
      <ul>
        <li>
          <p>
            Planned and built the smart contract using Solidity, Hardhat and
            OpenZeppelin.
          </p>
        </li>
        <li>
          <p>
            Extensively tested the contract by deploying it with Chai unit
            tests.
          </p>
        </li>
        <li>
          <p>Fully documented the contract with NatSpec.</p>
        </li>
      </ul>
      <p>
        <b>Technologies used:</b> Solidity, JavaScript, Chai, Hardhat, Ethereum,
        OpenZeppelin, Chai, Ethers
      </p>
      <div className="projLinkContainer">
        <a
          href="https://github.com/benbaessler/solidity-subscription"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} id="githubIcon" style={{ margin: 0 }} />
        </a>
      </div>
    </div>
  );
};

export default function Work() {
  return (
    <div className="section" style={{ width: "auto" }}>
      <div className="workContainer">
        <h2>My Work</h2>
        <div className="showcaseListContainer">
          <JobMorpho />
          <JobNevam />
          <ProjLendFi />
          {/* <ProjNevam /> */}
          {/* <ProjBadger /> */}
          {/* <ProjSubscription /> */}
        </div>
      </div>
    </div>
  );
}
