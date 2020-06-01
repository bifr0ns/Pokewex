import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFoundPage from "../components/NotFoundPage";
import Pokedex from "../components/Pokedex";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    {<Redirect to="/pokedex" />}
                </Route>
                <Route path="/pokedex" component={Pokedex} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;
