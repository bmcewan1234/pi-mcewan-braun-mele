import React, { Component } from 'react';
import Buscador from '../../Componentes/Buscador/Buscador';
import Cardpeli from '../../Componentes/Cardpeli/Cardpeli';

class SearchResults extends Component {
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

    componentDidUpdate(prevProps) {
        const nombre = this.props.match.params.nombre;
        const tipo = this.props.match.params.tipo;

        if(prevProps.match.params.nombre !== nombre || prevProps.match.params.tipo !== tipo) {

         fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${nombre}&api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(response => response.json())
            .then(data => this.setState({ personajes: data.results }))
            .catch(error => console.log(error))
        }
    }


    render() {
        console.log(this.state);
        console.log(this.props);
        return (
            <>
                <Buscador />
                <section className="row cards" id="peliculas">
                    {this.state.personajes.length > 0 ? (
                        this.state.personajes.map((personaje) => (
                            <Cardpeli
                                key={personaje.id}
                                pelicula={personaje}
                                tipo={this.props.match.params.tipo}
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
