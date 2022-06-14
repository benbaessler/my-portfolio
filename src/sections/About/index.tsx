import './style.css'
import MyImage from '../../assets/images/me.png'

export default function About() {

  return <div className="section">
    <div className="aboutContainer">
      <h2>About Me</h2>

      <div className="aboutContentContainer">

        <div id="aboutContentSection">
          <p>
            I am a German-American 18-year-old developer based in London, UK. My journey as a software
            developer started back in 2019 when I took an online <span>Python</span> course. Since then, coding has 
            become my number one passion.
          </p>
          <p>
            During COVID-19, I spent my time exploring different developer 'niches' in order to find something that I wanted to specialize in.
            I started teaching myself various programming languages including <span>Flutter (Dart)</span>, <span>HTML & CSS</span>, <span>Swift</span> and <span>JavaScript</span>.
          </p>
          <p>
            When I learned about blockchain in early 2021, it was clear to me that this is what I want to work on. 
            I started actively participating in the <span>crypto</span> / <span>web 3</span> community and learning about the space.
          </p>
          <p>
            In August 2021, after teaching myself <span>Solidity</span> and <span>React</span> in order to build <span>dApps</span> / <span>smart contracts</span>, I landed my very first job as a part-time blockchain developer for a web 3 start-up.
          </p>
          <p>
            <b>I am currently open for work as a developer.</b>
          </p>
        </div>

        <div className="showcaseContainer">
          <img src={MyImage}/>
          <div className="skillsContainer">~
          </div>
        </div>
        
      </div>
    </div>
  </div>
}