import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navibar from "./Navibar";
import Orders from "./Orders";


function Routes(){
    return (
        <BrowserRouter>
        <Navibar/>
        <Switch>
            <Route path="/orders">
                <Orders/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;