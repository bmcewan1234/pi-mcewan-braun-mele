import React, { Component } from "react";
import CardPeli from "../Cardpeli/Cardpeli.js";

const apikey = "2793aaadf72ebc55a67c09e7919aa668";

class SeccionPelisPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apikey)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <h1>Peliculas mas populares</h1>,
            <div className="row cards" id="movies">
                {this.state.peliculas.map((pelicula) => (
                    <CardPeli
                        key={pelicula.id}
                        pelicula={pelicula}
                    />
                ))}
            </div>
        );
    }
}

export default SeccionPelisPopulares;
