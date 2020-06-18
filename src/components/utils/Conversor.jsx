import React from "react";
import "../../styles/css/Conversor.css";
import NumberFormat from "react-number-format";
export default (props) => {
    
    const handleFocus = (e) => e.target.select();
    const { flag, sigla, cifrao, valor, mudarValor } = props;
    return (
        <div className="Conversor">
            <div className="flag-container">
                <img className="flag" src={flag} />
                <span className="moeda">{sigla}</span>
            </div>

            <div className="input-container">
                <p className>
                    <span className="cifrao">{cifrao}</span>
                </p>
                {/* <input
                    className="input-valor"
                    type="number"
                    value={valor}
                    onChange={mudarValor}
                    onFocus={handleFocus}
                /> */}
                <NumberFormat className="input-valor" thousandSeparator={true}  decimalScale="2" value={valor} onChange={mudarValor}/>
            </div>
        </div>
    );
};
