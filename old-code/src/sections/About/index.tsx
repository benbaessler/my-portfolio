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
              I am a London-based, German-American software developer with a
              passion for coding and blockchain technology. My journey began in
              2019 when I took an online <span>Python</span> course, which
              sparked my passion for coding. Since then, I have continued to
              develop my skills in various programming languages such as{" "}
              <span>Flutter (Dart)</span>, <span>HTML & CSS</span>,{" "}
              <span>Swift</span>, and
              <span> JavaScript</span>. My diverse background in these
              technologies has allowed me to bring a unique perspective to my
              projects.
            </p>
            <p>
              In early 2021, I discovered the potential of blockchain technology
              and immediately knew that this was the area I wanted to focus on.
              I have actively participated in the community, continuously
              learning about the crypto and web3 space. After teaching myself
              <span> Solidity</span> and <span>React</span>, I landed my first
              job as a part-time blockchain developer for a web 3 start-up in
              August 2021.
            </p>
            <p>
              From October 2022 to February 2023, I had the opportunity to work
              at{" "}
              <a
                href="https://morpho.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Morpho Labs
              </a>{" "}
              as a Software Engineer. During this time, I gained valuable
              experience building software for a decentralized lending platform
              and continued to grow as a developer. I am now open to new
              opportunities and eager to bring my skills and passion to another
              exciting project.
            </p>
            <p>
              Beyond my career as a software developer, I have entrepreneurial
              ambitions and am always seeking new challenges and opportunities
              to innovate and create in the web3 space. I am excited about the
              future of decentralized technology and eager to be a part of
              shaping the next generation of the web.
            </p>
          </div>

          <div className="showcaseContainer">
            <div className="aboutImageContainer">
              <img src={MyImage} alt="Ben Baessler portrait" />
            </div>
            {/* <div>
              <p>My technical skills include:</p>
              <ul className="skillsList">
                <li>Solidity</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>HTML & CSS</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
