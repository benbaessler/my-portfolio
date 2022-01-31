import './style.css'

import myImage from '../../assets/images/me.png'

export default function Home() {
  return (
    <div className="section">
      <div className="introContainer">
        <div className="introText">
          <h1>Hey, I'm Ben.</h1>
          <p id="description">I am a 18-year-old developer from London. Aspring to become an entrepreneur in blockchain by creating something that will shape the future of technology. My coding skills 
          include <b>Solidity</b>, <b>React</b>, <b>Python</b> and <b>Flutter</b>.
          </p>
          <p>Interested in working with me? <a href="mailto:hello@benbaessler.com">Let's get in touch!</a> 😁</p>
        </div>
        <img src={myImage} id="myImage"/>
      </div>
    </div>
  )
}