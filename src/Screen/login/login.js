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
            <form onSubmit={this.enviarFormulario}>
                <h2>Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.cambiarDatos}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.cambiarDatos}
                />

                <button type="submit">Ingresar</button>

                <p>{this.state.error}</p>
            </form>
        );
    }
}

export default Login;
