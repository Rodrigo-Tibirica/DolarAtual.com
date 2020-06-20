import React, { useState, useEffect,Fragment } from "react";
import "../../styles/css/Libra.css";
import axios from "axios";
import Conversor from "../utils/Conversor";
import Grafico from "../utils/Grafico";
import Banner_Flag from "../../assets/libra.png"
import Origem_Flag_Icon from "../../assets/libra.png";
import Destino_Flag_Icon from "../../assets/icons/br.png";
import buscarCambio from "../utils/BuscarCambio";

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
        const API_Data = await buscarCambio("GBP");
        console.log(API_Data);
        setCambio(API_Data.GBP.ask);
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
                <section className="Libra">
                    <div className="main-banner">
                        <img src={Banner_Flag} alt="" />
                        <h1>Libra Hoje </h1>
                    </div>
                    <div className="conversor-container">
                        <Conversor
                            flag={Origem_Flag_Icon}
                            cifrao="£"
                            sigla="GBP"
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
    
                <nav className="libra-scroll-header">
                    <ul className="libra-menu">
                        <li>
                            <a href="#">Libra Comercial</a>
                        </li>
                        <li>
                            <a href="#">Libra Turismo</a>
                        </li>
                        <li>
                            <a href="#">Sobre o Libra</a>
                        </li>
                    </ul>
                </nav>
                <Grafico/>
                <div className="libracomercial-info"></div>
            </Fragment>
        );
    };