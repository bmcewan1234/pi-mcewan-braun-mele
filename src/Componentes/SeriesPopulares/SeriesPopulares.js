import React,{ Component } from "react";
import Card from "../Card/Card";

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
            <div className="cards">
                {this.state.peliculas.map((pelicula) => (
                    <Card
                        key={pelicula.id}
                        id={pelicula.id}
                        nombre={pelicula.title}
                        imagen={pelicula.poster_path}
                        descripcion={pelicula.overview}
                        tipo="movie"
                    />
                ))}
            </div>
        );
    }
}

export default SeccionPelisPopulares;