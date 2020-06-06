import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dolar from "../components/pages/dolar/Dolar";
import Euro from "../components/pages/euro/Euro";

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