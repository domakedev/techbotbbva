import React from "react";

//Import StyledComponents
import styled from "styled-components";

//Import Theme
import { Colores } from "../Theme.js";

const HeaderNav = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const ButtonPrincipal = styled.button`
  background-color: ${Colores.azulOscuro};
  color: ${Colores.blanco};
  margin-left: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ButtonSecundario = styled.button`
  background-color: ${Colores.primary};
  margin-left: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Botones = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderNav>
      <Logo src="https://cdn.worldvectorlogo.com/logos/bbva-2019.svg"></Logo>

      <Botones>
        <ButtonPrincipal>Registrate!</ButtonPrincipal>
        <ButtonSecundario>Iniciar Sesion</ButtonSecundario>
      </Botones>
    </HeaderNav>
  );
};

export default Header;
