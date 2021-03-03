import React from "react"
import logo from "./logo.png"

const ContactSheet = () => (
  <>
    <div className="page">
      <h1>Contact Us</h1>
      <div className="content">
        <div className="contactInfo">
          <div className="contactInfoItem">
            <div className="icon">
              <i className="fa fa-id-badge" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>President</h3>
              <p>Matt Heintschel</p>
            </div>
          </div>
          <div className="contactInfoItem">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>2150 N Centre City Pkwy, Ste K-1 Escondido, CA 92026</p>
            </div>
          </div>
          <div className="contactInfoItem">
            <div className="icon">
              <i className="fa fa-envelope" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>info@stuccoexpertsinc.com</p>
            </div>
          </div>
          <div className="contactInfoItem">
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>(760) 743-5901</p>
            </div>
          </div>
        </div>
        <img src={logo} alt="" />
      </div>
    </div>
  </>
)

export default ContactSheet
