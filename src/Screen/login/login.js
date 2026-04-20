import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies()

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    controlarCambios(event){
        event.target.name === "email"
        ? this.setState({email: event.target.value})
        : this.setState({ password: event.target.value});
    }

    evitarSubmit(e){
        e.preventDefault();
    
        let usuariosStorage = localStorage.getItem("savedUsers");

        usuariosStorage === null
            ? this.setState({error: "Las credenciales ingresadas son inválidas"})
            : (() => {
                let usuarios = JSON.parse(usuariosStorage);

                let usersFiltrado = usuarios.filter(
                    usuario => usuario.email === this.state.email
                );

                usersFiltrado.length === 0
                    ? this.setState({error: "El usuario ingresado no existe"})
                    : usersFiltrado[0].password !== this.state.password
                        ? this.setState({error: "Las credenciales ingresadas son inválidas"})
                        : (() => {
                            cookies.set('auth-user', this.state.email);
                            this.props.history.push("/");
                        })();
            })()
    }

    render(){
        let mensajeError = "";
        if (this.state.error !== ""){
            mensajeError = <p className="text-danger mt-2">{this.state.error}</p>;
        }

        return(
            <div>
                <h2 className="alert alert-primary">Iniciar sesión</h2>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.evitarSubmit(e)}>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={(e) => this.controlarCambios(e)} placeholder="Ingresá tu email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={(e) => this.controlarCambios(e)} placeholder="Ingresá tu contraseña"/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                Iniciar sesión
                            </button>

                        </form>

                        {mensajeError}

                        <p className="mt-3 text-center">
                            ¿No tenés cuenta? <a href="/register">Registrarse</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);