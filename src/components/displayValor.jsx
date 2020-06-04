import React from "react";
import "./displayValor.css";
// import axios from ('axios');
import { dolarURL } from "../utils/URLS";

export default (props) => {
    
    return (
        <div  className="dolarHoje">
            {props.value}
        </div>
    );
};
