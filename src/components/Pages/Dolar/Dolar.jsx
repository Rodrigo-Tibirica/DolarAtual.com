import React, { useState, useEffect } from "react";
import "../../../styles/css/Dolar.css";
import { USD_URL } from "../../../utils/URLS";
import axios from "axios";
import LogoDolar from "../../../assets/dollar.png";
import Main from "../../template/Main";

export default (params) => {
    const [cambio, setValor] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");

    useEffect(() => {
        buscarCambio();
    }, []);

    const buscarCambio = async () => {
        const dataAPI = await axios({
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

        const cambio = parseFloat(dataAPI.USD.ask).toFixed(2);
        const split = dataAPI.USD.create_date.split(" ");
        const aux = split[0].split("-");
        const data_formatada = aux[2] + "/" + aux[1] + "/" + aux[0];
        const hora = split[1];
        setValor(cambio);
        setData(data_formatada);
        setHora(hora);
        // console.log(dataEHora);
    };

    return (
        <div className="Dolar">
            {/* <div className="logo-moeda"> */}
            {/* <a href="/" className="logo"> */}
            {/* <img src={LogoDolar}></img> */}
            {/* </a> */}
            {/* </div> */}

            <div className="valor-comercial">
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
            </div>
        </div>
    );
};
