import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function Header() {
  let array = [{ nombre: "Home", link: "/Home.js" }, { nombre: "Log in", link: "/login" }, { nombre: "Sign in", link: "/Signin" }, {nombre : "Favoritos", link : "/Favoritos"}];
  return (
    <React.Fragment>
      <div className="logo">
        <img src="./img/Movies.jpg" alt="logo" className="logo"></img>
      </div>
      <nav className="nav">
        <ul className="ulnav">
          {array.map(elemento => {
            return (
              <li>
                <Link to={elemento.link}>{elemento.nombre}</Link>
              </li>
            )
          })}
        </ul>
      </nav>

    </React.Fragment>
  )
}
export default Header 
