import './style.css'

import GitHubIcon from '../../assets/icons/github-icon.png'
import LendFiShowcase from '../../assets/images/lendfi-showcase.png'

export default function Work() {
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
        <img id="showcaseImage" src={LendFiShowcase}/>
      </div>
    </div>
  </div>
}