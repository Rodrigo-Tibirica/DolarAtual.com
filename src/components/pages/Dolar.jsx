import React, { useState, useEffect, Fragment } from "react";
import "../../styles/css/Dolar.css";
import buscarCambio from "../utils/BuscarCambio";
import Conversor from "../utils/Conversor";
import Grafico from "../utils/Grafico";
import Banner_Flag from "../../assets/icons/us-flat.png";
import Origem_Flag_Icon from "../../assets/icons/us.png";
import Destino_Flag_Icon from "../../assets/icons/br.png";

export default (params) => {
    const [Cambio, setCambio] = useState("");
    const [Valor, setaValor] = useState(1.0.toFixed(2))
    const [origemInput, setaorigemInput] = useState("origem");
    let valorOrigem, valorDestino;
    if (origemInput === "origem") {
        valorOrigem = Valor;
        valorDestino = valorOrigem * Cambio;
    } else if (origemInput === "destino") {
        valorDestino = Valor;
        valorOrigem = valorDestino / Cambio;
    }

    useEffect(() => {
        buscar();
    }, []);

    const buscar = async () => {
        const API_Data = await buscarCambio("USD");
        console.log(API_Data);
        setCambio(API_Data.USD.ask);
    };

    const atualizarValorOrigem = (e) => {
        let value = e.target.value.split(",").join("");
        setaValor(value);
        setaorigemInput("origem");
    };
    const atualizarValorDestino = (e) => {
        let value = e.target.value.split(",").join("");
        setaValor(value);
        setaorigemInput("destino");
    };

    return (
        <Fragment>
            <section className="Dolar">
                <div className="main-banner">
                    <img src={Banner_Flag} alt="" />
                    <h1>Dólar Hoje </h1>
                </div>
                <div className="conversor-container">
                    <Conversor
                        flag={Origem_Flag_Icon}
                        cifrao="US$"
                        sigla="USD"
                        valor={valorOrigem}
                        mudarValor={atualizarValorOrigem}
                    />
                    {/* <div className="Arrow">&#11138;</div> */}
                    <Conversor
                        flag={Destino_Flag_Icon}
                        cifrao="R$"
                        sigla="BRL"
                        valor={valorDestino}
                        mudarValor={atualizarValorDestino}
                    />
                </div>
            </section>

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
            <Grafico moeda="USD"/>
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
