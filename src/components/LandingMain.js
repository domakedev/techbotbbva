import React from "react";

//Import StyledComponents
import styled from "styled-components";

const LandingMainStyled = styled.main`
  height: calc(100vh - 200px);
`;

const LandingMain = () => {
  return <LandingMainStyled>Landing Main</LandingMainStyled>;
};

export default LandingMain;
