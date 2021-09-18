import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default class Login extends React.Component {
  state = {
    id: "",
    mail: "",
    password: "",
  };

  componentWillMount() {
    let loginData = JSON.parse(window.localStorage.getItem("loginData"));
    if (loginData === null) {
      this.props.history.push("/Login");
      console.log(loginData);
    } else {
      axios
        .get(`http://localhost:3000/registers/${loginData.id}`)
        .then((res)=> {
          if (
            loginData.mail === res.data.mail &&
            loginData.password === res.data.password
          ) {
            console.log("correct");
            this.props.history.push("/");
          } else {
            console.log("invalid mail or password");
            this.props.history.push("/Login");
          }
        })
        .catch((e) => {
          console.log("user not found");
          this.props.history.push("/Login");
        });
    }
  }
  
  saveLogin = () => {
    let loginData = {
      id: this.state.id,
      mail: this.state.mail,
      password: this.state.password,
    };
    window.localStorage.setItem("loginData", JSON.stringify(loginData));
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="log" id="login">
        <form className="form">
          <label htmlFor="mail">Email</label>
          <br />
          <input
            className="form-control"
            type="text"
            name="mail"
            value={this.state.mail}
            onChange={(e) =>
              this.setState({
                mail: e.target.value,
              })
            }
          />
          <br />
          <label htmlFor="pass">password</label>
          <br />
          <input
            className="form-control"
            type="password"
            name="pass"
            value={this.state.password}
            onChange={(e) =>
              this.setState({
                password: e.target.value,
              })
            }
          />
          <br />
          <input
            type="button"
            id="button"
            className="btn btn-secondary"
            value="Log in"
            onClick={this.saveLogin}
          />
          <span className="no">
            {" "}
            no account? Register Now from &nbsp;
            <Link to="/Register" id="a">
              here
            </Link>
          </span>
        </form>
      </div>
    );
  }
}
