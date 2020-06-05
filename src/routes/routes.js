import React from "react";
import { BrowserRouter, Route, Switch } from "react-router";

import Dolar from "../components/Dolar";
import Euro from "../components/Euro";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dolaratual" exact component={Dolar}></Route>
                <Route path="/euroatual" exact component={Euro}></Route>
            </Switch>
        </BrowserRouter>
    );
}

/* */