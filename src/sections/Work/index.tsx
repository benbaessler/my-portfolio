import './style.css'
import GitHubIcon from '../../assets/icons/media/github.png'
import LinkIcon from '../../assets/icons/link.png'

const JobNevam = () => {
  return <div className="expContainer">
    <h3 id="showcaseTitle">Part-time Employment</h3>
    <div className="experienceTitleContainer">
      <h3>Blockchain Software Developer <span>@ Nevam</span></h3>
    </div>
    <p id="jobDetails">August 2021 - June 2022</p>
    <p className="jobsum">
      A part-time, remote position for a web3 start-up building a social media platform for NFT artists
      to express themselves via their own created metaverses.
    </p>
    <ul>
      <li><p>
        My responsibilies included working with a team of developers and designers to build a blockchain-based social media web app
        using React, TypeScript, Bootstrap and Ethers.
      </p></li>
      <li><p>
        Planning, writing, and testing the smart contract for an ERC-1155 NFT collection on Polygon
        using Solidity, Chai, OpenZeppelin and Hardhat.
      </p></li>
      <li><p>
        Learned how to work in an agile team environment, use tools like Confluence, Jira and
        Bitbucket, able to work autonomously.
      </p></li>
    </ul>
  </div>
}

const ProjBadger = () => {
  return <div className="expContainer">
    <h3 id="showcaseTitle">Project Showcase</h3>
    <div className="experienceTitleContainer">
      <h3 id="projTitle">Gitcoin Bounty: Bridge Whale Bot</h3>
    </div>
    <p>
      A bot for monitoring a Twitter account (@RenAssetsBot) and sharing incoming tweets to a Discord channel based on keywords.
    </p>  
    <ul>
      <li><p>
        Planned and built the bot using Python, Discord API and Twitter API (Tweepy).
      </p></li>
      <li><p>
        Packaged the finished project in a Docker container.
      </p></li>
      <li><p>
        Submitted the project to Gitcoin and received a payout of 20 BADGER tokens at a value of about $500.
      </p></li>
    </ul>
    <div className="projLinkContainer">
      <a
        href="https://github.com/benbaessler/bridge-whale-bot"
        target="_blank"
        rel="noopener noreferrer"
      ><img src={GitHubIcon} id="githubIcon"/></a>
      <a
        href="https://gitcoin.co/issue/Badger-Finance/gitcoin/18/100026127"
        target="_blank"
        rel="noopener noreferrer"
      ><img src={LinkIcon}/></a>
    </div>

  </div>  
}

const ProjNevam = () => {
  return <div className="expContainer">
    <h3 id="showcaseTitle">Project Showcase</h3>
    <div className="experienceTitleContainer">
      <h3 id="projTitle">Nevam's NFT collection</h3>
    </div>
    <p>
      ERC-1155 NFT smart contract for Nevam's upcoming collection on Polygon Mainnet.
    </p>  
    <ul>
      <li><p>
        Planned and wrote the smart contract using Solidity, Hardhat and OpenZeppelin.
      </p></li>
      <li><p>
        Extensively tested the contract by deploying it to Mumbai testnet as well as writing unit tests with Chai.
      </p></li>
      <li><p>
        Integrated a whitelist for minting in a pre-sale period using Merkle tree.
      </p></li>
    </ul>
    <div className="projLinkContainer">
      <a
        href="https://github.com/benbaessler/nevam-nfts"
        target="_blank"
        rel="noopener noreferrer"
      ><img src={GitHubIcon} id="githubIcon" style={{ margin: 0 }}/></a>
    </div>
  </div>  
}

const ProjLendFi = () => {
  return <div className="expContainer">
    <h3 id="showcaseTitle">Project Showcase</h3>
    <div className="experienceTitleContainer">
      <h3 id="projTitle">LendFi</h3>
    </div>
    <p>
      A platform for lending and borrowing ETH for NFT collateral (ERC-721).
    </p>
    <ul>
      <li><p>
        Planned out the development and architecture of the application and designed the user interface using Figma.
      </p></li>
      <li><p>
        Wrote, tested and deployed the smart contract to Rinkeby testnet using Solidity, Hardhat and Chai.
      </p></li>
      <li><p>
        Built the front-end application with React, TypeScript and Ethers.
      </p></li>
    </ul>
    <div className="projLinkContainer">
      <a
        href="https://github.com/benbaessler/lendfi-interface"
        target="_blank"
        rel="noopener noreferrer"
      ><img src={GitHubIcon} id="githubIcon"/></a>
      <a
        href="https://lendfi.herokuapp.com"
        target="_blank"
        rel="noopener noreferrer"
      ><img src={LinkIcon}/></a>
    </div>
  </div>  
}

export default function Work() {
  return <div className="section" style={{ width: 'auto' }}>
    <div className="workContainer">
      <h2>My Work</h2>
      <div className='showcaseListContainer'>
        <JobNevam/>
        <ProjLendFi/>
        <ProjNevam/>
        <ProjBadger/>
      </div>
    </div>
  </div>
}