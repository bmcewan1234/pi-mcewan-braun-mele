import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardPeli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ver: "Ver descripcion",
            clase: "no-mostrar",
            favorito: false
        }
    }

    ocultar() {
        if (this.state.ver === "Ver descripcion") {
            this.setState({
                ver: "Ocultar descripcion",
                clase: "mostrar"
            })
        }
        else {
            this.setState({
                ver: "Ver descripcion",
                clase: "no-mostrar"
            })
        }
    }

    agregarFavP() {
        let idFav = this.props.pelicula.id
        let storage = localStorage.getItem("favoritosP")
        if (storage != null) {
            let storageParse = JSON.parse(storage)
            storageParse.push(idFav)
            let storageString = JSON.stringify(storageParse)
            localStorage.setItem("favoritosP", storageString)
            this.setState({ favorito: true })
        } else {
            let arrayIDs = []
            arrayIDs.push(idFav)
            let arrayString = JSON.stringify(arrayIDs)
            localStorage.setItem("favoritosP", arrayString)
            this.setState({ favorito: true })
        }

    }

    sacarFavP() {
        let idFav = this.props.pelicula.id
        let storage = localStorage.getItem("favoritosP")
        if (storage !== null) {
            let storageParseado = JSON.parse(storage)
            let storageFiltrado = storageParseado.filter(id => id !== idFav)
            let storageString = JSON.stringify(storageFiltrado)
            localStorage.setItem("favoritosP", storageString)
            this.setState({ favorito: false })
        }
    }
    componentDidMount() {
        let storage = localStorage.getItem("favoritosP")
        if (storage !== null) {
            let storageParseado = JSON.parse(storage)
            let estaEnFav = storageParseado.includes(Number(this.props.pelicula.id))

            this.setState({
                favorito: estaEnFav
            })
        }
    }

    render() {
        return (
            <article className="single-card-movie">
                <img src={"https://image.tmdb.org/t/p/w342/" + this.props.pelicula.poster_path} alt={this.props.pelicula.title} />

                <div className="cardBody">
                    <h2>{this.props.pelicula.title}</h2>

                    <div className="card-buttons">
                        <button onClick={() => this.ocultar()}>{this.state.ver}</button>
                    </div>

                    <div className={this.state.clase + " card-text"}>
                        <p>{this.props.pelicula.overview}</p>
                    </div>

                    <div className="card-buttons">
                        <Link to={this.props.tipo === "tv" ? `/detalleSerie/${this.props.pelicula.id}` : `/detallePeli/${this.props.pelicula.id}`}>
                            <button className="btn btn-primary">Ir a detalle</button>
                        </Link>
                    </div>
                    <div className="card-buttons">
                        <button
                            className={this.state.favorito === true ? "no-mostrar" : ""}
                            onClick={() => this.agregarFavP()} > Agregar a Favoritos </button>
                        <button
                            className={this.state.favorito === false ? "no-mostrar" : ""}
                            onClick={() => this.sacarFavP()} > Quitar de Favoritos </button>
                    </div>
                </div>
            </article>
        )
    }
}

export default CardPeli
