import React from "react";

import styled from "styled-components";

const VentasBox = styled.div`
  width: 90%;
  max-width: 800px;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 10px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Data = styled.div`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const Venta = styled.div`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & span{
      font-size: 1.5rem;
      font-weight: 300;
  }
`;

const DVentas = () => {
  return (
    <VentasBox>
      <Data>
        <Venta>
            <p>150</p> <span>Ventas</span>
        </Venta>
        <Venta>
            <p>21</p> <span>Contactos</span>
        </Venta>
        <Venta>
            <p>5</p> <span>Mensajes</span>
        </Venta>
        
      </Data>
    </VentasBox>
  );
};

export default DVentas;
