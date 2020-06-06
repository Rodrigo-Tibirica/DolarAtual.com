import React, { useState, useEffect } from "react";
import "../../../styles/css/Euro.css";
import { EUR_URL } from "../../../utils/URLS";
import axios from "axios";
import LogoEuro from "../../../assets/euro.png";
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
            url: EUR_URL,
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
        const cambio = parseFloat(dataAPI.EUR.ask).toFixed(2)
        const hora = dataAPI.EUR.create_date

        setValor(cambio);
        setHora(hora)

    };


        return ( 
            <div className="Euro">
                <div className="logo-moeda">
                    <a href="/" className="logo">
                        <img src={LogoEuro}></img>
                    </a>
                </div>

                <div className="nome-moeda">
                    <h1>Euro Hoje</h1>
                </div>

                <div className="valor">
                    <p> {cambio}</p>
                </div>

                <div className="atualizado">
                    <p>Atualizado em: &nbsp; </p>
                    <p> {hora}</p>
                </div>
            </div>
        
    )
}
