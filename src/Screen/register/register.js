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

const userExist = users.find(u => u.email === email);

if (userExist) {
this.setState({ error: "Email ya registrado" });
return;
}

users.push({ email, password });

localStorage.setItem("users", JSON.stringify(users));

};

render() {
return (
<form onSubmit={this.enviarFormulario}>
<h2>Register</h2>

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

<button type="submit">Registrarse</button>

<p>{this.state.error}</p>
</form>
);
}
}

export default Register;
