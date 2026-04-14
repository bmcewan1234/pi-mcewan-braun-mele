import { component } from 'react';
import Buscador from '../../Componentes/Buscador/Buscador';
import Cardpeli from '../../Componentes/Cardpeli/Cardpeli';

class SearchResults extends component {
    constructor(props) {
        super(props);
        this.state = {
            personajes: []
        }
    }

    componentDidMount() {
        const nombre = this.props.match.params.nombre;
        const tipo = this.props.match.params.tipo;
        fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${nombre}&api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(response => response.json())
            .then(data => this.setState({ personajes: data.results }))
            .catch(error => console.log(error))
    }

    componentDidUpdate() {
        const nombre = this.props.match.params.nombre;
        const tipo = this.props.match.params.tipo;
        fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${nombre}&api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(response => response.json())
            .then(data => this.setState({ personajes: data.results }))
            .catch(error => console.log(error))
    }


    render() {
        console.log(this.state);
        console.log(this.props);
        return (
            <>
                <Buscador />
                <section className="container" id="peliculas">
                    {this.state.personajes.length > 0 ? (
                        this.state.personajes.map((personaje) => (
                            <Cardpeli
                                key={personaje.id}
                                id={personaje.id}
                                nombre={personaje.title}
                                img={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                descripcion={personaje.overview}
                            />
                        ))
                    ) : (
                        <p>No se encontraron resultados</p>
                    )}
                </section>
            </>
        )
    }
}

export default SearchResults;