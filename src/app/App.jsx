import React from "react";
import "../styles/css/App.css";

import Logo from "../components/template/Logo";
import Header from "../components/template/Header";
import SideBarLeft from "../components/template/SideBarLeft";
import SideBarRight from "../components/template/SideBarRight";
import Main from "../components/template/Main";
import Footer from "../components/template/Footer";
import {BrowserRouter } from "react-router-dom";

export default (props) => {
    return (
        <BrowserRouter> 
        <div className="app">
            {/* <Logo/> */}
            <Header />
            <SideBarLeft />
            <Main />
            <SideBarRight/>
            <Footer />
        </div>
        </BrowserRouter>
    );
};
