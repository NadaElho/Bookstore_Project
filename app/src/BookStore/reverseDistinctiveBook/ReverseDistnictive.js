import React, { Component } from "react";
import "../Distinctive_Book/DistinctiveBook.css";
import "bootstrap/dist/css/bootstrap.min.css";

import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
class ReverseDistinctiveBook extends Component {
  render() {
    return (
      <div
        id="dist"
        className="container-fluid"
        style={{ marginBottom: "200px" }}
      >
        <div className="row DistinctiveBook">
          <div className="col-lg-4 col-md-6 col-sm-12 DistinctiveBook_content">
            <p className="lead" id="pd">
              Reading is important in human life a lot. We need to read a lot.
              Reading improves our knowledge. It helps to know and learn new
              things. And that’s why we all need to read a lot. When you read a
              good book, it improves your mental growth and let you be creative.
              It comes with so many ideas and you will get good goals in your
              life.
            </p>
           
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 ">
            <div className="DistinctiveBook_container">
              <img src={img5} alt=" " className="img-fluid img-thumbnail" />
              <img src={img6} alt=" " className="img-fluid img-thumbnail" />
              <img src={img7} alt=" " className="img-fluid img-thumbnail" />
              <img src={img8} alt=" " className="img-fluid img-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReverseDistinctiveBook;
