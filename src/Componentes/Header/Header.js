import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";


const cookies = new Cookies()
function Header() {
  const cookie = cookies.get("auth-user")
  return (
    <React.Fragment>
      <div >
        <h1>Movie MMB</h1>
      </div>
      <nav>
        <ul class="nav nav-tabs my-4">
          <li className="nav-item">
            <Link to="/" class="nav-link"> Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/peliculas" class="nav-link"> Peliculas</Link>
          </li>
          <li class="nav-item">
            <Link to="/series" class="nav-link"> Series</Link>
          </li>
          {cookie == null ? (
            <div>
              <li class="nav-item ml-auto">
                <Link to="/register" class="nav-link"> Registro</Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link"> Login</Link>
              </li>

            </div>) : (
            <>
              <li class="nav-item">
                <Link to="/Favoritos" class="nav-link"> Favoritas</Link>
              </li>
              <li className="nav-item ml-auto">
                <Link to="">log out</Link>
              </li>
            </>
          )
        }
               
               
            </ul>

      </nav>
    </React.Fragment>
  )
}
export default Header 
