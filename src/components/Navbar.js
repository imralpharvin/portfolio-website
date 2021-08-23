import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { GrMail } from "react-icons/gr"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-center">
          <h1>
            ralphDC<span style={{ color: "#28afb0" }}>.com</span>
          </h1>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/projects/" className="navbar-link">
              Projects
            </Link>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/ralpharvindc/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/imralpharvin"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:ralpharvin.dc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <GrMail size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
