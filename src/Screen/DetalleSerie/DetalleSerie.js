import React, { Component } from "react";
class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personaje: ""
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=2793aaadf72ebc55a67c09e7919aa668`)
            .then(response => response.json())
            .then(data => this.setState({ personaje: data }))
            .catch(error => console.log(error))


    }

    render() {
        return (
            <>
                {this.state.personaje ? (
                    <>
                        <h2 class="alert alert-warning">{this.state.personaje.name}</h2>
                        <section class="row">
                        <img class="col-md-6" src={"https://image.tmdb.org/t/p/w342" + this.state.personaje.poster_path} alt="" />
                            <section class="col-md-6 info">
                                <h3>Descripción</h3>
                                <p class="description">{this.state.personaje.overview}</p>
                                <p class="mt-0 mb-0" id="release-date"><strong>Genero:</strong>{this.state.personaje.genres[0].name}</p>
                                <p class="mt-0 mb-0" id="release-date"><strong>Rating:</strong>{this.state.personaje.vote_average}</p>
                                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{this.state.personaje.first_air_date}</p>
                                <p class="mt-0 mb-0" id="episodes"><strong>Número de capítulos:</strong>{this.state.personaje.number_of_episodes}</p>
                                <p class="mt-0 seasons"><strong>Temporadas:</strong>{this.state.personaje.number_of_seasons}</p>
                                <button className="btn alert-primary">Favoritos</button>
                            </section>
                           
                        </section>
                    </>
                ) : (
                    <p>Cargando...</p>
                )}
            </>
        )
    }
}

export default DetalleSerie