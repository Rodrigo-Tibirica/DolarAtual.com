import React, { useState, useEffect, Fragment } from "react";
import "../../styles/css/Dolar.css";
import buscarCambio from "../utils/BuscarCambio";
import Conversor from "../utils/Conversor";
import Grafico from "../utils/Grafico";
import Banner_Flag from "../../assets/icons/us-flat.png";
import Origem_Flag_Icon from "../../assets/icons/us.png";
import Destino_Flag_Icon from "../../assets/icons/br.png";

export default (params) => {
    const [cambio, setCambio] = useState("");
    const [valorOrigem, setvalorOrigem] = useState(1.00);

    useEffect(() => {
        buscar();
    }, []);

    const buscar = async () => {
        const API_Data = await buscarCambio("USD");
        console.log(API_Data);
        setCambio(API_Data);
    };

    return (
        <Fragment>
            <div className="Dolar">
                <div className="main-banner">
                    <img src={Banner_Flag} alt="" />
                    <h1>Dólar Hoje </h1>
                </div>

                <Conversor
                    flag1={Origem_Flag_Icon}
                    flag2={Destino_Flag_Icon}
                    cifraoOrigem="US$"
                    cifraoDestino="R$"
                    siglaOrigem="USD"
                    siglaDestino="BRL"
                    valorOrigem={valorOrigem.toFixed(2)}
                    valorDestino={cambio}
                />
            </div>

            <nav className="dollar-scroll-header">
                <ul className="dollar-menu">
                    <li>
                        <a href="#">Dólar Comercial</a>
                    </li>
                    <li>
                        <a href="#">Dólar Turismo</a>
                    </li>
                    <li>
                        <a href="#">Sobre o Dólar</a>
                    </li>
                </ul>
            </nav>

            <div className="dolarcomercial-info"></div>
        </Fragment>
    );
};

/********Banners Old********* */
{
    /* <div className="valor-comercial">
                <span className="titulo">Dólar Comercial</span>
                <span className="cambio"> {`R$ ${cambio}`}</span>
                <p>
                    Usado em transações com exportação/importação entre bancos,
                    instituições financeiras e empresas.
                </p>
            </div>

            <div className="valor-turismo">
                <span className="titulo">{`Dólar Turismo`}</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, nostrum?
                </p>
            </div> */
}
