import './style.css'

import { useEffect, useState } from 'react'

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
    <p>
      
    </p>
    <ul className="desc">
      <li><p>
        My responsibilies included working with a team of developers and designers to build a blockchain-based social media web app
        using React, TypeScript, Bootstrap and Ethers.
      </p></li>
      <li><p>
        Planning and writing the smart contract for an ERC-1155 NFT collection on Polygon
        using Solidity, Chai, OpenZeppelin and Hardhat.
      </p></li>
      <li><p>
        I learned how to work in an agile environment and use tools like Confluence, Jira and Bitbucket.
      </p></li>
    </ul>
  </div>
}

const ProjBadger = () => {
  return <div className="expContainer">
    <h3 id="showcaseTitle">Freelance Project</h3>
    <div className="experienceTitleContainer">
      <h3 id="projTitle">Gitcoin Bounty: Bridge Whale Bot</h3>
    </div>
    <p>
      This is a bot for monitoring a Twitter account (@RenAssetsBot), filtering new tweets for keywords and posting them to Discord using Webhooks.
    </p>  
    <p>
      After applying for the bounty, I planned and created the bot in Python. I worked with the Discord API and Twitter SDK (Tweepy).
    </p>  
    <p>
    Once the bot was finalized, I packaged the app in a Docker Container, submitted the project on Gitcoin and received a payout.
    </p>
    <div className="projLinkContainer">
      <a
        href="https://github.com/benbaessler/bridge-whale-bot"
        target="_blank"
        rel="noopener noreferrer"
      ><img src={GitHubIcon} id="githubIcon"/></a>
      <a
        href="https://gitcoin.co/iss~ue/Badger-Finance/gitcoin/18/100026127"
        target="_blank"
        rel="noopener noreferrer"
      ><img src={LinkIcon}/></a>
    </div>

  </div>  
}

export default function Work() {

  const ShowcaseSlider = ({ images }: { images: string[] }) => {
    const [currentImage, setCurrentImage] = useState<string>(images[0])

    useEffect(() => {
      setTimeout(() => {
        if (currentImage === images[images.length - 1]) {
          setCurrentImage(images[0])
        } else {
          setCurrentImage(images[images.indexOf(currentImage) + 1])
        }
      }, 5000)
    }, [currentImage])

    return <div className="showcaseSliderContainer">
      <img src={currentImage}/>
    </div>
  }

  return <div className="section">
    <div className="workContainer">
      <h2>My Work</h2>
      <div className='showcaseListContainer'>
        <JobNevam/>
        <ProjBadger/>
      </div>
      <div className="expContainer" style={{ alignItems: 'start' }}>
        <div className="projectContentContainer">
          <a 
            href="https://github.com/benbaessler/bridge-whale-bot"
            target="_blank"
            rel="noopener noreferrer"
          ><div className="projectTitleContainer">
            <img src={GitHubIcon}/>
            <h3>Gitcoin Bounty: Bridge Whale Bot</h3>
          </div></a>
          <p>
            This is a bot for monitoring a Twitter account (@RenAssetsBot), 
            filtering new tweets for keywords and posting them to Discord using Webhooks.
          </p>
          <p>
            After applying for the bounty, I planned and created the bot in <b>Python</b>.
            I worked with the Discord API and Twitter SDK (Tweepy).
          </p>
          <p style={{ margin: 0 }}>
            Once the bot was finalized, I packaged the app in a <b>Docker</b> Container, submitted the project on Gitcoin and received a payout.
          </p>
        </div>
        <div className="projectContentContainer">
          <a 
            href="https://github.com/benbaessler/nevam-nfts"
            target="_blank"
            rel="noopener noreferrer"
          ><div className="projectTitleContainer">
            <img src={GitHubIcon}/>
            <h3>NFTs for Nevam (ERC-1155)</h3>
          </div></a>
          <p>
            This is the Solidity smart contract for Nevam's upcoming NFT collection.
          </p>
          <p>
            I planned out the architecture of the contract and wrote it using <b>Solidity</b> and <b>Hardhat</b>. Using <b>Chai</b>, I wrote extensive tests. Performed a manual audit on the contract using tools like <b>Slither</b> and <b>Mythril</b>.
          </p>
          <p style={{ margin: 0 }}>
            The smart contract is designed for deployment to the <b>Polygon</b> Mainnet.
          </p>
        </div>
      </div>
      <div className="projectContainer">
        <div className="projectContentContainer">
          <a 
            href="https://github.com/benbaessler/lendfi-interface"
            target="_blank"
            rel="noopener noreferrer"
          ><div className="projectTitleContainer">
            <img src={GitHubIcon}/>
            <h3>LendFi - Private Lending dApp</h3>
          </div></a>
          <p>
            A platform for lending and borrowing ETH for NFT collateral (ERC-721).
            I planned out the development and architecture of the application.
          </p>
          <p>
            I wrote the smart contracts using <b>Solidity</b> and <b>Hardhat</b>. The contracts are extensively tested using <b>Chai</b> unit tests.
          </p>
          <p style={{ margin: 0 }}>
            I built the front-end application using <b>React</b>, <b>TypeScript</b> and <b>Ethers</b>. For styling I used <b>Bootstrap</b> and <b>CSS</b>.
          </p>
        </div>
      </div>
      
    </div>
  </div>
}