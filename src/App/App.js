import React from "react";
import "../styles/css/App.css";

import Logo from "../components/template/Logo";
import Header from "../components/template/Header";
import SideBarLeft from "../components/template/SideBarLeft";
import SideBarRight from "../components/template/SideBarLeft";
import Main from "../components/template/Main";
import Footer from "../components/template/Footer";
import { Route } from "react-router-dom";
import Routes from '../routes/routes';

export default function App() {
    return (
      <Routes />
    );

};
