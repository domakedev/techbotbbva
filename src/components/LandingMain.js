import React, { Fragment } from "react";

//Import StyledComponents
import styled from "styled-components";

//Import Theme
import { Colores } from "../Theme.js";

//Import Layouts
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import edificios from "../Images/edificios.jpg"
//Link para comunicacion
//import { Link } from 'react-router-dom'


// const ContainerMain = styled.main`
//   display: flex;
//   flex-direction: column;
// `;

const LandingMainStyled = styled.main`
  height: calc(100vh - 200px);
  background-image: url(${edificios});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  text-align: center;
  & h1{
  filter: brightness(100%);
  };
  & p{
    font-weight: bold;
  }
`;

const ButtonAccionHero = styled.button`
  background-color: ${Colores.azulOscuro};
  color: ${Colores.blanco};
  margin-left: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 50px;
  font-size: 2rem;
`;

const LandingMain = () => {
  return (
    <Fragment>
        <Header></Header>
      <LandingMainStyled>
        <h1>Bienvenido</h1>
        <p>A la cuenta 100% digital para tu negocio!</p>




      </LandingMainStyled>
      <Footer></Footer>
    </Fragment>
  );
};

export default LandingMain;
