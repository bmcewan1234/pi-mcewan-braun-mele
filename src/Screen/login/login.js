import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    cambiarDatos = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    enviarFormulario = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u => u.email === email);

        if (!user || user.password !== password) {
            this.setState({ error: "Credenciales incorrectas" });
            return;
        }

        cookies.set("user-auth-cookie", user.email);
    };

    render() {
        return (
            <div className="container mt-5">

                <h2 className="alert alert-primary text-center">
                    Iniciar sesión
                </h2>

                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={this.enviarFormulario}>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Ingresá tu email"
                                    onChange={this.cambiarDatos}
                                />
                            </div>

                            <div className="form-group">
                                <label>Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Ingresá tu contraseña"
                                    onChange={this.cambiarDatos}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block mt-3"
                            >
                                Iniciar sesión
                            </button>

                        </form>

                        <p className="mt-3 text-center">
                            ¿No tenés cuenta?{" "}
                            <a href="/register">Registrarse</a>
                        </p>

                        <p className="text-danger text-center">
                            {this.state.error}
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
