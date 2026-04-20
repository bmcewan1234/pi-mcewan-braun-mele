import React, { Component } from "react";
import CardPeli from "../Cardpeli/Cardpeli.js";

const apikey = "2793aaadf72ebc55a67c09e7919aa668";

class PeliCartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apikey)
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
            <React.Fragment>
                <h1>Peliculas en cartelera</h1>
                <div className="row cards" id="movies">
                    {this.state.peliculas.map((pelicula) => (
                        <CardPeli
                            key={pelicula.id}
                            pelicula={pelicula}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default PeliCartelera;
