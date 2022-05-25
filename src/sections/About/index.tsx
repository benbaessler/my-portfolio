import './style.css'

import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import SolidityIcon from '../../assets/icons/skills/solidity.png'
import ReactIcon from '../../assets/icons/skills/reactjs.png'
import PythonIcon from '../../assets/icons/skills/python.png'
import JavaScriptIcon from '../../assets/icons/skills/javascript.png'
import HardhatIcon from '../../assets/icons/skills/hardhat.png'
import EthereumIcon from '../../assets/icons/skills/ethereum.png'

export default function About() {

  return <div className="section">
    <div className="aboutContainer">
      <h2>About Me</h2>

      <div className="aboutContentContainer">

        <div id="aboutContentSection">
          <p>
            I am 18 years old and currently based in London, UK.
          </p>
          <p>
            Self-taught developer since 2019 and specialized in blockchain development since 2021.
          </p>
          <p>
            My goal is to leave an impact in the Web 3 space by building solutions that will help 
            blockchain technology reach global adoption.
          </p>
        </div>

        <div id="aboutSkillsSection">
          <p>My skills include:</p>
          <div className="aboutSkillsIcons">
            <OverlayTrigger placement="top" overlay={<Tooltip>Solidity</Tooltip>}>
              <div className="imgWrapper"><img src={SolidityIcon}/></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>React</Tooltip>}>
              <div className="imgWrapper"><img src={ReactIcon}/></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Python</Tooltip>}>
              <div className="imgWrapper"><img src={PythonIcon}/></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Ethereum (EVM)</Tooltip>}>
              <div className="imgWrapper"><img src={EthereumIcon}/></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>JavaScript</Tooltip>}>
              <div className="imgWrapper"><img src={JavaScriptIcon}/></div>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Hardhat</Tooltip>}>
              <div className="imgWrapper"><img src={HardhatIcon}/></div>
            </OverlayTrigger>
          </div>
        </div>

      </div>
    </div>
  </div>
}