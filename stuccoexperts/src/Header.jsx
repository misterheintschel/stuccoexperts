import React from "react"

import "./Header.css"

const Header = () => (
  <div className="navbar">
    <div className="container flex">
      <h1 className="logo">Stucco Experts Inc.</h1>
      <nav>
        <ul>
          <li>
            <a href="marcus">Home</a>
          </li>
          <li>
            <a href="aboutus.html">About Us</a>
          </li>
          <li>
            <a href="getaquote.html">Get a Quote</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
