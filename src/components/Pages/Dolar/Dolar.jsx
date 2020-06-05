import React, { Component } from "react";
import "./Dolar.css";

import Display from "../Display/displayValor";
import {USD_URL} from "../../../utils/URLS";
import axios from "axios";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LogoDolar from '../../../assets/dollar.png'


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
        window.addEventListener('load', this.buscarDolar)
    }

    buscarDolar() {
        console.log('ok');
        return axios({

            method: "GET",
            url: USD_URL,
        })
            .then((response) => {
                const valor = parseFloat(response.data.USD.ask).toFixed(2)
                const data = (response.data.USD.create_date)
                this.setState({ valor, data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        //  this.buscarDolar()

        return (
            <div className="Container">

                <div className="LogoMoeda">

                    <img src={LogoDolar}></img>

                </div>

                <div className="NomeMoeda">
                    
                    <h1>Dólar Hoje</h1>
                
                </div>

                <div className="valor" >

                    <p> {this.state.valor}</p>

                </div>

                <div className="atualizado">

                    <p> {this.state.data}</p>

                </div>
            </div>
        );
    }
}
