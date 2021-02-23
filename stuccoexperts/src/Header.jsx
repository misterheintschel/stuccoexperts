import React from "react"

import "./Header.css"
import logo from "./logo.png"

const Header = () => (
  <div className="navbar">
    <div className="container-flex">
      <div className="logo-png">
        <img src={logo} alt="" />
        <h1 className="logo-text">
          Stucco <span> Experts </span> Inc.
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About Us</a>
          </li>
          <li>
            <a href="getaquote.html">Get a Quote</a>
          </li>
          <li>
            <a href="contactus">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
