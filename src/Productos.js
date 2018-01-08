import React from 'react';
// import Utils from './Utils.js';
import {NavLink} from 'react-router-dom'
// import Header from './Header';

const Productos = () => {
    return (
        <div>
        
            <h1>Nuestros productos</h1>
            <hr/>
            <NavLink to={'/Detalles'}>Mas detalles</NavLink>
        </div>
    )
}

export default Productos;