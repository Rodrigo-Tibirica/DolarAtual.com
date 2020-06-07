import React, { useState, useEffect } from "react";
import "../../../styles/css/Bitcoin.css";
import { BTC_URL } from "../../../utils/URLS";
import axios from "axios";
import LogoBitcoin from "../../../assets/bitcoin.png";
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
            url: BTC_URL,
        })
            .then((response) => {
                return response.data;
                 //const valor = parseFloat(response.data.BTC.ask).toFixed(2);
                 //const data = response.data.BTC.create_date;
                 //this.setState({ valor, data });
            })
            .catch((error) => {
                console.log(error);
            });
        const cambio = parseFloat(dataAPI.BTC.ask).toFixed(2)
        const hora = dataAPI.BTC.create_date

        setValor(cambio);
        setHora(hora)

    };


        return ( 
            <div className="Bitcoin">
                <div className="logo-moeda">
                    <a href="/" className="logo">
                        <img src={LogoBitcoin}></img>
                    </a>
                </div>

                <div className="nome-moeda">
                    <h1>Bitcoin Hoje</h1>
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
