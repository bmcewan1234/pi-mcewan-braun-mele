import React, { Component } from "react";
import Buscador from "../../Componentes/Buscador/Buscador";
import CardPeli from "../../Componentes/Cardpeli/Cardpeli";
import CardSerie from "../../Componentes/CardSeries/CardSeries";

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritosP: [],
            favoritos: [],
            cargando: true
        }
    }
    componentDidMount() {
        let storageP = localStorage.getItem("favoritosP")
        let favoritosStorageP = JSON.parse(storageP)
        let pelisRecuperadas = []

        if (favoritosStorageP === null || favoritosStorageP.length === 0) {
            this.setState({
                cargando: false,
                favoritosP: []
            })
        } else {
            favoritosStorageP.map(id => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bb857f4016bcff3ee72ee89cb409417f`)
                    .then(response => response.json())
                    .then(data => {
                        pelisRecuperadas.push(data)

                        this.setState({
                            favoritosP: pelisRecuperadas,
                            cargando: false
                        })
                    })
                    .catch(error => console.log(error))

            })

        }

        let storageS = localStorage.getItem("favoritos")
        let favoritosStorageS = JSON.parse(storageS)
        let seriesRecuperadas = []

        if (favoritosStorageS === null || favoritosStorageS.length === 0) {
            this.setState({
                cargando: false,
                favoritosS: []
            })
        } else {
            favoritosStorageS.map(id => {
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=bb857f4016bcff3ee72ee89cb409417f`)
                    .then(response => response.json())
                    .then(data => {
                        seriesRecuperadas.push(data)

                        this.setState({
                            favoritos: seriesRecuperadas,
                            cargando: false
                        })
                    })
                    .catch(error => console.log(error))

            })

        }

    }


    render() {
        return (
            <div>
                <h2>Peliculas Favoritas</h2>
                <section className="row cards" id="movies">
                    {this.state.cargando === true ? (
                        <p>Cargando...</p>
                    ) : this.state.favoritosP.length === 0 ? (
                        <p>No hay peliculas guardadas en favoritos</p>
                    ) : (

                        this.state.favoritosP.map((personaje) =>

                            <CardPeli
                                id={personaje.id}
                                pelicula={personaje}
                            />

                        )

                    )}
                </section>
                <h2>Series Favoritas</h2>
                <section className="row cards" id="movies">
                    {this.state.cargando === true ? (
                        <p>Cargando...</p>
                    ) : this.state.favoritos.length === 0 ? (
                        <p>No hay series guardadas en favoritos</p>
                    ) : (

                        this.state.favoritos.map((personaje) =>

                            <CardSerie
                                id={personaje.id}
                                serie={personaje}
                            />

                        )

                    )}
                </section>
            </div>
        )
    }
}
export default Favoritos