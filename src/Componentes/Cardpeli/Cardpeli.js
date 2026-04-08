import React, {Component} from "react";
import { BrowserRouter ,Link, Route, Switch } from "react-router-dom";

class CardPeli extends Component {
    constructor(props){
        super(props);
        this.state = {
            ver: "Ver descripcion",
            clase: "no-mostrar"
        }
    }

    boton(){
        if(this.state.ver === "Ver descripcion"){
            this.setState({
                ver: "Ocultar descripcion",
                clase: "mostrar"
            })
        }
        else{this.setState({
            ver: "Ver descripcion",
            clase:"no-mostrar"
        })}
    }

    render(){
        return(
            <React.Fragment>

                {/*img (cambiar img*/}
                <img src={"https://image.tmdb.org/t/p/w342/" + this.props.pelicula.poster_path} alt={this.props.pelicula.title} />

                <h2>{this.props.pelicula.title}</h2> 

                <div className="card-buttons">
                    <button onClick={() => this.boton()}>{this.state.ver}</button>
                </div>
 
                <div className={this.state.clase}>
                    <p>{this.props.pelicula.overview}</p>
                </div>
                
                <div className="card-buttons">
		            <Link to={"/detalle/" + this.props.pelicula.id}>
                        <button>Ir a detalle</button>
                    </Link>
                </div>

            {/*boton agregar/quitar de favoritos en CardRM*/}

            </React.Fragment>
        )
    }
}

export default CardPeli
