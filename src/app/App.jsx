import React from "react";
import "../styles/css/App.css";

import Header from "../components/template/Header";
import Main from "../components/template/Main";
import Conversor from "../components/utils/Conversor";
import Grafico from "../components/utils/Grafico";
import Dolar from "../components/pages/Dolar";
import Footer from "../components/template/Footer";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/routes"
export default (props) => {
    return (
        <BrowserRouter>
            <section className="app">
                <Header />
                {/* <Main /> */}
                <Router />
                {/* <Conversor /> */}
                {/* <MoedasAtuais /> */}
            </section>
                <Footer id="middle" />
            {/* <Grafico /> */}
        </BrowserRouter>
    );
};
