import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <React.Fragment>
      <div >
        <h1>Movie MMB</h1>
      </div>
      <nav>
             <ul class="nav nav-tabs my-4">
                <li className="nav-item">
                    <Link to="/home" class="nav-link"> Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/peliculas" class="nav-link"> Peliculas</Link>
                </li>
                <li class="nav-item">
                    <Link to="/series" class="nav-link"> Series</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Favoritos" class="nav-link"> Favoritas</Link>
                </li>
                <li class="nav-item ml-auto">
                    <Link to="/register" class="nav-link"> Registro</Link>
                </li>
                <li class="nav-item">
                    <Link to="/login" class="nav-link"> Login</Link>
                </li>
            </ul>
           
        </nav>
    </React.Fragment>
  )
}
export default Header 
