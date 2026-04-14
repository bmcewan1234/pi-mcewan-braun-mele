import { Component } from 'react';
import { link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: "",
            tipo: ""
        }
    }

    evitarSubmit(e) {
        if (this.state.valor.length !== 0 && this.state.tipo.length !== 0) {
            e.preventDefault();
            this.props.history.push("/search/" + this.state.valor + "/" + this.state.tipo)
        } else {
            e.preventDefault();
        }
    }

    cambiorValor(e) {
        this.setState({ valor: e.target.value });
        console.log(e.target.value);
    }

    render() {
        return (
            <>
                <form className="buscador-form" onSubmit={(e) => this.evitarSubmit(e)}>
                    <input type="text" className="buscador-input" onChange={(e) => this.cambiorValor(e)} value={this.state.valor} placeholder="Buscar..." />
                    <button type="submit" className="buscador-btn">Buscar</button>
                    <div>
                        <input type="radio" id="pelicula" name="tipo" value="movie" onChange={(e) => this.setState({ tipo: e.target.value })} />
                        <label for="pelicula">Peliculas</label>
                        <input type="radio" id="serie" name="tipo" value="tv" onChange={(e) => this.setState({ tipo: e.target.value })} />
                        <label for="serie">Series</label>
                    </div>
                </form>
            </>
        )
    }
}
export default withRouter(Buscador)