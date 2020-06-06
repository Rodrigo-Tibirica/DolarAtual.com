import React, { Component } from "react";
import "../../../styles/css/Euro.css";
import {EUR_URL} from "../../../utils/URLS";
import axios from "axios";
import LogoEuro from "../../assets/euro.png"

export default class Cambio extends Component {
    state = {
        valor: "",
        data: "",
    };
    constructor(params) {
        super();
        this.buscarDolar = this.buscarDolar.bind(this);
    }

    componentDidMount()
    {
      window.addEventListener('load', this.buscarDolar)
    }

    buscarDolar() {
      console.log('ok');
        return axios({
          
            method: "GET",
            url: EUR_URL,
        })
            .then((response) => {
                const valor = parseFloat(response.data.EUR.ask).toFixed(2)
                const data = (response.data.EUR.create_date)
                this.setState({valor, data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        //  this.buscarDolar()
        
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
                    <p> {this.state.valor}
           
        </p>
                </div>

                <div className="atualizado"> 
                    <p>Atualizado em:  &nbsp; </p>
                    <p> {this.state.data}</p>
                </div>
            </div>
        );
    }
}
