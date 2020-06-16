import React from "react";
import "../styles/css/App.css";

import Header from "../components/template/Header";
import Main from "../components/template/Main";
import Conversor from "../components/template/Conversor";
import Grafico from "../components/template/Grafico";
import MoedasAtuais from "../components/template/MoedasAtuais";
import Footer from "../components/template/Footer";
import { BrowserRouter } from "react-router-dom";

export default (props) => {
    return (
        <BrowserRouter>
            <Header />
            <div className="app">
                <Main />
                {/* <Conversor /> */}
                <Grafico />
                {/* <MoedasAtuais /> */}
            </div>
                <Footer />
        </BrowserRouter>
    );
};
