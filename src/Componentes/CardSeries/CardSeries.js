import React, { Component } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
class CardSerie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "",
      clase: "Oculto",
      textoBoton: "Ver menos",
      favorito: false
    }
  }
  ocultar() {
    if (this.state.clase === "oculto") {
      this.setState({
        clase: "",
        textoBoton: "Ver menos"
      })
    } else {
      this.setState({
        clase: "oculto",
        textoBoton: "Ver mas"
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
      <article className="single-card-tv">

        <img src={this.props.imagen} className="card-img-top"
          alt="..." />
        <div className="cardBody">
          <h5 className="card-title">{this.props.nombre}</h5>
          <section className={this.state.clase}>

            <p className="card-text">{this.props.desc}</p>
          </section>
          <button className='more' onClick={() => this.ocultar()}>
            {this.state.textoBoton}
          </button>

          <Link to={"/detalleS/" + this.props.id}><button className="btn btn-primary">Ver detalle</button></Link>
          <button className={this.state.favorito === true ? "btn alert-primary oculto" : "btn alert-primary"} onClick={() => this.agregarFavS()}>Agregar a Favoritos</button>
          <button className={this.state.favorito === false ? "btn alert-primary oculto" : "btn alert-primary"} onClick={() => this.sacarFavS()}>Quitar de Favoritos</button>
        </div>
      </article>
    )
  }
}

export default CardSerie