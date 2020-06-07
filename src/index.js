import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/index.css";
import App from "./app/App"
import {Router} from "react-router-dom"
import {createBrowserHistory} from "history"
const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App />

    </Router>,
    

    document.getElementById("root")
);
