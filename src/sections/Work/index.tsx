import './style.css'

import { useEffect, useState } from 'react'

import GitHubIcon from '../../assets/icons/github-icon.png'
import ArrowIcon from '../../assets/icons/arrow.png'
import LendFiSC1 from '../../assets/images/showcases/lendfi/1.png'
import LendFiSC2 from '../../assets/images/showcases/lendfi/2.png'
import LendFiSC3 from '../../assets/images/showcases/lendfi/3.png'
import LendFiSC4 from '../../assets/images/showcases/lendfi/4.png'
import BWBImage from '../../assets/images/showcases/bwb/1.png'

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
        <ShowcaseSlider images={[LendFiSC1, LendFiSC2, LendFiSC3, LendFiSC4]}/>
      </div>
      <div className="projectContainer">
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
            Once the bot was finalized, I packaged the app in a <b>Docker</b> Container.
          </p>
        </div>
        <ShowcaseSlider images={[BWBImage]}/>
      </div>
    </div>
  </div>
}