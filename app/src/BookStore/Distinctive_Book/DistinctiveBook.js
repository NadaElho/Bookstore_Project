import React, { Component } from "react";
import "./DistinctiveBook.css";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
class DistinctiveBook extends Component {
  render() {
    return (
      <div
        id="dist"
        className="container-fluid"
        style={{ marginBottom: "200px" }}
      >
        <div className="row DistinctiveBook">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="DistinctiveBook_container">
              <img src={img1} alt=" " className="img-fluid img-thumbnail" />
              <img src={img2} alt=" " className="img-fluid img-thumbnail" />
              <img src={img3} alt=" " className="img-fluid img-thumbnail" />
              <img src={img4} alt=" " className="img-fluid img-thumbnail" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 DistinctiveBook_content">
            <p className="lead" id="pd">
              Reading is important because it develops our thoughts, gives us
              endless knowledge and lessons while keeping our minds active.
              Books can hold and keep all kinds of information, stories,
              thoughts and feelings unlike anything else in this world. The
              importance of a book to help us learn and understand things cannot
              be underestimated.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DistinctiveBook;
