import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importar auth componentes
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/LandingMain";

//import logo from "./logo.svg";
import "./App.css";

//authContextState
import AuthState from "./context/autenticacion/authState";


function App() {

  console.log(process.env.REACT_APP_API_KEY);

  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/nueva-cuenta" component={Register} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
