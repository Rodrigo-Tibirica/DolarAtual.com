import React from "react";
import "../../styles/css/Header.css";

import Router from "../../routes/routes";
import Dolar from "../pages/dolar/Dolar";
import Euro from "../pages/euro/Euro";
import { Link } from "react-router-dom";
export default (props) => {
    return (
        <header className="header">
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/dolaratual">DolarAgora</Link>
                    </li>
                    <li>
                        <Link to="/euroatual">EuroAgora</Link>
                    </li>
                    <li>
                        <Link to="/libraatual">LibraAgora</Link>
                    </li>
                    <li>
                        <Link to="/bitcoinatual">BitcoinAgora</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
