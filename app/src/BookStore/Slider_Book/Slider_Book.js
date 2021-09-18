import React, { Component } from "react";
import "./SliderStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import img1 from "../img/img1.jpg";
import img2 from "../img/img8.jpg";
import img3 from "../img/img13.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
class Slider extends Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={img5} className="d-block w-100"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img6} className="d-block w-100"></img>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
