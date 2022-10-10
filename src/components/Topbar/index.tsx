import './style.css'

import Logo from '../../assets/logo.png'
import twitterIcon from '../../assets/icons/media/twitter.png'
import linkedInIcon from '../../assets/icons/media/linkedIn.png'
import gitHubIcon from '../../assets/icons/media/github.png'

export default function Topbar() {

  return (
    <div className="topBar">
      <div className="logoContainer">
        <img src={Logo}/>
      </div>
      <div className="navbarLinkContainer">
        <div className="navbarLinks">
          <a href="">About</a>
          <a href="">Work</a>
          <a href="">Contact</a>
        </div>
        <div style={{ marginLeft: '2rem' }}>
          <a href="https://twitter.com/curlesbb" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon}/>
          </a>
          <a href="https://github.com/benbaessler" target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} style={{ height: '35px' }}/>
          </a>
          <a href="https://linkedin.com/in/benbaessler/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} style={{ height: '32px' }}/>
          </a>
        </div>
      </div>
    </div>
  )
}