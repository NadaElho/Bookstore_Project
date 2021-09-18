import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="share">
          <a id="s" href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
          <a id="s" href="https://www.twitter.com/" className="fab fa-twitter"></a>
          <a id="s" href="https://www.instagram.com/" className="fab fa-instagram"></a>
          <a id="s" href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
          <a id="s" href="https://www.pinterest.com/" className="fab fa-pinterest"></a>
        </div>
        <div className="credit">
          Created by <span>Our Team</span> | all rights reserved
        </div>
      </div>
    );
  }
}
export default Footer;
