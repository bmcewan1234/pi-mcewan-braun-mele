import React from "react";
import { Link } from "react-router-dom";


function Header() {
  let array = [{ nombre: "Home", link: "/home" }, { nombre: "Peliculas", link: "/peliculas" }, { nombre: "Series", link: "/series" }, { nombre: "Log in", link: "/login" }, { nombre: "Sign in", link: "/register" }, { nombre: "Favoritos", link: "/Favoritos" }];
  return (
    <React.Fragment>
      <div >
        <h1 className="titulo">Movie MMB</h1>
      </div>
      <nav className="nav">
        <ul>
          {array.map(elemento => {
            return (
              <li key={elemento.link}>
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
