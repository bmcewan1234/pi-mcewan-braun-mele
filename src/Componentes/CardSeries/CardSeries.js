import React, { Component } from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const CardSerie = (props) => {
  const [clase, setClase] = useState("no-mostrar");
  const [textoBoton, setTextoBoton] = useState("Ver descripcion");
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    let storage = localStorage.getItem("favoritos");
    if (storage !== null) {
      let storageParseado = JSON.parse(storage);
      let estaEnFav = storageParseado.includes(Number(props.serie.id));
      setFavorito(estaEnFav);
    }
  }, [props.serie.id]);

  const ocultar = () => {
    if (clase === "no-mostrar") {
      setClase("mostrar");
      setTextoBoton("Ocultar descripcion");
    } else {
      setClase("no-mostrar");
      setTextoBoton("Ver descripcion");
    }
  };

  const agregarFav = () => {
    let idFav = props.serie.id;
    let storage = localStorage.getItem("favoritos");
    if (storage != null) {
      let storageParse = JSON.parse(storage);
      storageParse.push(idFav);
      let storageString = JSON.stringify(storageParse);
      localStorage.setItem("favoritos", storageString);
      setFavorito(true);
    } else {
      let arrayIDs = [];
      arrayIDs.push(idFav);
      let arrayString = JSON.stringify(arrayIDs);
      localStorage.setItem("favoritos", arrayString);
      setFavorito(true);
    }
  };

  const sacarFav = () => {
    let idFav = props.serie.id;
    let storage = localStorage.getItem("favoritos");
    if (storage !== null) {
      let storageParseado = JSON.parse(storage);
      let storageFiltrado = storageParseado.filter(id => id !== idFav);
      let storageString = JSON.stringify(storageFiltrado);
      localStorage.setItem("favoritos", storageString);
      setFavorito(false);
    }
  };

  return (
    <article className="single-card-movie">
      <img
        src={"https://image.tmdb.org/t/p/w342/" + props.serie.poster_path}
        alt={props.serie.title}
      />
      <div className="cardBody">
        <h2>{props.serie.title}</h2>

        <div className="card-buttons">
          <button onClick={() => ocultar()}>
            {textoBoton}
          </button>
        </div>

        <div className={clase + " card-text"}>
          <p>{props.serie.overview}</p>
        </div>

        <div className="card-buttons">
          <Link to={"/detalleSerie/" + props.serie.id}>
            <button className="btn btn-primary">Ir a detalle</button>
          </Link>
        </div>

        <div className="card-buttons">
          <button
            className={favorito === true ? "no-mostrar" : ""}
            onClick={() => agregarFav()} > Agregar a Favoritos </button>
          <button
            className={favorito === false ? "no-mostrar" : ""}
            onClick={() => this.sacarFav()} > Quitar de Favoritos </button>
        </div>
      </div>
    </article>
  )
}

export default CardSerie

