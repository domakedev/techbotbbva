import React from "react";

import Card from "../../Images/ww.jpeg";

import styled from "styled-components";



const CarContainer = styled.div`
width: 90%;
  max-width: 1024px;
  border-radius: 10px;
  margin: 0 auto;
`

const CardImg = styled.img`
width: 100%;
border-radius: 10px;
  margin: 0 auto;
  margin-top: 50px;
`;

const DCard = () => {
  return (
    <CarContainer>
      <CardImg src={Card} alt="" />
    </CarContainer>
  );
};

export default DCard;
