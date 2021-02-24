import React from "react"

import "./Header.css"
import logo from "./logo.png"

const Header = () => (
  <div className="navbar">
    <div className="imageContainer">
      <img src={logo} alt="" />
    </div>
    <h1 className="logo-text">
      Stucco <span> Experts </span> Inc.
    </h1>
    <nav className="navContainer">
      <ul>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">About Us</a>
        </li>
        <li>
          <a href="get-a-quote">Get a Quote</a>
        </li>
        <li>
          <a href="contact-us">Contact Us</a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
