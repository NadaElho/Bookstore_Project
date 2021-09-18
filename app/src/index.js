import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./BookStore/Nav_Component/Nav";
import Home from "./BookStore/Home_Component/Home";
import Slider from "./BookStore/Slider_Book/Slider_Book";
import Gallery from "./BookStore/Books_Component/Gallary";
import ReadMore from "./BookStore/ReadMore/ReadMore";
import Dist from "./BookStore/Distinctive_Book/DistinctiveBook";
import Rever from "./BookStore/reverseDistinctiveBook/ReverseDistnictive";
import AboutUs from "./BookStore/About_Us/AboutUs";
import ContactUs from "./BookStore/Contact_Us/ContactUs";
import Footer from "./BookStore/footer/footer";
import Login from "./BookStore/Login_Register/Login";
import Register from "./BookStore/Login_Register/Register";
import Cart from "./BookStore/Cart/Cart";
import AddItem from "./BookStore/Cart/AddItem";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Route component={() => <Home />} path="/" exact  />
    <Route component={() => <Slider />} path="/" exact />
    <Route component={() => <Gallery />} path="/" exact />
    <Route component={() => <Dist />} path="/" exact />
    <Route component={() => <Rever />} path="/" exact />
    <Route component={() => <AboutUs />} path="/" exact />
    <Route component={() => <ContactUs />} path="/" exact />
    <Route component={() => <Footer />} path="/" exact />

    <Switch>
      <Route component={Cart} path="/Cart" />
      <Route component={AddItem} path="/AddItem" />
      <Route path="/Login" render={(props) => <Login {...props} />} />
      <Route component={Gallery} path="/Gallery" />
      <Route component={Register} path="/Register" />
      <Route component={ReadMore} path="/ReadMore" />
      <Route component={AboutUs} path="/AboutUs" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
