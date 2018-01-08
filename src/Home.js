import React from 'react';
import './css/app.css';
import Contactame from './contacto'
// import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import {Header} from './Header';
import Productos from "./Productos";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="bodyme">
                <div className='bodymeOpac'>
                    {/* <h1 className="bodyme__title text-white animated slideInRight"> */}
                        {/* <br /></h1> */}
                </div>
            </div>
            <Productos/>
            <Contactame />
        </div>
    )
}

export default Home;