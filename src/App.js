import React from "react";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Screen/Home/Home";
import Buscador from "./Componentes/Buscador/Buscador";
import Login from "./Screen/login/login";
import Register from "./Screen/register/register";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";




function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/search/" component={Buscador} />
        
        <Home />
        <Buscador />
        <Login />
        <Register />

      </Switch>
      <Footer />
    </>
  );
}


export default App;
