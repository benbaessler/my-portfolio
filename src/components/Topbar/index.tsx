import './style.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import renderContactTip from '../ContactTip'

import { CgArrowBottomLeft } from 'react-icons/cg'
import twitterIcon from '../../assets/icons/twitter.png'
import linkedInIcon from '../../assets/icons/linkedIn.png'
import gitHubIcon from '../../assets/icons/github.png'

export default function Topbar() {
  return (
    <div className="topBar">
      <OverlayTrigger
        placement="bottom"
        overlay={renderContactTip}
      >
        <div className="contactContainer">
          <a href="mailto:hello@benbaessler.com">
            <div id="emailContact">
              Contact me
              <div id="emailIconContainer">
              <CgArrowBottomLeft size="25px"/>
              </div>
            </div>
          </a>
        </div>
      </OverlayTrigger>
      <div className="socialMediaContainer">
        <a href="https://twitter.com/ohCurles" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon}/>
        </a>
        <a href="https://github.com/benbaessler" target="_blank" rel="noopener noreferrer">
          <img src={gitHubIcon} style={{ height: '35px', marginLeft: '.8rem' }}/>
        </a>
        <a href="https://linkedin.com/in/benbaessler/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} style={{ height: '32px' }}/>
        </a>
      </div>
    </div>
  )
}