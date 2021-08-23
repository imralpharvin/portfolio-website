import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-center">
          <h1>ralphDC</h1>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/projects/" className="navbar-link">
              Projects
            </Link>
          </div>
          <div>Social Media</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
