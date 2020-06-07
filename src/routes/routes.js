import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router";

import Dolar from "../components/pages/dolar/Dolar";
import Euro from "../components/pages/euro/Euro";
import Libra from "../components/pages/libra/Libra"
import Bitcoin from "../components/pages/bitcoin/Bitcoin"
export default function Routes() {
    return (
        
        <Switch>
            <Route path="/" exact component={Dolar}></Route>
            <Route path="/dolaratual" exact component={Dolar}></Route>
            <Route path="/euroatual" exact component={Euro}></Route>
            <Route path="/libraatual" exact component={Libra}></Route>
            <Route path="/bitcoinatual" exact component={Bitcoin}></Route>

            <Redirect from="*" to="/" />
        </Switch>
    );
}

/* */
