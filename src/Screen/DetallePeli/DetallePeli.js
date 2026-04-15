import { Component } from "react"
import Personajes from "../../../../mi-primer-proyecto/src/componentes/Personajes/Personajes";

class DetallePeli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personajes: ""
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=8c9e1a0f2c5d1e7b4a9c8e5f6a7b8c9&language=en-US")
            .then(response => response.json())
            .then(data => this.setState({ personaje: data }))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <>
                {this.state.personaje ? (
                    <>
                        <h2 className="alert alert-warning">{this.state.personaje.original_title}</h2>
                        <section className="container">
                            <section className="row">
                                <h3>Descripcion</h3>
                                <p className="Pdeta">{this.state.personaje.overview}</p>
                                <p className="Pdeta">Genero:{this.state.personaje.genres[0].name}</p>
                                <p className="Pdeta">Rating:{this.state.personaje.vote_average}</p>
                                <p className="Pdeta">Fecha de estreno:{this.state.personaje.release_date}</p>
                                <p className="Pdeta">Duracion:{this.state.personaje.runtime} minutos</p>
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