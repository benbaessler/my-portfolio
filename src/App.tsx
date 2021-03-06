import './App.css';
import { useRef } from 'react'

import Topbar from './components/Topbar';
import Home from './sections/Home'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import Footer from './components/Footer';

import Logo from './assets/logo.png'
import twitterIcon from './assets/icons/media/twitter.png'
import linkedInIcon from './assets/icons/media/linkedIn.png'
import gitHubIcon from './assets/icons/media/github.png'

function App() {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (ref: React.MutableRefObject<any>) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return <div style={{ backgroundColor: "#292b47"}}>
    <div className="main">
      <div className="topBar">
        <div className="logoContainer" onClick={() => scrollTo(homeRef)}>
          <img src={Logo}/>
        </div>
        <div className="navbarLinkContainer">
          <div className="navbarLinks">
            <a onClick={() => scrollTo(aboutRef)}>About</a>
            <a onClick={() => scrollTo(workRef)}>Work</a>
            <a onClick={() => scrollTo(contactRef)}>Contact</a>
          </div>
          <div style={{ marginLeft: '2rem' }}>
            <a href="https://twitter.com/ohCurles" target="_blank" rel="noopener noreferrer">
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
      <div ref={homeRef}>
        <Home/>
      </div>
      <div ref={aboutRef}>
        <About/>
      </div>
      <div ref={workRef}>
        <Work/>
      </div>
      <div ref={contactRef}>
        <Contact/>
      </div>
    </div>  
    <Footer/>
  </div>
    

}

export default App;
