import React from "react";
import "../../styles/css/Header.css";
import { Link } from "react-router-dom";
export default (props) => {
    return (
        <header className="header-container">
            
            <div
                className="menu-btn"
                onClick={(e) =>
                    document
                        .querySelector(".header-menu")
                        .classList.toggle("show")
                }
            >
                <i className="fas fa-bars"></i>
            </div> 
            <nav className="header">
                <Link to="/" className="Logo">
                    <span className="logo1">dolarhoje</span>
                    <span className="logo2">.today</span>
                </Link>

                <ul className="header-menu">
                    <li>
                        <Link to="/dolarhoje">Dólar</Link>
                    </li>
                    <li>
                        <Link to="/eurohoje">Euro</Link>
                    </li>
                    <li>
                        <Link to="/librahoje">Libra </Link>
                    </li>
                    <li>
                        <Link to="/bitcoinhoje">Bitcoin </Link>
                    </li>
                </ul>
                <a href="" className="Sobre">Sobre</a>
            </nav>
        </header>
    );
};
