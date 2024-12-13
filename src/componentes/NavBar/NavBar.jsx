import React from 'react'

import "./NavBar.css"

const NavBar = () => {
  return (
    <header className="navbar-fondo sticky-top ">

        <div className="redes-sociales-contenedor">
            <ul>
                <li className="redes-sociales-item"><a href="https://www.instagram.com/alejo.ferrari/" target="_blank"><i
                            className="fa-brands fa-instagram fa-lg redes-sociales-icono"></i></a></li>
                <li className="redes-sociales-item"><a href="https://x.com/batidona" target="_blank"><i
                            className="fa-brands fa-twitter fa-lg redes-sociales-icono"></i></a></li>
                <li className="redes-sociales-item"><a href="https://www.facebook.com/alejo.ferrari.7/?locale=es_LA"
                        target="_blank"><i className="fa-brands fa-facebook fa-lg redes-sociales-icono"></i></a></li>

            </ul>
        </div>

        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand navbar-texto" href="#">BURGALAND <i className="fa-solid fa-burger fa-lg animate__animated animate__swing"></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i className="fa-solid fa-utensils fa-lg"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link navbar-texto" href="#">Internacional</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-texto" href="#tradicionales">Tradicionales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-texto" href="#veggies">Veggies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-texto" href="#bebidas">Bebidas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    </header>
  )
}

export default NavBar