import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CardPeli = (props) => {
    const [ver, setVer] = useState("Ver descripcion");
    const [clase, setClase] = useState("no-mostrar");
    const [favorito, setFavorito] = useState(false);

    useEffect(() => {
        let storage = localStorage.getItem("favoritosP");
        if (storage !== null) {
            let storageParseado = JSON.parse(storage);
            let estaEnFav = storageParseado.includes(Number(props.pelicula.id));
            setFavorito(estaEnFav);
        }
    }, [props.pelicula.id]);

    const ocultar = () => {
        if (ver === "Ver descripcion") {
            setVer("Ocultar descripcion");
            setClase("mostrar");
        } else {
            setVer("Ver descripcion");
            setClase("no-mostrar");
        }
    };

    const agregarFavP = () => {
        let idFav = props.pelicula.id;
        let storage = localStorage.getItem("favoritosP");
        if (storage != null) {
            let storageParse = JSON.parse(storage);
            storageParse.push(idFav);
            let storageString = JSON.stringify(storageParse);
            localStorage.setItem("favoritosP", storageString);
            setFavorito(true);
        } else {
            let arrayIDs = [];
            arrayIDs.push(idFav);
            let arrayString = JSON.stringify(arrayIDs);
            localStorage.setItem("favoritosP", arrayString);
            setFavorito(true);
        }
    };

    const sacarFavP = () => {
        let idFav = props.pelicula.id;
        let storage = localStorage.getItem("favoritosP");
        if (storage !== null) {
            let storageParseado = JSON.parse(storage);
            let storageFiltrado = storageParseado.filter(id => id !== idFav);
            let storageString = JSON.stringify(storageFiltrado);
            localStorage.setItem("favoritosP", storageString);
            setFavorito(false);
        }
    };

    return (
        <article className="single-card-movie">
            <img src={"https://image.tmdb.org/t/p/w342/" + props.pelicula.poster_path} alt={props.pelicula.title} />

            <div className="cardBody">
                <h2>{props.pelicula.title}</h2>

                <div className="card-buttons">
                    <button onClick={ocultar}>{ver}</button>
                </div>

                <div className={clase + " card-text"}>
                    <p>{props.pelicula.overview}</p>
                </div>

                <div className="card-buttons">
                    <Link to={props.tipo === "tv" ? `/detalleSerie/${props.pelicula.id}` : `/detallePeli/${props.pelicula.id}`}>
                        <button className="btn btn-primary">Ir a detalle</button>
                    </Link>
                </div>
                <div className="card-buttons">
                    <button
                        className={favorito === true ? "no-mostrar" : ""}
                        onClick={agregarFavP}
                    >
                        Agregar a Favoritos
                    </button>
                    <button
                        className={favorito === false ? "no-mostrar" : ""}
                        onClick={sacarFavP}
                    >
                        Quitar de Favoritos
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CardPeli;


    