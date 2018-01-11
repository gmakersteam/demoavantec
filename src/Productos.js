import React from 'react';
import {connect} from "redux-zero/react";

// import Utils from './Utils.js';
import { NavLink } from 'react-router-dom'
import {Carousel} from 'react-bootstrap';
import './Productos.css';
import { colImg, rowImg } from "./actions";
import img_prueba from './probbb.png';
const colImgHtml = colImg();
const rowImgHtml = rowImg();
const Producto = ({food}) => {
    console.log('food', food)
    let compu = food.filter((value, index)=> {
        return (index < 4)? value : '';
    })
    console.log('compu', compu)
    let computadoras = compu.map((item, index) => {
        return (
            <div key={index} className='col-sm-3'>
                <img className='img-responsive' src={item.img} />
            </div>
        )
    })
    return (
        <Carousel>
            <Carousel.Item>
                <div className='row'>{computadoras} </div>
            </Carousel.Item>
        </Carousel>
    )
}
const Productos = ({food, selected}) => {
    return (
        <section id='productos'>
		<Producto food={food} />
        <Producto food={food} />
        <Producto food={food} />
        <Producto food={food} />
        </section >
    )
}

const mapToProps = ({food, selected}) => ({food, selected});

export default connect(mapToProps)(Productos);