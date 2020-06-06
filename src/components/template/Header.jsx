import React from "react";
import "../../styles/css/Header.css";
import FormControlLabel from '@material-ui/core/';

<<<<<<< HEAD
=======

>>>>>>> parent of b3ee1fa... Alterações rotas

export default (props) => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <a href="">DolarAgora</a>
                    </li>
                    <li>
                        <a href="">Euro Agora</a>
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
