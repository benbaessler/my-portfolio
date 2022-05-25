import './style.css'

import myImage from '../../assets/images/me.png'

export default function Home() {

  const aboutPhrase = 'I am an 18-year-old developer based in London. Aspring to become an entrepreneur in blockchain by creating something that will shape the future of technology. My coding skills include Solidity, React, Python and JavaScript.'

  return <div className="section">
    <div className="introContainer">
      <div className="introText">
        <h1>Hey, I'm Ben.</h1>
        <p id="description">
          A blockchain developer based in London. I am working on shaping the next generation of the Web.
        </p>
      </div>
      <img src={myImage} id="myImage"/>
    </div>
  </div>
}