import React from "react"
import "./Body.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import logo from "./logo.png"
import ContactSheet from "./ContactSheet"

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

const about = "About Us"

const getaquote = "Get a Quote"

const Body = () => (
  <Router>
    <Switch>
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
        </div>
      </Route>
      <Route path="/about-us">
        <div className="about-us">
          <h1>{about}</h1>
        </div>
      </Route>
      <Route path="/gallery" />
      <Route path="/services-get-a-quote">
        <div className="get-a-quote">
          <h1>{getaquote}</h1>
        </div>
      </Route>
      <Route path="/contact-us">
        <ContactSheet />
      </Route>
    </Switch>
  </Router>
)

export default Body
