import React from 'react';
import {connect} from "redux-zero/react";

// import Utils from './Utils.js';
import { NavLink } from 'react-router-dom'
import {Carousel} from 'react-bootstrap';
import './css/app.css';
// import { colImg, rowImg } from "./actions";
// import img_prueba from './probbb.png';
// const colImgHtml = colImg();
// const rowImgHtml = rowImg();
const Producto = ({food}) => {
    console.log('food', food)
    let compu = food.filter((value, index)=> {
        return (index < 4)? value : '';
    })
    console.log('compu', compu)
    let computadoras = compu.map((item, index) => {
        return (
            <div key={index} className='product-card col-sm-3'>
                <div className='product-img'>
                    <img className='img-responsive' src={item.img} />
                </div>
                <div class="product-info ">
                    <div class="name">{item.name}</div>
						<div class="original-price">{item.price}</div>
              				<div class="discount">-44%</div>
                        <div class="price-secondary">S/ 159.90</div>

                </div>
            </div>
        )
    })
    return (
        
                <div className='row catalogo'>{computadoras} </div>
            
    )
}
const Productos = ({phone, computer, tablets, selected}) => {
    return (
        <section id='productos'>
		<Producto food={phone} />
        <Producto food={computer} />
        <Producto food={tablets} />
        {/* <Producto food={food} /> */}
        </section >
    )
}

const mapToProps = ({phone, computer, tablets, selected}) => ({phone, computer, tablets, selected});

export default connect(mapToProps)(Productos);