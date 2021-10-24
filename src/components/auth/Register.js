import React, { useState, useContext, useEffect, Fragment } from "react";

import authContext from "../../context/autenticacion/authContext";


//Import StyledComponents
import styled from "styled-components";

//Import Theme
import { Colores } from "../../Theme";

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
  padding: 50px;
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

const Register = (props) => {

  //Config context de auth para traer states y funciones
  const {
    //States
    //Funciones
    registrarUsuario
  } = useContext(authContext);


  const [usuario, guardarUsuario] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password} = usuario;


  const onChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    guardarUsuario({
        ...usuario,
        [ name ]: value,
    })
}

  const onSubmit = () => {
    //Comprobar que no esten vacio los datos del usuario
    if (usuario.name.trim() === "" || usuario.email.trim() === "" || usuario.password.trim() === "") {
      //controlarAlerta("No dejes campos vacios", "alerta-error");
      alert("Please no dejes campos vacios")
      return;
    }

    //Enviar datos a App principal
    //iniciarSesion({ email, password });
    //alert("Completaste los datos correctamente")

    //Enviar datos a App principal, pasarlo al Action!
    console.log(usuario);
    registrarUsuario({ name, email, password});

   
  };

  return (
    <ConainterStyled>
      <LoginStyled>
        <Title>Registrate</Title>

        <Label htmlFor="name">
          Nombre <Input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={usuario.name}
                    onChange={onChange}
        
                    />
        </Label>

        <Label htmlFor="email">
          Email <Input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu email"
                    value={usuario.email}
                    onChange={onChange}
        
                    />
        </Label>

         <Label htmlFor="password">
         Password <Input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Tu password"
                    value={usuario.password}
                    onChange={onChange}
        
                    />
        </Label>

        <ButtonCrearCuenta onClick={() => onSubmit()}>
          Crear Cuenta
        </ButtonCrearCuenta>
      </LoginStyled>
    </ConainterStyled>
  );
};

export default Register;
