import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./HomeStyle.css";
class Home extends Component {

  render() {
    return (
      <div className="background_image" id="Home">
        <div className="background_img"></div>
        <div className="background_content text-center">
          <p className="lead">Online Bookstore</p>
          <h3> Order now and have your books</h3>
          <a href="#Gal" className="link">
            <Button id="but" variant="outline-danger">
              Explore
            </Button>
          </a>
        </div>
      </div>
    );
  }
}
export default Home;
