import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/app.css';
import Contactame from './contacto'

export const Home = () =>{
    return(
        <div>
        {/* <div>Hola Home</div> */}
        <Contactame/>
        </div>
    )
} 