import React from "react";
import "../../styles/css/Header.css";
import FormControlLabel from '@material-ui/core/';
import Router from '../../routes/routes'
import Dolar from "../Pages/Dolar/Dolar"
import Euro from "../Pages/Euro/Euro"


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

            <div className="DarkMode">
                <FormControlLabel control={<Switch />} label="Darkmode" />
            </div>
        </header>
    );
};
