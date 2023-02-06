import "./style.css";

import Resume from "../../assets/resume.pdf";

export default function Home() {
  return (
    <div className="section introSection">
      <div className="introContainer">
        <h1>Hey, I'm Ben.</h1>
        <h1 id="jobTitle">I build secure, decentralized applications.</h1>
        <p>
          A software engineer with a passion for contributing to the
          open-source Web3 ecosystem and working on projects that push the
          boundaries of decentralized technology.
        </p>
        <a
          href="https://t.me/benbaessler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button">Get in touch</div>
        </a>
      </div>
    </div>
  );
}
