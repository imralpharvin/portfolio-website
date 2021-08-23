import React from "react"
import ReactTypingEffect from "react-typing-effect"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-header">
        <div className="landing-portrait-wrapper">
          <StaticImage
            src="../assets/images/portrait.png"
            alt="portrait"
            className="landing-portrait"
          />
        </div>
        <div className="landing-info">
          <div style={{ fontSize: "2rem" }}>Hello! My name is</div>
          <div style={{ color: "#28afb0" }}>Ralph De Castro</div>
        </div>
      </div>

      <div style={{ fontSize: "3rem" }}>
        I am a <span style={{ color: "#28afb0" }}>Web Developer</span>.
      </div>
      <div style={{ fontSize: "2.5rem" }}>
        I enjoy programming in{" "}
        <span style={{ color: "#28afb0" }}>
          <ReactTypingEffect
            text={["Javascript", "C", "ReactJS", "HTML", "CSS", "GatsbyJS"]}
            eraseDelay={250}
            typingDelay={250}
          />
        </span>
        .
      </div>
      <Link to="/projects/" className="landing-button-wrapper">
        <button className="landing-button">View my projects</button>
      </Link>
    </div>
  )
}

export default Landing
