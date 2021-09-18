import React, { Component } from "react";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
class AboutUs extends Component {
  render() {
    return (
      <div id="about">
        <div className="About_image">
          <div className="">
            <h3>Distinguished Readers Library</h3>
            <p className="lead">
              Distiguished Readers Library is one of the most unique
              electronic libraries in the world and contains many distinguished
              books in all different fields , The Library preserves and provides
              access to a rich, diverse and enduring source of knowledge to
              inform, inspire and engage you in your intellectual and creative
              end eavors.There are <a href="#Eng">English</a> and <a href="#Ara">Arabic</a> Books
            </p>
            <a href="#Gal"><Button id="but" variant="outline-danger">
              For more information
            </Button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
