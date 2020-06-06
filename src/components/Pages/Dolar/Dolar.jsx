import React, { useState, useEffect } from "react";
import "../../../styles/css/Dolar.css";
import { USD_URL } from "../../../utils/URLS";
import axios from "axios";
import LogoDolar from "../../../assets/dollar.png";
import Main from "../../template/Main";

export default (params) => {

    const [cambio, setValor] = useState();
    const [hora, setHora] = useState();

    useEffect(() => {
        buscarCambio();
    },[]);   

    const buscarCambio = async () => {
        const dataAPI =  await axios({
            method: "GET",
            url: USD_URL,
        })
            .then((response) => {
                return response.data;
                // const valor = parseFloat(response.data.USD.ask).toFixed(2);
                // const data = response.data.USD.create_date;
                // this.setState({ valor, data });
            })
            .catch((error) => {
                console.log(error);
            });

        setValor(dataAPI.USD.ask);
        setHora(dataAPI.USD.create_date)

    };

    return (
        <div className="Dolar">
            <div className="logo-moeda">
                <a href="/" className="logo">
                    <img src={LogoDolar}></img>
                </a>
            </div>

            <div className="nome-moeda">
                <h1>Dólar Hoje</h1>
            </div>

            <div className="valor">
                <p> {cambio}</p>
            </div>

            <div className="atualizado">
                <p>Atualizado em: &nbsp; </p>
                <p> {hora}</p>
            </div>
        </div>
    );
};
