import React from "react";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Screen/Home/Home";
import Buscador from "./Componentes/Buscador/Buscador";




function App() {
  return (    
      <React.Fragment>
        <Header />
        <Home />
        <Buscador />
        <Footer />
      </React.Fragment>
  );
}


export default App;
