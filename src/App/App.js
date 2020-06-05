import React from "react";
import "../styles/css/App.css";
import Routes from "../routes/routes";

import Logo from "../components/template/Logo";
import Header from "../components/template/Header";
import Nav from "../components/template/Nav";
import Main from "../components/template/Main";
import Footer from "../components/template/Footer";

export default (props) => {
    return (
        <div className="app">
            <Logo />
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    );
};
