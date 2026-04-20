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
import PeliCartelera from "./Componentes/PeliCartelera/PeliCartelera.js";
import SeriesCartelera from "./Componentes/SeriesCartelera/SeriesCartelera.js";
import SearchResults from "./Screen/SearchResults/SearchResults";
import DetallePeli from "./Screen/DetallePeli/DetallePeli"; 
import DetalleSerie from "./Screen/DetalleSerie/DetalleSerie";  
import ScreenPeliculas from "./Screen/ScreenPeliculas/ScreenPeliculas.js";
import ScreenSeries from "./Screen/ScreenSeries/ScreenSeries.js"; 



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
        <Route path="/detallePeli/:id" component={DetallePeli} /> 
        <Route path="/detalleSerie/:id" component={DetalleSerie} />
        <Route path="/cartelPeli" component={PeliCartelera} />
        <Route path="/cartelSerie" component={SeriesCartelera} />  
        <Route path="/peliculas" component={ScreenPeliculas} />
        <Route path="/series" component={ScreenSeries} />
      </Switch>

      <Footer />
    </>
  );
}


export default App;
