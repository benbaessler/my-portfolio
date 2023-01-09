import "./style.css";

export default function Contact() {
  return (
    <div className="section contactSection">
      <h2>Contact Me</h2>
      <p>
        I am not actively looking for work opportunities at this time, but I am
        always happy to connect and discuss potential projects or
        collaborations. If you are interested in working together or just want
        to say hello, please don't hesitate to get in touch. I will do my best
        to get back to you as soon as I can.
      </p>
      <a href="mailto:hello@benbaessler.com">
        <div className="button">Get in touch</div>
      </a>
    </div>
  );
}
