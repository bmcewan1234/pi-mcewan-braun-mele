import React, { useState, useEffect } from "react";
import CardPeli from "../Cardpeli/Cardpeli.js";

const apikey = "2793aaadf72ebc55a67c09e7919aa668";

    function PeliCartelera(props){
    const [peliculas, setPeliculas] = useState([]);

    useEffect( () => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apikey)
            .then( response => response.json() )
            .then( data => setPeliculas(data.results))
            .catch( error => console.log(error))
    }, [])

    
        return (
            <React.Fragment>
                <h1>Peliculas en cartelera</h1>
                <div className="row cards" id="movies">
                    {peliculas.map((pelicula) => (
                        <CardPeli
                            key={pelicula.id}
                            pelicula={pelicula}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
}

export default PeliCartelera;
