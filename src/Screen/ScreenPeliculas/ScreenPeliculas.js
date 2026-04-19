import Cardpeli from "../../Components/Cardpeli/Cardpeli";
import { Component } from "react";

class ScreenPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personajes: [],
            personajesCopia: [],
            pagDos: 2
        }
    }

    evitarSumbit(e){
        e.preventDefault();
        this.filtrarPersonajes(this.state.valor)
    }

    cambioValor(e){
        this.setState({valor: e.target.value});
    }


     componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    personajes: data.results,
                    personajesCopia: data.results,
                    pagDos: data.page + 1
                })
            })
            .catch(error => console.log(error))
    }


    cargarMas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.paginaDos}&api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    personajes: this.state.personajes.concat(data.results),
                    personajesCopia: this.state.personajes.concat(data.results),
                    pagDos: data.page + 1
                }
            ))
    }

    filtrarPerso(input){
        input = this.state.valor.toLowerCase();
        let filtrado = this.state.personajesCopia.filter(
            personaje => personaje.title.toLowerCase().includes(input)
        )
        
        this.setState({
            personajes: filtrado
        })
    }
    render() {
        console.log(this.state)
        return (
            <>
                <form onSubmit={(e) => this.evitarSumbit(e)}>
                        <label>Nombre: </label>
                        <input type="text" onChange={(e)=>this.cambioValor(e)} value={this.state.valor}></input>
                        <input type="submit" value="submit"></input>
                </form>
                <h2 className="alert alert-primary">Peliculas</h2>
                <section className="row cards" id="now-playing">
                    {
                        this.state.personajes.length > 0 ? (
                            this.state.personajes.map((personaje) => (
                                <Cardpeli
                                    id={personaje.id}
                                    nombre={personaje.title}
                                    foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                    desc={personaje.overview} />
                            ))
                        ) : (
                            <p>Cargando... </p>
                        )

                    }
                    </section>
                    <button onClick={() => this.cargarMas()}>Mas personajes</button>
                </>

                
            )
    }
}
export default ScreenPeliculas