import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const description = 'With more than 40 years of ' +
  'experience, we provide Southern California with ' +
  'high quality stucco, expert craftsmanship, and ' +
  'best-in-class customer service at competitive prices.';


const paragraph = "The Stucco Experts' Team is currently " +
  "working on getting our website back up and running for " +
  "our valued customers. In the meantime, please utilize " +
  "the contact information on our Contact Us Page.";

const Body = () => (
  <Router>
    <Switch>
      <Route path="/marcus">
       <h1>MARCUSMARCUSMARCUS</h1>
      </Route>
      <Route path="/asdf">
        <div class="main">
          <div class="placeholder">
            <h2>{description}</h2>
              <div class="background_img">
                  <img src="logo.png" alt="" />
              </div>
          </div>
          <div class="message">
              <p>{paragraph}</p>
          </div>
          <div class="contactus">
              <a href="contact.html"><li>Contact Us</li></a>
          </div>
        </div>
      </Route>
    </Switch>
  </Router>
);

export default Body;
