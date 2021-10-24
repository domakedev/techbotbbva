import React from 'react'

import styled from "styled-components";

//Import Theme
import { Colores } from "../../Theme";

const EmpresaBox = styled.div`
  width: 90%;
  max-width: 800px;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 10px;
  margin: 0 auto;
  margin-top: 50px;


  & h2{
      font-size: 3rem;
      text-align: center;
  }
`;

const DataBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;

  & h3{
      font-weight: normal;
      font-size: 2rem;
  };

  & div{
      background-color: white;
      font-size: 1.5rem;
      margin-top: 10px;
      padding: 10px;
      border-radius: 10px;

  }
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
  margin: 0 auto;
  text-align: center;
  width:50%;
  display: block;
`;

const DEmpresa = () => {
    return (
        <EmpresaBox>
            <h2>Data de tu  empresa</h2>

            <DataBox>
                <h3>Nombre</h3>
                <div>DesarrolloGio</div>
            </DataBox>

            <DataBox>
                <h3>Razon Social</h3>
                <div>ASDASD213213ASD213657</div>
            </DataBox>

            <DataBox>
                <h3>NIT</h3>
                <div>54546546546654</div>
            </DataBox>

            <DataBox>
                <h3>RUT</h3>
                <div>SA4D6AS54D6AS5D</div>
            </DataBox>

            <DataBox>
                <h3>Ciudad</h3>
                <div>Colombia</div>
            </DataBox>

            <DataBox>
                <h3>Representante Legal / Cedula / Foto</h3>
                <div>Sergio Aguilar / 26546ASD654 / Verificada</div>
            </DataBox>

            <DataBox>
                <h3>Socios</h3>
                <div>Fernando Gavidia</div>
            </DataBox>

            <DataBox>
                <h3>Ingresos mensuales</h3>
                <div>$10,000.00 USD</div>
            </DataBox>

            <DataBox>
                <h3>Cantidad de empleados</h3>
                <div>7</div>
            </DataBox>

<ButtonPrincipal>Editar</ButtonPrincipal>

        </EmpresaBox>
    )
}

export default DEmpresa
