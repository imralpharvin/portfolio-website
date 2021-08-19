import React from "react"
import "../css/main.css"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  )
}

export default Layout
