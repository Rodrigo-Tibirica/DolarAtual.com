import React, { useState, useEffect } from "react";
import "../../../styles/css/Libra.css";
import { GBP_URL } from "../../../utils/URLS";
import axios from "axios";
import LogoLibra from "../../../assets/libra.png";
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
            url: GBP_URL,
        })
            .then((response) => {
                return response.data;
                // const valor = parseFloat(response.data.GBP.ask).toFixed(2);
                 //const data = response.data.GBP.create_date;
                 //this.setState({ valor, data });
            })
            .catch((error) => {
                console.log(error);
            });
        const cambio = parseFloat(dataAPI.GBP.ask).toFixed(2)
        const hora = dataAPI.GBP.create_date

        setValor(cambio);
        setHora(hora)

    };


        return ( 
            <div className="Libra">
                <div className="logo-moeda">
                    <a href="/" className="logo">
                        <img src={LogoLibra}></img>
                    </a>
                </div>

                <div className="nome-moeda">
                    <h1>Libra Hoje</h1>
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
