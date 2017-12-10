import React, { Component } from 'react';
// import Utils from './Utils.js';

import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'
import Header from './Header';

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
        </div>
    )
}

export default Home;