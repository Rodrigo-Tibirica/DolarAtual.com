import React from "react";
import "../../styles/css/Header.css";

import Router from "../../routes/routes";
import Dolar from "../pages/dolar/Dolar";
import Euro from "../pages/euro/Euro";
import { Link } from "react-router-dom";
import Logo from "../../assets/exchange.png";
export default (props) => {
    return (
        <header className="header">
            <nav className="menu">
                <ul>
                    {/* <li className="logo"><img src={Logo} alt=""/></li> */}
                    <li>
                        <Link to="/dolaratual">
                            <a className="dollar">
                                <span>Dólar </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/euroatual" className="euro">
                            Euro
                        </Link>
                    </li>
                    <li>
                        <Link to="/libraatual">Libra </Link>
                    </li>
                    <li>
                        <Link to="/bitcoinatual">Bitcoin </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
