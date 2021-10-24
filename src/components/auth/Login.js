import React, { useState, useContext } from "react";

import authContext from "../../context/autenticacion/authContext";

//Import StyledComponents
import styled from "styled-components";

//Import Theme
import { Colores } from "../../Theme";

//Link para comunicacion
import { Link } from "react-router-dom";

const ConainterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${Colores.verde};
`;

const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 30px 40px;
`;

const Title = styled.h1`
  color: ${Colores.azulOscuro};
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: ${Colores.azulOscuro};
  font-size: 1.5rem;
  margin-top: 10px;
  width: min-content;
`;

const Input = styled.input`
  color: ${Colores.azulOscuro};
  font-size: 1.5rem;
  margin-top: 10px;
  width: min-content;
  border: 2px solid ${Colores.azulOscuro};
  border-radius: 3px;
  padding: 10px;
`;

// const TextoIniciarSesion = styled.p`
//   color: ${Colores.azulOscuro};
//   margin-bottom: 20px;
//   text-decoration: underline;
//   font-size: 1.5rem;
//   margin-top: 10px;
// `;

const ButtonCrearCuenta = styled.button`
  background-color: ${Colores.azulOscuro};
  color: ${Colores.blanco};
  margin-left: 20px;
  margin-top: 20px;
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;

// const LinkStyled = styled(Link)`
//   padding: 10px;
//   border-radius: 5px;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   text-decoration: none;
// `;

const Login = (props) => {
  //Config context de auth para traer states y funciones
  const {
    //States
    //Funciones
    iniciarSesion,
  } = useContext(authContext);

  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    guardarUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const onSubmit = () => {
    //Comprobar que no esten vacio los datos del usuario
    if (usuario.email.trim() === "" || usuario.password.trim() === "") {
      //controlarAlerta("No dejes campos vacios", "alerta-error");
      alert("Please no dejes campos vacios");
      return;
    }


    //Enviar datos a App principal, pasarlo al Action!
    console.log(usuario);
    iniciarSesion({ email, password });
  };

  return (
    <ConainterStyled>
      <LoginStyled>
        <Title>Inicia Sesion</Title>

        <Label htmlFor="email">
          Email{" "}
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Tu email"
            value={usuario.email}
            onChange={onChange}
          />
        </Label>

        <Label htmlFor="password">
          Password{" "}
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Tu password"
            value={usuario.password}
            onChange={onChange}
          />
        </Label>

        <ButtonCrearCuenta onClick={() => onSubmit()}>
          Iniciar Sesion
        </ButtonCrearCuenta>
      </LoginStyled>
    </ConainterStyled>
  );
};

export default Login;
