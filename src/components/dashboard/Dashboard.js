import React from 'react'

//import de layouts
import DHero from "./DHero"
import DVentas from "./DVentas"
import DEmpresa from "./DEmpresa"
import DCard from "./DCard"

import Header from "../../layout/Header"

import styled from 'styled-components'

import {Colores} from "../../Theme"

//Link para comunicacion
import { Link } from "react-router-dom";

const HeroContainer = styled.div`
    width: 90vw;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LinkStyled = styled(Link)`
  color: ${Colores.blanco};
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;

const BotonesTYC = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width: 90%;
max-width: 500px;
margin: 0 auto;

& button {
    margin-top: 40px;
    background-color: ${Colores.azulClaro};
  color: ${Colores.blanco};
  margin-left: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
}
`

const Dashboard = () => {
    return (
        <HeroContainer>
            <Header autenticado={true}/>
            <DHero></DHero>
            <DCard></DCard>
            <BotonesTYC>
                <button>
                <LinkStyled to={"/transacciones"}>VER TRANSACCIONES</LinkStyled>
                </button>

                <button><LinkStyled to={"/cursos"}>TOMAR CURSOS GRATIS</LinkStyled></button>
            </BotonesTYC>
            <DVentas></DVentas>
            <DEmpresa></DEmpresa>

        </HeroContainer>
    )
}

export default Dashboard
