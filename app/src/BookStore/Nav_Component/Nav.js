import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav_Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Nav,
  Button,
} from "react-bootstrap";
window.jquery = $;
class NavBar extends Component {
  componentDidMount() {
    $(".navbar-nav a").on("click", function () {
      $(".navbar-nav a").removeClass("active");
      $(this).addClass("active");
    });
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top py-1">
        <Navbar.Brand href="#Gal">
        Distinguished <span className="d-inline-block">Readers</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ margin: "auto" }} className="Nav_ul">
            <Nav.Link href="#Home">Home</Nav.Link>
            <NavDropdown title="Gallary" >
              <NavDropdown.Item href="#Eng" id="l">English Books</NavDropdown.Item>
              <NavDropdown.Item href="#Ara" id="l">Arabic Books</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#dist">BestSeller</Nav.Link>
            <Nav.Link as={Link} to="/Login">
              Log in
            </Nav.Link>
            <Nav.Link as={Link} to="/Register">
                Sign Up
            </Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/Cart">
              <i className="fas fa-shopping-cart"></i>
          </Nav.Link> 
        </Navbar.Collapse>        
      </Navbar>
    );
  }
}
export default NavBar;
