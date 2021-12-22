import React from 'react'
import {

Link
} from "react-router-dom"
function Topbar() {
  return (
    <header className="header">

        <nav id="headerMenu" className="navbar-dark navbar-expand-lg bg-transparent navbar">
            <div className="container">
                <a className="navbar-brand" href="#">
                  <img src="images/logo.png" alt="Automobile.tn" />
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#headerMenu-collapse"
                    aria-controls="headerMenu-collapse" aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                <div id="headerMenu-collapse" className="collapse navbar-collapse">
                    <ul id="w6" className="ml-auto nav">
                        <li className="has-submenu dropdown nav-item"><a className="dropdown-toggle nav-link"
                                href="fr/neuf.html" data-toggle="dropdown">Prix du neuf</a>
                            <div id="w7" className="dropdown-menu"><a className="dropdown-item"
                                    href="fr/neuf.html#moteur">Recherche</a>
                                <a className="dropdown-item" href="#">Marques</a>
                                <a className="dropdown-item" href="#">Concessionnaires</a>
                                <a className="dropdown-item" href="#">Comparateur</a>
                            </div>
                        </li>
                        <li className="has-submenu dropdown nav-item"><a className="dropdown-toggle nav-link"
                                href="#" data-toggle="dropdown">Occasions</a>
                            <div id="w8" className="dropdown-menu"><a className="dropdown-item"
                                    href="#">Recherche</a>
                                <a className="dropdown-item" href="#">Annonces du jour</a>
                                <a className="dropdown-item" href="#">Vendeurs Pro</a>
                                <a className="dropdown-item" href="#">Vendre</a>
                                <a className="dropdown-item" href="#">Comparateur</a>
                            </div>
                        </li>
                        <li className="has-submenu dropdown nav-item"><a className="dropdown-toggle nav-link"
                                href="#" data-toggle="dropdown">Auto Mag</a>
                            <div id="w9" className="dropdown-menu"><a className="dropdown-item"
                                    href="#">Nouveautés</a>
                                <a className="dropdown-item" href="#">Actu</a>
                                <a className="dropdown-item" href="#">Essais</a>
                                <a className="dropdown-item" href="#">Concepts</a>
                                <a className="dropdown-item" href="#">Supercars</a>
                                <a className="dropdown-item" href="#">Sport Auto</a>
                            </div>
                        </li>
                        <li className="has-submenu dropdown nav-item"><a className="dropdown-toggle nav-link"
                                href="#" data-toggle="dropdown">Guide pratique</a>
                            <div id="w10" className="dropdown-menu"><a className="dropdown-item"
                                    href="#">Dernières immatriculations</a>
                                <a className="dropdown-item" href="#">Droits de douanes</a>
                                <a className="dropdown-item" href="#">FCR</a>
                                <a className="dropdown-item" href="#">Permis de conduire</a>
                                <a className="dropdown-item" href="#">Visite technique</a>
                                <a className="dropdown-item" href="#">Vignette</a>
                                <a className="dropdown-item" href="#">Voitures
                                    populaires</a>
                            </div>
                        </li>
                        <li className="dropdown nav-item"><a className="dropdown-toggle nav-link"
                                href="#" data-toggle="dropdown">Mon espace</a>
                            <div id="w11" className="dropdown-menu"></div>
                        </li>
                    </ul>
                    <form className="form-inline my-0 ml-auto" action="https://www.automobile.tn/fr/recherche">
                        <i className="fa fa-search"></i>
                        <input className="form-control" type="search" name="keyword" placeholder="Rechercher ..."
                            aria-label="Rechercher ..." />
                        <a className="versions-comparer" href="#"
                            title="Comparer vos voitures préférées" target="_blank"></a>
                    </form>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Topbar
