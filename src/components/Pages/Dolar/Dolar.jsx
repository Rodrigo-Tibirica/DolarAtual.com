import React, { Component } from "react";
import "../../../styles/css/Dolar.css";
import { USD_URL } from "../../../utils/URLS";
import axios from "axios";
import LogoDolar from "../../assets/dollar.png";
import Main from "../../template/Main";

export default class Cambio extends Component {
    state = {
        valor: "",
        data: "",
    };
    constructor(params) {
        super();
        this.buscarDolar = this.buscarDolar.bind(this);
    }

    componentDidMount() {
        window.addEventListener("load", this.buscarDolar);
    }

    buscarDolar() {
        console.log("ok");
        return axios({
            method: "GET",
            url: USD_URL,
        })
            .then((response) => {
                const valor = parseFloat(response.data.USD.ask).toFixed(2);
                const data = response.data.USD.create_date;
                this.setState({ valor, data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        //  this.buscarDolar()
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
                    <p> {this.state.valor}</p>
                </div>

                <div className="atualizado"> 
                    <h2>Atualizado em:</h2>
                    <p> {this.state.data}</p>
                </div>
            </div>
        );
    }
}
