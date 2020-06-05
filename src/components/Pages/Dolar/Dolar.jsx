import React, { Component } from "react";
import "./Dolar.css";
import Display from "../../Pages/Display/displayValor";
import {USD_URL} from "../../../utils/URLS";
import axios from "axios";

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
            url: USD_URL,
        })
            .then((response) => {
                const valor = parseFloat(response.data.USD.ask).toFixed(2)
                const data = (response.data.USD.create_date)
                this.setState({valor, data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        //  this.buscarDolar()
        
        return (
            <div className= "cambio">
                <span id="simbolo"> $</span>
                <h1>Dólar Hoje</h1>
                <Display id="1" value={this.state.valor} />
                <Display id="1" value={"atualizado em: " +  this.state.data} />
                
            </div>
        );
    }
}
