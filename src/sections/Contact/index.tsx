import "./style.css";

export default function Contact() {
  return (
    <div className="section contactSection">
      <h2>Contact Me</h2>
      <p>
        I am open to work opportunities and eager to connect and discuss
        potential projects or collaborations. If you are interested in working
        together or just want to say hello, please feel free to reach out. I
        will do my best to get back to you as soon as I can.
      </p>
      <a href="mailto:hello@benbaessler.com">
        <div className="button">Get in touch</div>
      </a>
    </div>
  );
}
