import "./style.css";
import MyImage from "../../assets/images/me.png";

export default function About() {
  return (
    <div className="section">
      <div className="aboutContainer">
        <h2>About Me</h2>

        <div className="aboutContentContainer">
          <div id="aboutContentSection">
            <p>
              I am a German-American 18-year-old developer based in London, UK.
              My journey as a software developer started back in 2019 when I
              took an online <span>Python</span> course. Since then, coding has
              become my passion.
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
              intrigued by the potential of this technology. It was clear to me,
              this is what I wanted to work on. Since then, I've actively
              participated in the community, while learning about the{" "}
              <span>crypto</span> & <span>web3</span> space.
            </p>
            <p>
              In August 2021, after teaching myself <span>Solidity</span> and{" "}
              <span>React</span> to build <span>dApps</span> /{" "}
              <span>smart contracts</span>, I landed my first job as a part-time
              blockchain developer for a web 3 start-up.
            </p>
            <p>
              I have joined the team at{" "}
              <a
                href="https://morpho.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Morpho Labs
              </a>{" "}
              as a Software Engineer in January 2023. In this role, I have the
              opportunity to work on building software for a decentralized lending
              platform and to continue learning and growing as a developer. I am
              looking forward to tackling the challenges and opportunities that
              come with working on exciting projects at Morpho.
            </p>
          </div>

          <div className="showcaseContainer">
            <div className="aboutImageContainer">
              <img src={MyImage} alt="Ben Baessler portrait" />
            </div>
            <div>
              <p>My technical skills include:</p>
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
  );
}
