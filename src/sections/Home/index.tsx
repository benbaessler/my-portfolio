import './style.css'

import myImage from '../../assets/images/me.png'

export default function Home() {
  return (
    <div className="section">
      <div className="introContainer">
        <div className="introText">
          <h1>Hey, I'm Ben.</h1>
          <p id="description">I am an 18-year-old developer based in London. Aspring to become an entrepreneur in blockchain by creating something that will shape the future of technology. My coding skills 
          include <b>Solidity</b>, <b>React</b>, <b>Python</b> and <b>JavaScript</b>.
          </p>
          <p>Interested in working with me? Let's get in touch! 😁</p>
        </div>
        <img src={myImage} id="myImage"/>
      </div>
    </div>
  )
}