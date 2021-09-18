import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./ReadStyle.css"

class ReadMore extends React.Component {
  state = {
    Pid: this.props.location.CurrentObject.id,
    Pprice: this.props.location.CurrentObject.price,
    Pcontent: this.props.location.CurrentObject.content,
    Ptitle: this.props.location.CurrentObject.title,
    Psrc: this.props.location.CurrentObject.src,
  };
  Read = () => {
    var lastId = this.props.location.CurrentObject.id;
    this.props.location.CurrentObject.id = this.state.Pid;
    this.props.location.CurrentObject.price = this.state.Pprice;
    this.props.location.CurrentObject.content = this.state.Pcontent;
    this.props.location.CurrentObject.title = this.state.Ptitle;
    this.props.location.CurrentObject.src = this.state.Psrc;
    this.props.location.SavingRef(this.props.location.CurrentObject, lastId);
    this.props.history.push("/");
  };
  getData = () => {
    axios("http://localhost:3000/cart").then((res) => {
      this.setState({
        posts: res.data,
      });
      console.log(res.data);
    });
  };
 SavingAdd = () => {
   if(localStorage.getItem("loginData")==null){
     this.props.history.push("/Login");
   }else{
    var lastId = this.props.location.CurrentObject.id;
    this.props.location.CurrentObject.id = this.state.Pid;
    this.props.location.CurrentObject.price = this.state.Pprice;
    this.props.location.CurrentObject.title = this.state.Ptitle;
    this.props.location.CurrentObject.src = this.state.Psrc;
    this.props.location.CurrentObject.count = this.state.Pcount;
    this.props.location.SavingRef(this.props.location.CurrentObject, lastId);
    this.props.history.push("/");
    let newpr = {
      id: this.state.Pid,
      src: this.state.Psrc,
      price: this.state.Pprice,
      title: this.state.Ptitle,
      count: this.state.Pcount,
    };

    axios
      .post("http://localhost:3000/cart", newpr)
      .then((res) => {
        console.log(res);
        this.getData();
      })
      .catch((Error) => {
        console.log(Error);
      });}
  };
  render() {
    return (
      <div className="Bookitem text-center ">
        <img
          className="img-fluid img-thumbnail"
          src={this.state.Psrc}
          alt=" "
        />
        <div className="Bookcontent">
          <h4>{this.state.Ptitle}</h4>
          <p className=" mt-3">
            Price: <span>{this.state.Pprice}</span>&nbsp;&nbsp;
            <p>{this.state.Pcontent}</p>
          </p>
        </div>
        <Button
          id="bt"
          type="button"
          variant="outline-danger"
          onClick={this.Read}
        >
          Go to Home
        </Button>
        <Button
          type="button"
          variant="outline-info"
          onClick={this.SavingAdd}
        >
          Add to Cart
        </Button>
      </div>
    );
  }
}

export default ReadMore;
