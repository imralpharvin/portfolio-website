import React from "react"
import "../assets/css/main.css"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className="content">{children}</main>
    </>
  )
}

export default Layout
