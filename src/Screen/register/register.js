import React, {Component} from "react";

class Register extends Component {
    constructor(props){
        super(props);
        this.state = { 
          email: "",
          password: "",  
          error: ""
        };
    }

    evitarSubmit(e){
        e.preventDefault();
    
        let users = JSON.parse(localStorage.getItem("savedUsers"))  
        if (users === null) {
            users = []
        }

        let existeusuario = users.filter(user => user.email === this.state.email) 

        if(existeusuario.length > 0) { 
            this.setState({error:"Este mail ya esta en uso"}) 
        }
        else if (this.state.password.length < 6) {
            this.setState({error:"Tu password debe tener al menos 6 caracteres"})
        }
        else { 
            users.push({
                email: this.state.email,
                password: this.state.password
            })

            localStorage.setItem("savedUsers", JSON.stringify(users));
            this.props.history.push("/login")
        }
    }
     
    controlarCambios(e){
        this.setState({email: e.target.value})
    }

    controlarCambiosPassword(e){
        this.setState({password: e.target.value})
    }

    render(){
        return(
            <React.Fragment>
                <h2 className="alert alert-primary">Registro</h2>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(evento)=> this.evitarSubmit(evento)}>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={(evento)=> this.controlarCambios(evento)} placeholder="Ingresá tu email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={(evento)=> this.controlarCambiosPassword(evento)} placeholder="Ingresá tu contraseña"/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                Registrarse
                            </button>

                        </form>

                        {this.state.error !== "" && (
                            <p className="mt-2 text-danger">{this.state.error}</p>
                        )}

                        <p className="mt-3 text-center">
                            ¿Ya tenés cuenta? <a href="/login">Iniciar sesión</a>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;