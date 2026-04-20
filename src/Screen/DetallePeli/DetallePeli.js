import { Component } from "react"


class DetallePeli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personaje: ""
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2793aaadf72ebc55a67c09e7919aa668`)
            .then(response => response.json())
            .then(data => this.setState({ personaje: data }))
            .catch(error => console.log(error))


    }
    render() {
        const personaje = this.state.personaje;
        const genero = personaje && personaje.genres && personaje.genres.length > 0
            ? personaje.genres[0].name
            : "Sin genero";

        return (
            <>
                {personaje ? (
                    <>
                        <h2 className="alert alert-warning">{personaje.title}</h2>
                        <section className="row">
                            <img className="col-md-6" src={"https://image.tmdb.org/t/p/w342" + personaje.poster_path} alt={personaje.title} />
                            <section className="col-md-6 info">
                                <h3>Descripción</h3>
                                <p className="description">{personaje.overview}</p>
                                <p className="mt-0 mb-0" id="release-date"><strong>Genero:</strong>{genero}</p>
                                <p className="mt-0 mb-0" id="release-date"><strong>Rating:</strong>{personaje.vote_average}</p>
                                <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{personaje.release_date}</p>

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

export default DetallePeli
