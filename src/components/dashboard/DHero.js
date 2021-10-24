import React, { Fragment } from "react";

import styled from "styled-components";

import HeroImageGeneral from "../../Images/vacas.jpg";
import Ironman from "../../Images/ironman.jpg";

const HeroStyled = styled.div`
  width: 90%;
  max-width: 1024px;
  border-radius: 10px 10px 0px 0px;
  background-color: #f5f5f5;
  position: relative;
  padding: 10px;
  margin: 0 auto;
`;

const HeroImage = styled.img`
  height: 130px;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${HeroImageGeneral});
`;

const HeroLogo = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #cccccc;
  border: 3px solid white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Ironman});
  position: relative;
  top: -25px;
  right: -25px;
`;

const DataPrincipal = styled.p`
  position: absolute;
  top: 150px;
  left: 120px;
  font-size: 2rem;
`;

const DHero = () => {
  return (
    <Fragment>
      <HeroStyled>
        <HeroImage></HeroImage>
        <HeroLogo></HeroLogo>
        <DataPrincipal>
          <span style={{ color: "steelblue", marginRight: "10px" }}>
            Aricko
          </span>{" "}
          <span> correo@gmail.com</span> <br />
          <span style={{ marginRight: "10px", fontSize: "1.5rem" }}>UX/UI</span>
        </DataPrincipal>
      </HeroStyled>
    </Fragment>
  );
};

export default DHero;
