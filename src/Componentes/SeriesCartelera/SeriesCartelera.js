import React, { useState, useEffect } from "react";
import CardSerie from "../CardSeries/CardSeries.js";

const apikey = "2793aaadf72ebc55a67c09e7919aa668";

function SeriesCartelera(props){
    const [series, setSeries] = useState([]);

    useEffect( () => {
        fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=" + apikey)
            .then( response => response.json() )
            .then( data => setSeries(data.results))
            .catch( error => console.log(error))
    }, [])

        return (
            <React.Fragment>
                <h1>Series en cartelera</h1>
                <div className="row cards" id="series">
                    {series.map((serie) => (
                        <CardSerie
                            key={serie.id}
                            serie={serie}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }

export default SeriesCartelera;
