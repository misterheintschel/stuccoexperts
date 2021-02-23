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

const about = "About Us"

const contact = "Contact Us"

const getaquote = "Get a Quote"

const contactSheet = (
  <div className="contactInfo">
    <div className="box">
      <div className="icon">
        <i className="fa fa-id-badge" aria-hidden="true" />
      </div>
      <div className="text">
        <h3>President</h3>
        <p>Matt Heintschel</p>
      </div>
    </div>
    <div className="box">
      <div className="icon">
        <i className="fa fa-map-marker" aria-hidden="true" />
      </div>
      <div className="text">
        <h3>Address</h3>
        <p>2150 N Centre City Pkwy, Ste K-1 Escondido, CA 92026</p>
      </div>
    </div>
    <div className="box">
      <div className="icon">
        <i className="fa fa-envelope" aria-hidden="true" />
      </div>
      <div className="text">
        <h3>Email</h3>
        <p>info@stuccoexpertsinc.com</p>
      </div>
    </div>
    <div className="box">
      <div className="icon">
        <i className="fa fa-phone" aria-hidden="true" />
      </div>
      <div className="text">
        <h3>Phone</h3>
        <p>(760) 743-5901</p>
      </div>
    </div>
  </div>
)

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
          <div className="contactus">
            <a href="contactus">
              <li>{contact}</li>
            </a>
          </div>
        </div>
      </Route>
      <Route path="/about">
        <div className="about-us">
          <h1>{about}</h1>
        </div>
      </Route>
      <Route path="/getaquote">
        <div className="get-a-quote">
          <h1>{getaquote}</h1>
        </div>
      </Route>
      <Route path="/contactus">
        <h1>{contact}</h1>
        <div className="content">{contactSheet}</div>
      </Route>
    </Switch>
  </Router>
)

export default Body
