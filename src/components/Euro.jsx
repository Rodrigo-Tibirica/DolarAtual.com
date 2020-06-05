import React, { Component } from "react";
import "./Euro.css";
import Display from "../components/displayValor";
import {EUR_URL} from "../utils/URLS";
import axios from "axios";

export default class Cambio extends Component {
    state = {
        valor: "",
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
                this.setState({valor});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        //  this.buscarDolar()
        
        return (
            <div className="cambio">
                <span id="simbolo"> €</span>
                <h1>Euro Hoje</h1>
                <Display id="1" value={this.state.valor} />
            </div>
        );
    }
}
