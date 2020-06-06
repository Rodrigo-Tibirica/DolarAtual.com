import React from "react";
import "../../styles/css/Header.css";

import Router from '../../routes/routes'
import Dolar from "../pages/dolar/Dolar"
import Euro from "../pages/euro/Euro"

export default (props) => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <a href = {<Router path="/euroatual"/>} >DolarAgora</a>
                    </li>
                    <li>
                        <a href={Router}>Euro Agora</a>
                    </li>
                    <li>
                        <a href="">Dolar Jamaicano</a>
                    </li>
                </ul>
            </nav>



        </header>



      
    );
};
