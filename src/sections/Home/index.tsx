import './style.css'

import myImage from '../../assets/images/me.png'

export default function Home() {

  return <div className="section">
    <div className="introContainer">
      <div className="introText">
        <h1>Hey, I'm Ben.</h1>
        <p id="description">
          A blockchain developer based in London. Working on shaping the next generation of the Web.
        </p>
      </div>
      <img src={myImage} id="myImage"/>
    </div>
  </div>
}