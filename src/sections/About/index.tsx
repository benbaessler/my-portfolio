import "./style.css";
import MyImage from "../../assets/images/me.png";

export default function About() {
  return (
    <>
      <div className="section" id="about">
        <div className="aboutContainer">
          <h2>About Me</h2>

          <div className="aboutContentContainer">
            <div id="aboutContentSection">
              <p>
                I am a German-American 18-year-old developer based in London,
                UK. My journey as a software developer started back in 2019 when
                I took an online <span>Python</span> course. Since then, coding
                has become my passion.
              </p>
              <p>
                During COVID-19, I spent my time exploring different development
                'niches' to find something that I wanted to specialize in. I
                started teaching myself various programming languages including{" "}
                <span>Flutter (Dart)</span>, <span>HTML & CSS</span>,{" "}
                <span>Swift</span> and <span>JavaScript</span>.
              </p>
              <p>
                When I learned about blockchain in early 2021, I was immediately
                intrigued by the potential of this technology. It was clear to
                me, this is what I wanted to work on. Since then, I've actively
                participated in the community, while learning about the{" "}
                <span>crypto</span> & <span>web3</span> space.
              </p>
              <p>
                In August 2021, after teaching myself <span>Solidity</span> and{" "}
                <span>React</span> to build <span>dApps</span> /{" "}
                <span>smart contracts</span>, I landed my first job as a
                part-time blockchain developer for a web 3 start-up. I now spend
                my time building side projects to further evolve my skills and
                knowledge.
              </p>
              <p>
                <b>I am currently open for work as a developer.</b>
              </p>
            </div>

            <div className="showcaseContainer">
              <div className="aboutImageContainer">
                <img src={MyImage} alt="Ben Baessler portrait" />
              </div>
              <div>
                <p>My main technical skills are:</p>
                <ul className="skillsList">
                  <li>Solidity</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>HTML & CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="work"></div>
    </>
  );
}
