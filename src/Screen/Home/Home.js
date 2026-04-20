import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Cardpeli from "../../Componentes/Cardpeli/Cardpeli.js";
import CardSerie from "../../Componentes/CardSeries/CardSeries.js";
import Buscador from "../../Componentes/Buscador/Buscador.js";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor: "",
            populares: [],
            cartel: [],
            seriesPop: [],
            seriesCartel: []
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

        fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=2793aaadf72ebc55a67c09e7919aa668")
            .then(response => response.json())
            .then(data => this.setState({ seriesPop: data.results }))
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=2793aaadf72ebc55a67c09e7919aa668")
            .then(response => response.json())
            .then(data => this.setState({ seriesCartel: data.results }))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>

                <Buscador/>

                <h2 class="alert alert-primary">Peliculas mas populares</h2>
                <Link to="/peliculasPop">Ver todas</Link>

                <section className="cards">
                    {this.state.populares.map((peli, idx) =>
                        <Cardpeli
                            key={idx}
                            pelicula={peli} />)}
                </section>

                <h2 class="alert alert-primary">Peliculas en cartel</h2>
                <Link to="/cartelPeli">Ver todas</Link>

                <section className="cards" id="now-playing">
                    {this.state.cartel.map((peli, idx) =>
                        <Cardpeli
                            key={idx}
                            pelicula={peli} />)}
                </section>

                <h2 class="alert alert-warning">Series mas populares</h2>
                <Link to="/seriesPop">Ver todas</Link>

                <section className="cards" >
                {this.state.seriesPop.map((serie, idx) =>
                        <CardSerie
                            key={idx}
                            serie={serie} />)} 
                </section>

                <h2 class="alert alert-warning">Series en cartel</h2>
                <Link to="/cartelSerie">Ver todas</Link>

                <section className="cards" >
                {this.state.seriesCartel.map((serie, idx) =>
                        <CardSerie
                            key={idx}
                            serie={serie} />)}
                </section>

            </React.Fragment>
        )
    }

}
export default withRouter(Home)
