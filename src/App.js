import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importar auth componentes
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/LandingMain";

//import logo from "./logo.svg";
import "./App.css";






function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/nueva-cuenta" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
