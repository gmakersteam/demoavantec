import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
// import './styles/App.css';
// import {Home, Information, NavBar} from './Home';
import {Home} from './Home';
import {Detalles} from "./Detalles";

const App = ({ phone, computer, tablets, selected }) => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/home" render={() => <Home />} />
                    {/* <Route path = "/details" render = { () => <Details NavBar={NavBar} Information={Information}/>} /> */}
                    <Route path='/demoavantec' render={() => <Redirect to="/home" />} />
                    <Route path='/Detalles' render={() => <Detalles />} />
                    <Route exact path="/" render={() => <Home />} />
                </Switch>
            </HashRouter>
        </div>
    )
}
const mapToProps = ({ phone, computer, tablets, selected }) => ({ phone, computer, tablets, selected });

export default connect(mapToProps)(App);