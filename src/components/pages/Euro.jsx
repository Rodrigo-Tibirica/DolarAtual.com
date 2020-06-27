import React, { useState, useEffect,Fragment } from "react";
import "../../styles/css/Euro.css";
import buscarCambio from "../utils/BuscarCambio";
import Conversor from "../utils/Conversor";
import Grafico from "../utils/Grafico";
import Banner_Flag from "../../assets/icons/eu-flat.png"
import Origem_Flag_Icon from "../../assets/icons/eu.png";
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
        const API_Data = await buscarCambio("EUR");
        console.log(API_Data);
        setCambio(API_Data.EUR.ask);
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
                <section className="Euro">
                    <div className="main-banner">
                        <img src={Banner_Flag} alt="" />
                        <h1>Euro Hoje </h1>
                    </div>
                    <div className="conversor-container">
                        <Conversor
                            flag={Origem_Flag_Icon}
                            cifrao="€"
                            sigla="EUR"
                            valor={valorOrigem}
                            mudarValor={atualizarValorOrigem}
                        />
                        <div className="Arrow">&#11138;</div>
                        <Conversor
                            flag={Destino_Flag_Icon}
                            cifrao="R$"
                            sigla="BRL"
                            valor={valorDestino}
                            mudarValor={atualizarValorDestino}
                        />
                    </div>
                </section>
    
                <nav className="euro-scroll-header">
                    <ul className="euro-menu">
                        <li>
                            <a href="#">Euro Comercial</a>
                        </li>
                        <li>
                            <a href="#">Euro Turismo</a>
                        </li>
                        <li>
                            <a href="#">Sobre o Euro</a>
                        </li>
                    </ul>
                </nav>
                <Grafico moeda="EUR"/>
                <div className="eurocomercial-info"></div>
            </Fragment>
        );
    };