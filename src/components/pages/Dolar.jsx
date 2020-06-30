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
            <div className="dolarcomercial-info">
                <p className= "titulo">Dólar</p>

<p className= "subtitulo">O que é dólar?</p> <p className = "texto">O dólar dos Estados Unidos (US Dollar, USD, US$) é a moeda emitida pelos Estados Unidos através da Reserva Federal dos Estados Unidos.<br></br> 
Ele possui moedas de 1, 5, 10, 25, 50 cents e 1 dólar. As notas que circulam hoje são de 1, 5, 10, 20, 50 e 100 dólares.<br></br>
Ele também é a moeda oficial do Timor-Leste, Equador, El Salvador, Panamá e Porto Rico. Também é usado não-oficialmente nas Ilhas Virgens Britânicas, Ilhas Marshall, Estados Federados da Micronésia, Palau, Turks e Cacos e Zimbabwe.</p>
<p className= "subtitulo">Dólar turismo </p>
<p className = "texto">Representa a cotação da moeda americana em que pessoas físicas que irão usar a moeda durante uma viagem ou na compra de algum objeto.</p>
<p className= "subtitulo">Dólar comercial != Dólar turismo -</p>
<p className = "texto">O dólar comercial é usado em transações econômicas de empresas ou do governo, por pessoas jurídicas,pode ser utilizado também em’	 exportação e importação, enquanto o dólar turismo é o dinheiro por pessoas físicas para viagens e afins.</p></div>


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
