import React from "react";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Screen/Home/Home";
import Buscador from "./Componentes/Buscador/Buscador";
import Login from "./Screen/login/login";
import Register from "./Screen/register/register";
import { Route, Switch } from "react-router-dom";
import SeccionSeriesPopulares from "./Componentes/SeriesPopulares/SeriesPopulares";
import SeccionPelisPopulares from "./Componentes/PeliPopulares/PeliPopulares";
import SearchResults from "./Screen/SearchResults/SearchResults";
import DetallePeli from "./Screen/DetallePeli/DetallePeli"; 
import DetalleSerie from "./Screen/DetalleSerie/DetalleSerie";  




function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/peliculasPop" component={SeccionPelisPopulares} />
        <Route path="/seriesPop" component={SeccionSeriesPopulares} />
        <Route path="/search/:nombre/:tipo" component={SearchResults} />
        <Route path="/detallePeli" component={DetallePeli} /> 
        <Route path="/detalleSerie" component={DetalleSerie} />
      </Switch>
      <Buscador />
      <Footer />
    </>
  );
}


export default App;
