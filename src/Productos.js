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
const Producto = ({product}) => {
    console.log('food', product)
    // let compu = food.filter((value, index)=> {
    //     return (index < 4)? value : '';
    // })
    // console.log('compu', compu)
    let computadoras = product.map((item, index) => {
        return (
            <div key={index} className='product-card col-sm-3 centered' className={item.class}>
                <div className='product-img'>
                    <img className='img-responsive' src={item.img} />
                </div>
                <div className="product-info ">
                    <div className="name">{item.name}</div>
						<div className="original-price">{item.price}</div>
              				<div className="discount">-44%</div>
                        <div className="price-secondary">S/.{item.price}</div>

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
		<Producto product={phone} />
        <Producto product={computer} />
        <Producto product={tablets} />
        {/* <Producto food={food} /> */}
        </section >
    )
}

const mapToProps = ({phone, computer, tablets, selected}) => ({phone, computer, tablets, selected});

export default connect(mapToProps)(Productos);