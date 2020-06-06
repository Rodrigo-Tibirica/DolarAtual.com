import React from "react";
import "../../styles/css/Header.css";
<<<<<<< HEAD
import Router from '../../routes/routes'
import Dolar from "../Pages/Dolar/Dolar"
import Euro from "../Pages/Euro/Euro"
=======
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
>>>>>>> parent of 0dc75ca... Remoção DarkMode

import Button from '@material-ui/core/Button';

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

<<<<<<< HEAD
        </header>
=======
            <div className="DarkMode">
                <FormControlLabel control={<Switch />} label="Darkmode" />
                </div>

        </header >
>>>>>>> parent of 0dc75ca... Remoção DarkMode
    );
};
