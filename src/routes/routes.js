import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dolar from "../../src/components/Pages/Dolar/Dolar";
import Euro from "../../src/components/Pages/Euro/Euro";

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