import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    Redirect,
    NavLink,
    Route,
    Switch,
    BrowserRouter} from 'react-router-dom';
// import './styles/App.css';
// import {Home, Information, NavBar} from './Home';
import {Home} from './Home'
const App = ({selected}) => {
return (
     <div className="container-fluid">
        <HashRouter>
            <Switch>
                    <Route path="/home" render={() => <Home  />}/>
                    {/* <Route path = "/details" render = { () => <Details NavBar={NavBar} Information={Information}/>} /> */}
                    <Route path='/demoavantec' render={() => <Redirect to="/home"/>}/>
                    <Route exact path="/" render={() => <Home />}/>
            </Switch>
        </HashRouter>
    </div>
)
}
const mapToProps = ({ selected}) => ({ selected});

export default connect(mapToProps)(App);