import CardSerie from "../../Componentes/CardSeries/CardSeries.js";
import { Component } from "react";

class ScreenSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personajes: [],
            personajesCopia: [],
            pagDos: 2,
            valor: ""

        }
    }

    evitarSumbit(e){
        e.preventDefault();
    }

  

     componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
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
        fetch(`https://api.themoviedb.org/3/tv/popular?page=${this.state.pagDos}&api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    personajes: this.state.personajes.concat(data.results),
                    personajesCopia: this.state.personajes.concat(data.results),
                    pagDos: data.page + 1
                }
            ))
    }

    filtrarPersonajes(input){
        this.setState({valor: input.target.value});
        input = this.state.valor.toLowerCase();
        let filtrado = this.state.personajesCopia.filter(
            personaje => personaje.name.toLowerCase().includes(input)
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
                        <input type="text" onChange={(e)=>this.filtrarPersonajes(e)} value={this.state.valor}></input>                </form>
                <h2 className="alert alert-primary">Series</h2>
                <section className="row cards" id="now-playing">
                    {
                        this.state.personajes.length > 0 ? (
                            this.state.personajes.map((personaje) => (
                                <CardSerie
                                    key={personaje.id}
                                    serie={personaje} />
                            ))
                        ) : (
                            <p>Cargando... </p>
                        )

                    }
                    </section>
                    <button onClick={() => this.cargarMas()}>Mas series</button>
                </>

                
            )
    }
}
export default ScreenSeries
