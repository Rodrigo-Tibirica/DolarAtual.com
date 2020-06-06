import React from "react";
import { Route, Switch } from "react-router-dom";

import Dolar from "../components/Pages/dolar/Dolar";
import Euro from "../components/Pages/euro/Euro";

export default function Routes() {
    return (
            <Switch>
                <Route path="/dolaratual" exact component={Dolar}></Route>
                <Route path="/euroatual" exact component={Euro}></Route>
            </Switch>
    );
}

/* */