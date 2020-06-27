// import React, { useState, useEffect } from "react";
// import "../../styles/css/Bitcoin.css";
// import { BTC_URL } from "../../../utils/URLS";
// import axios from "axios";

// export default (params) => {
//     const [cambio, setValor] = useState("");
//     const [data, setData] = useState("");
//     const [hora, setHora] = useState("");

//     useEffect(() => {
//         buscarCambio();
//     }, []);

//     const buscarCambio = async () => {
//         const dataAPI = await axios({
//             method: "GET",
//             url: BTC_URL,
//         })
//             .then((response) => {
//                 return response.data;
//                 //const valor = parseFloat(response.data.BTC.ask).toFixed(2);
//                 //const data = response.data.BTC.create_date;
//                 //this.setState({ valor, data });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });

//         const cambio = dataAPI.BTC.ask;
//         const split = dataAPI.BTC.create_date.split(" ");
//         const aux = split[0].split("-");
//         const data_formatada = aux[2] + "/" + aux[1] + "/" + aux[0];
//         const hora = split[1];
//         setValor(cambio);
//         setData(data_formatada);
//         setHora(hora);
//     };

//     return (
//         <div className="Bitcoin">
//             <div className="nome-moeda">
//                 <h1>Bitcoin Hoje</h1>
//             </div>

//             <div className="valor">
//                 <p className="cifrao">{`R$`}</p>
//                 <p className="cambio"> {`${cambio}`}</p>
//             </div>

//             <div className="atualizado">
//                 <p>{`Atualizado em: ${data} as ${hora}`}</p>
//             </div>
//         </div>
//     );
// };
import React, { useState, useEffect, Fragment } from "react";
import "../../styles/css/Bitcoin.css";
import buscarCambio from "../utils/BuscarCambio";
import Conversor from "../utils/Conversor";
import Grafico from "../utils/Grafico";
import Banner_Flag from "../../assets/icons/btc.png";
import Origem_Flag_Icon from "../../assets/icons/btc.png";
import Destino_Flag_Icon from "../../assets/icons/br.png";

export default (params) => {
    const [Cambio, setCambio] = useState("");
    const [Valor, setaValor] = useState(1.0.toFixed(2))
    const [origemInput, setaorigemInput] = useState("origem");
    let valorOrigem, valorDestino;
    if (origemInput === "origem") {
        valorOrigem = Valor;
        valorDestino = valorOrigem * Cambio;
    } else if (origemInput === "destino") {
        valorDestino = Valor;
        valorOrigem = valorDestino / Cambio;
    }

    useEffect(() => {
        buscar();
    }, []);

    const buscar = async () => {
        const API_Data = await buscarCambio("BTC");
        console.log(API_Data);
        setCambio(API_Data.BTC.ask);
    };

    const atualizarValorOrigem = (e) => {
        let value = e.target.value.split(",").join("");
        setaValor(value);
        setaorigemInput("origem");
    };
    const atualizarValorDestino = (e) => {
        let value = e.target.value.split(",").join("");
        setaValor(value);
        setaorigemInput("destino");
    };

    return (
        <Fragment>
            <section className="Bitcoin">
                <div className="main-banner">
                    <img src={Banner_Flag} alt="" />
                    <h1>Bitcoin Hoje </h1>
                </div>
                <div className="conversor-container">
                    <Conversor
                        flag={Origem_Flag_Icon}
                        cifrao="BTC"
                        sigla="BTC"
                        valor={valorOrigem}
                        mudarValor={atualizarValorOrigem}
                    />
                    <Conversor
                        flag={Destino_Flag_Icon}
                        cifrao="R$"
                        sigla="BRL"
                        valor={valorDestino}
                        mudarValor={atualizarValorDestino}
                    />
                </div>
            </section>

            <nav className="bitcoin-scroll-header">
                <ul className="bitcoin-menu">
                    <li>
                        <a href="#">Bitcoin Comercial</a>
                    </li>
                    <li>
                        <a href="#">Bitcoin Turismo</a>
                    </li>
                    <li>
                        <a href="#">Sobre Bitcoin</a>
                    </li>
                </ul>
            </nav>
            <Grafico moeda="BTC"/>
            <div className="bitcoincomercial-info"></div>
        </Fragment>
    );
};

/********Banners Old********* */
{
    /* <div className="valor-comercial">
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
            </div> */
}
