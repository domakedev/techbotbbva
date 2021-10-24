import React from "react";

//Import StyledComponents
import styled from "styled-components";

//Import Theme
import { Colores } from "../Theme.js";

const LandingMainStyled = styled.main`
  height: calc(100vh - 200px);
  background-image: url("https://i.blogs.es/37ba66/trabajar-en-el-campo/650_1200.jpg");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  text-align: center;
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
    <LandingMainStyled>
      <h1>Bienvenido!</h1>
      <p>Desubre la mejor tecnologia para tu agronegocio</p>

      <ButtonAccionHero>Quiero conocer mas!</ButtonAccionHero>
    </LandingMainStyled>
  );
};

export default LandingMain;
