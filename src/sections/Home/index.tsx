import './style.css'

import myImage from '../../assets/images/me.png'

export default function Home() {

  return <div className="section">
    <div className="introContainer">
      <h1>Hey, I'm Ben.</h1>
      <h1 id="jobTitle">I build things on the blockchain.</h1>
      <p>
        Software engineer specialized in building secure decentralized applications.
        Working on shaping the next generation of the web. Based in London, UK.
      </p>
      <div className="button">
        View my resume
      </div>
    </div>
  </div>
}