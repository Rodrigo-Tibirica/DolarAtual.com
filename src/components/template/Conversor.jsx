import React from "react";
import "../../styles/css/Conversor.css";
import axios from "axios";
import brazil from "../../assets/icones/brazil.png";
import us from "../../assets/icones/us.png";

export default (props) => {
    return (
        <div className="Conversor">
            <div className="conversor-origem">
                <div className="flag-container">
                    <img className="flag" src={brazil} />
                    <span className="moeda">BRL</span>
                </div>

                <div className="input-container">
                    <p className="input">
                        <span className="cifrao">R$</span>
                    </p>
                    <input type="number" placeholder="5,16" />
                </div>
            </div>

            <div className="conversor-destino">
                <div className="flag-container">
                    <img className="flag" src={us} />
                    <span className="moeda">USD</span>
                </div>

                <div className="input-container">
                    <p className>
                        <span className="cifrao">$</span>
                    </p>
                    <input type="number" placeholder="1,00" />
                </div>
            </div>
        </div>
    );
};
