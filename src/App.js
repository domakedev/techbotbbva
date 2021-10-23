//import logo from "./logo.svg";
import "./App.css";

//Import Layouts
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LandingMain from "./components/LandingMain";

import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <LandingMain></LandingMain>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
