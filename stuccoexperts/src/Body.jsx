import React from "react"
import "./Body.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import logo from "./logo.png"

const description =
  "With more than 40 years of " +
  "experience, we provide Southern California with " +
  "high quality stucco, expert craftsmanship, and " +
  "best-in-class customer service at competitive prices."

const paragraph =
  "The Stucco Experts' Team is currently " +
  "working on getting our website back up and running for " +
  "our valued customers. In the meantime, please utilize " +
  "the contact information on our Contact Us Page."

const Body = () => (
  <Router>
    <Switch>
      <Route path="/contactus">
        <h1>Contact Us</h1>
      </Route>
      <Route path="/home">
        <div className="main">
          <div className="placeholder">
            <div className="placeholder-text">
              <h2>{description}</h2>
            </div>
            <div className="background_img">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="message">
            <h2>{paragraph}</h2>
          </div>
          <div className="contactus">
            <a href="contact.html">
              <li>Contact Us</li>
            </a>
          </div>
        </div>
      </Route>
    </Switch>
  </Router>
)

export default Body
