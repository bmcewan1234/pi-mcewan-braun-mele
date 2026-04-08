import React from "react";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Screen/Home/Home";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Home />
        <Footer />
      </React.Fragment>
    </BrowserRouter>

  );
}


export default App;
