import React from "react";
import "../../styles/css/Header.css";
import { Link } from "react-router-dom";
export default (props) => {
    return (
        <header className="header-container">
            <nav className="header">
                <Link to="/">
                    <span className="logo1">dolarhoje</span>
                    <span className="logo2">.today</span>
                </Link>

                <ul>
                    {/* <li className="logo"><img src={Logo} alt=""/></li> */}
                    <li>
                        <Link to="/dolarahoje">Dólar</Link>
                    </li>
                    <li>
                        <Link to="/euroahoje">Euro</Link>
                    </li>
                    <li>
                        <Link to="/libraahoje">Libra </Link>
                    </li>
                    <li>
                        <Link to="/bitcoinahoje">Bitcoin </Link>
                    </li>
                </ul>
                <a href="">Sobre</a>
            </nav>
        </header>
    );
};
