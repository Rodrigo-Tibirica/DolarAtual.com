import React from "react";
import "../../styles/css/Conversor.css";
import axios from "axios";
import Grafico from "./Grafico";

export default (props) => {
    const {
        flag1,
        flag2,
        siglaOrigem,
        siglaDestino,
        cifraoOrigem,
        cifraoDestino,
        valorOrigem,
        valorDestino,
    } = props;
    return (
        <div className="Conversor">
            <div className="conversor-origem">
                <div className="flag-container">
                    <img className="flag" src={flag1} />
                    <span className="moeda">{siglaOrigem}</span>
                </div>

                <div className="input-container">
                    <p className>
                        <span className="cifrao">{cifraoOrigem}</span>
                    </p>
                    <input
                        className="input-origem"
                        type="number"
                        value={valorOrigem}
                    />
                </div>
            </div>

            <div className="conversor-destino">
                <div className="flag-container">
                    <img className="flag" src={flag2} />
                    <span className="moeda">{siglaDestino}</span>
                </div>

                <div className="input-container">
                    <p className>
                        <span className="cifrao">{cifraoDestino}</span>
                    </p>
                    <input
                        className="input-destino"
                        type="number"
                        value={valorDestino}
                        onChange=""
                    ></input>
                </div>
            </div>
        </div>
    );
};
