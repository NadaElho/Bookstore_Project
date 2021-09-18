import { BrowserRouter, Route,Link } from "react-router-dom";

   import React from "react";
   import ReactDOM from "react-dom";
   import Home from "./Home_Component/Home";
   import Slider from "./Slider_Book/Slider_Book";
   import Gallery from "./Books_Component/Gallary";
   import ReadMore from "./ReadMore/ReadMore";
   import Dist from "./Distinctive_Book/DistinctiveBook";
   import Rever from "./reverseDistinctiveBook/ReverseDistnictive";
   import AboutUS from "./About_Us/AboutUs";
   import ContactUs from "./Contact_Us/ContactUs";
   import Footer from "./footer/footer";
   import Login from "./Login_Register/Login";
   import Register from "./Login_Register/Register";
   
   

   function App() {
    return (
      <div className="App">
           <BrowserRouter>
          
            <Route path="/" exact component={() => <Home />} />
            <Route component={() => <Slider />} path="/" exact />

            <Route component={() => <Gallery />} path="/" exact />
            <Route component={() => <Dist />} path="/" exact />
            <Route component={() => <Rever />} path="/" exact />
            <Route component={() => <AboutUS />} path="/" exact />
            <Route component={() => <ContactUs />} path="/" exact />
            <Route component={() => <Footer />} path="/" exact />

            <Route path="/Home" exact component={() => <Home />} />
            <Route path="/AboutUs" exact component={() => <AboutUS />} />
            <Route path="/ContactUs" exact component={() => <ContactUs />} />
            <Route component={() => <Register/>} path="/Register" exact />
            <Route component={() => <Login/>} path="/Login" exact />
            <Route component={() => <Dist/>} path="/Dist" exact />
            <Route component={() => <Gallery />} path="/Gallery" exact />
            {/* <Route component={() => <ReadMore />} path="/ReadMore" exact /> */}

           
           </BrowserRouter>        
      </div>
    );
  }
  
  export default App;