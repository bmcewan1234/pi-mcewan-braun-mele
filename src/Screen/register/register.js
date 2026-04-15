import React, { Component } from "react";

class Register extends Component {
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

        if (password.length < 6) {
            this.setState({ error: "Mínimo 6 caracteres" });
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userExiste = users.find(u => u.email === email);

        if (userExiste) {
            this.setState({ error: "Email ya registrado" });
            return;
        }

        users.push({ email, password });

        localStorage.setItem("users", JSON.stringify(users));

    };

    render() {
        return (
            <div className="container mt-5">

                <h2 className="alert alert-primary text-center">
                    Registro
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
                                Registrarse
                            </button>

                        </form>

                        <p className="mt-3 text-center">
                            ¿Ya tenés cuenta?{" "}
                            <a href="/login">Iniciar sesión</a>
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

export default Register;
