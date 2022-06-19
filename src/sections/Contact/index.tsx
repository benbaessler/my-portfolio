import './style.css'

export default function Contact() {
  return <div className="section contactSection">
    <h2>Contact Me</h2>
    <p>
      I am actively looking for work opportunities, so feel free to get in touch
      if you are in need of a developer, or even if you just want to say hello. I will 
      try to get back to you as soon as I can!
    </p>
    <a href="mailto:hello@benbaessler.com"><div className="button">Get in touch</div></a>
  </div>
}