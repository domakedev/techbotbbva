import React from "react";

//Import StyledComponents
import styled from "styled-components";

//Import Theme
import { Colores } from "../Theme.js";

const FooterStyled = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
  background-color: ${Colores.blanco};
  padding-bottom: 5px;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p class="footer_text">Creado con pasion por el equipo de TechBot.🤟🦾</p>
    </FooterStyled>
  );
};

export default Footer;
