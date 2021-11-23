import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MeusFilmes from "../componentes/MeusFilmes";
import Home from "../Pages/Home";
import PaginaDetalhe from "../Pages/PaginaDetalhe/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/FilmeDetalhe/:id" exact component={PaginaDetalhe} />
        <Route path="/MeusFilmes" exact component={MeusFilmes} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
