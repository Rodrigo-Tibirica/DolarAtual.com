import React from "react";
import "../styles/css/App.css";

import Header from "../components/template/Header";
import Main from "../components/template/Main";
import Conversor from "../components/utils/Conversor";
import Grafico from "../components/utils/Grafico";
import Dolar from "../components/pages/Dolar";
import Footer from "../components/template/Footer";
import { BrowserRouter } from "react-router-dom";

export default (props) => {
    return (
        <BrowserRouter>
                <Header />
            <section className="app">
                {/* <Main /> */}
                <Dolar />
                {/* <Conversor /> */}
                {/* <MoedasAtuais /> */}
            </section>
                <Footer id="middle" />
            {/* <Grafico /> */}
        </BrowserRouter>
    );
};
