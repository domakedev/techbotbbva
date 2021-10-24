import React, { Fragment } from "react";

//import logo from "./logo.svg";
import "./App.css";

//Import Layouts
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LandingMain from "./components/LandingMain";

//Import StyledComponents
import styled from "styled-components";

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Fragment>
      <ContainerMain>
        <Header></Header>
        <LandingMain></LandingMain>
        <Footer></Footer>
      </ContainerMain>
    </Fragment>
  );
}

export default App;
