import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GallaryStyle.css";
import "./bootstrap.css";
import { Button } from "react-bootstrap";

export default class Gallery extends React.Component {
  state = {
    id: "",
    price: "",
    title: "",
    content:"",
    Count:"",
    src: "",
    ProductList:[]
  };

  componentDidMount() {
    this.getData();
    this.getdata();
  }

  getData = () => {
    axios("http://localhost:3000/Araproducts").then((res) => {
      this.setState({
        ProductList: res.data,
      });
      console.log(res.data);
    });
  };
  Saving = (_id, EditObject) => {
    axios
      .put(`http://localhost:3000/Araproducts/${_id}`, EditObject)
      .then((res) => {
        console.log(res);
        this.getData();
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  getdata = () => {
    axios("http://localhost:3000/Engproducts").then((res) => {
      this.setState({
        productList: res.data,
      });
      console.log(res.data);
    });
  };
  saving = (_id, EditObject) => {
    axios
      .put(`http://localhost:3000/Engproducts/${_id}`, EditObject)
      .then((res) => {
        console.log(res);
        this.getdata();
      })
      .catch((Error) => {
        console.log(Error);
      });
  };


  render() {
    if (!this.state.productList) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <div className="container Book_containers" id="Gal">
            <div className="Gallary_content text-center">
              <h6 className="mb-2" id="Eng">
                Gallary of Books: You Can Read And Buy??
              </h6>
            </div>
            <div className="Book">
              <div className="row">
                {this.state.productList.map((pr) => {
                  return (
                    <div key={pr.id} className="Book_item text-center col-lg-4 col-md-6 col-sm-12">
                      <img
                        className="img-fluid img-thumbnail"
                        src={pr.src}
                        alt=" "
                      />
                      <div className="Book_content">
                        <h4>{pr.title}</h4>
                        <p className=" mt-3">
                          Price: <span>{pr.price}</span>&nbsp;&nbsp;
                          <Link
                            id="li"
                            to={{
                              pathname: "/ReadMore",
                              SavingRef: this.saving,
                              CurrentObject: pr,
                            }}
                          >
                            ReadMore
                          </Link>
                        </p>
                        <Button className="btn btn-info btn-outline-info mb-2 " >
                        <Link id="link"
                            to={{
                              pathname: "/AddItem",
                              SavingRef: this.saving,
                              CurrentObject: pr,
                            }}
                          >
                          Add To Cart
                          </Link>
                        </Button>
                      </div>
                    </div>
                  );
                })}
                <div id="Ara"></div>
                {this.state.ProductList.map((pr) => {
                  return (
                    <div key={pr.id} className="Book_item text-center col-lg-4 col-md-6 col-sm-12">
                      <img
                        className="img-fluid img-thumbnail"
                        src={pr.src}
                        alt=" "
                      />
                      <div className="Book_content">
                        <h4>{pr.title}</h4>
                        <p className=" mt-3">
                          Price: <span>{pr.price}</span>&nbsp;&nbsp;
                          <Link
                            id="li"
                            to={{
                              pathname: "/ReadMore",
                              SavingRef: this.Saving,
                              CurrentObject: pr,
                            }}
                          >
                            ReadMore
                          </Link>
                        </p>
                        <Button className="btn btn-info btn-outline-info mb-2" onClick={this.SavingAdd}>
                        <Link id="link"
                            to={{
                              pathname: "/AddItem",
                              SavingRef: this.Saving,
                              CurrentObject: pr,
                            }}
                          >
                          Add To Cart
                          </Link>
                         
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
