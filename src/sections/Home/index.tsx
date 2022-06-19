import './style.css'

import Resume from '../../assets/resume.pdf'

export default function Home() {

  return <div className="section introSection">
    <div className="introContainer">
      <h1>Hey, I'm Ben.</h1>
      <h1 id="jobTitle">I build things on the blockchain.</h1>
      <p>
        Software engineer specialized in building secure decentralized applications.
        Working on shaping the next generation of the web.
      </p>
      <a href={Resume}
        target="_blank"
        rel="noopener noreferrer"
      ><div className="button">
        View my resume
      </div></a>
    </div>
  </div>
}