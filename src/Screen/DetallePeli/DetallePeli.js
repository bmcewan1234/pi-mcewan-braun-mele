import { Component } from "react"
import Personajes from "../../../../mi-primer-proyecto/src/componentes/Personajes/Personajes";

class DetallePeli extends Component{
    constructor(props){
        super(props);
        this.state = {
            personajes: ""
        }
    }
    componentDidMount(){
        const id= this.props.match.params.id;
        fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=8c9e1a0f2c5d1e7b4a9c8e5f6a7b8c9&language=en-US")
        .then(response => response.json())
        .then(data => this.setState({ personake: data }))
        .catch(error => console.log(error))
    }
    render(){
        return(
               {

               }
            ) 
    }
}

export default DetallePeli