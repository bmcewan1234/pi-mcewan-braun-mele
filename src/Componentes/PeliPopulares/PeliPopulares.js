import React, { useState, useEffect } from "react";
import CardPeli from "../Cardpeli/Cardpeli.js";

const apikey = "2793aaadf72ebc55a67c09e7919aa668";

function SeccionPelisPopulares(props){
    const [peliculas, setPeliculas] = useState([]);

    useEffect( () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apikey)
            .then( response => response.json() )
            .then( data => setPeliculas(data.results))
            .catch( error => console.log(error))
    }, [])


        return (
            <h1>Peliculas mas populares</h1>,
            <div className="row cards" id="movies">
                {peliculas.map((pelicula) => (
                    <CardPeli
                        key={pelicula.id}
                        pelicula={pelicula}
                    />
                ))}
            </div>
        );
    }


export default SeccionPelisPopulares;
