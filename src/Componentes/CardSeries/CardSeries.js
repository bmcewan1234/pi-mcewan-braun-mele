import React, { Component } from "react"
import { Link } from "react-router-dom"
class CardSerie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "",
      clase: "no-mostrar",
      textoBoton: "Ver descripcion",
      favorito: false
    }
  }
  ocultar() {
    if (this.state.clase === "no-mostrar") {
      this.setState({
        clase: "mostrar",
        textoBoton: "Ocultar descripcion"
      })
    } else {
      this.setState({
        clase: "no-mostrar",
        textoBoton: "Ver descripcion"
      })
    }
  }
  agregarFavS() {
    let idFav = this.props.id
    let storage = localStorage.getItem("favoritosS")
    if (storage != null) {
      let storageParse = JSON.parse(storage)
      storageParse.push(idFav)
      let storageString = JSON.stringify(storageParse)
      localStorage.setItem("favoritosS", storageString)
      this.setState({ favorito: true })
    } else {
      let arrayIDs = []
      arrayIDs.push(idFav)
      let arrayString = JSON.stringify(arrayIDs)
      localStorage.setItem("favoritosS", arrayString)
      this.setState({ favorito: true })
    }

  }

  sacarFavS() {
    let idFav = this.props.id
    let storage = localStorage.getItem("favoritosS")
    if (storage !== null) {
      let storageParseado = JSON.parse(storage)
      let storageFiltrado = storageParseado.filter(id => id !== idFav)
      let storageString = JSON.stringify(storageFiltrado)
      localStorage.setItem("favoritosS", storageString)
      this.setState({ favorito: false })
    }
  }
  componentDidMount() {
    let storage = localStorage.getItem("favoritosS")
    if (storage !== null) {
      let storageParseado = JSON.parse(storage)
      let estaEnFav = storageParseado.includes(Number(this.props.id))

      this.setState({
        favorito: estaEnFav
      })
    }
  }

  render() {
    return (
      <article className="single-card-movie">

        <img
          src={"https://image.tmdb.org/t/p/w342/" + this.props.imagen}
          alt={this.props.nombre}
        />
        <div className="cardBody">
          <h2>{this.props.nombre}</h2>

          <div className="card-buttons">
            <button onClick={() => this.ocultar()}>
              {this.state.textoBoton}
            </button>
          </div>

          <div className={this.state.clase + " card-text"}>
            <p>{this.props.descripcion}</p>
          </div>

          <div className="card-buttons">
            <Link to={"/detalleS/" + this.props.id}>
              <button>Ir a detalle</button>
            </Link>
          </div>

          <div className="card-buttons">
            <button
              className={this.state.favorito === true ? "oculto" : ""}
              onClick={() => this.agregarFavS()}
            >
              Agregar a Favoritos
            </button>
            <button
              className={this.state.favorito === false ? "oculto" : ""}
              onClick={() => this.sacarFavS()}
            >
              Quitar de Favoritos
            </button>
          </div>
        </div>
      </article>
    )
  }
}

export default CardSerie
