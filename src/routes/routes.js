import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router";

import Dolar from "../components/pages/Dolar";
import Euro from "../components/pages/Euro";
import Libra from "../components/pages/Libra"
import Bitcoin from "../components/pages/Bitcoin"
export default function Routes() {
    return (
        
        <Switch>
            <Route path="/" exact component={Dolar}></Route>
            <Route path="/dolarhoje" exact component={Dolar}></Route>
            <Route path="/eurohoje" exact component={Euro}></Route>
            <Route path="/librahoje" exact component={Libra}></Route>
            <Route path="/bitcoinhoje" exact component={Bitcoin}></Route>
            <Redirect from="*" to="/" />
        </Switch>
    );
}

/* */
