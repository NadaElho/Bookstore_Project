import React from "react";
import axios from "axios";

import { Button } from "react-bootstrap";
import "./Cart.css";

export default class Cart extends React.Component {
  state = {
    id: "",
    src: "",
    price: "",
    count: "",
    title: "",
    cartList: [],
  };

  componentDidMount() {
    this.getData();
  }
 
  getData = () => {
    axios("http://localhost:3000/cart").then((res) => {
      this.setState({
        cartList: res.data,
      });
      console.log(res.data);
    });
  };
  Del = (_id) => {
    axios.delete(`http://localhost:3000/cart/${_id}`).then((res) => {
      console.log(res.data);
      this.getData();
    });
  };

  render() {
    return (
      <div>
        <table className="table table-hover table-responsive">
          {this.state.cartList.map((pr, index) => {
            return (
              <tbody>
                <tr>
                  <th className="align-middle" scope="row">{index + 1}</th>
                  <td className="align-middle">{<img id="image" src={pr.src} alt=" " />}</td>
                  <td className="align-middle">{pr.title}</td>
                  <td className="align-middle">{pr.price}</td>
                  <td className="align-middle">
                    <i
                      className="fas fa-trash"
                      onClick={() => this.Del(pr.id)}
                    ></i>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <br />
        <Button
          type="button"
          className="btn btn-outline-warning text-center"
          id="bit"
          onClick={this.order}
        >
          Order Now
        </Button>
      </div>
    );
  }
}
