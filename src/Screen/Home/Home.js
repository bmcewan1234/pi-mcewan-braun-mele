import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Cardpeli from "../../Componentes/Cardpeli/Cardpeli.js";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor: "",
            populares: [],
            cartel: []
        }
    }

    evitarSubmit(e) {
        e.preventDefault();
        this.props.history.push("/search/" + this.state.valor)
    }

    controlarCambios(e) {
        this.setState({
            valor: e.target.value
        });
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=57f7a2a82d57f08ae3dba76c4340b8c0")
            .then(response => response.json())
            .then(data => this.setState({ populares: data.results }))
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=57f7a2a82d57f08ae3dba76c4340b8c0")
            .then(response => response.json())
            .then(data => this.setState({ cartel: data.results }))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>

                <form className="search-form" onSubmit={(evento) => this.evitarSubmit(evento)}>
                    <input type="text" placeholder="Buscar..." onChange={(evento) => this.controlarCambios(evento)} value={this.state.valor} />
                    <button className="btn-sm" type="submit">Buscar</button>
                </form>

                <h2>Peliculas mas populares</h2>
                <Link to="/populares">Ver todas</Link>

                <section className="cards">
                    {this.state.populares.map((peli, idx) =>
                        <Cardpeli
                            key={idx}
                            pelicula={peli} />)}
                </section>

                <h2>Peliculas en cartel</h2>
                <Link to="/cartel">Ver todas</Link>

                <section className="cards" id="now-playing">
                    {this.state.cartel.map((peli, idx) =>
                        <Cardpeli
                            key={idx}
                            pelicula={peli} />)}
                </section>
            </React.Fragment>
        )
    }

}
export default withRouter(Home)
