import React, { useState, useEffect } from "react";
import "../../styles/css/Dolar.css";
import { USD_URL } from "../../utils/URLS";
import axios from "axios";
import buscarCambio from "../../utils/BuscarCambio";

export default (params) => {
    const [cambio, setValor] = useState("");

    useEffect(() => {
        buscar();
    }, []);

    const buscar = async () => {
        const API_Data = await buscarCambio("USD");
        console.log(API_Data);
        setValor(API_Data);
    };

    return (
        <div className="Dolar">
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
