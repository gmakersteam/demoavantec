import React from 'react';
import {connect} from "redux-zero/react";

// import Utils from './Utils.js';
import { NavLink } from 'react-router-dom'
import {Carousel} from 'react-bootstrap';
import Slider from 'react-slick';
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
        let clase = `product-card col-sm-3 centered ${item.class}`;
        return (
            <div key={index} className={clase}>
                <div className='product-img'>
                    <img className='img-responsive' src={item.img} />
                    <div className="middle">
                        <div className="text">Construyendo</div>
                    </div>
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
        <Product2 product={tablets}/>
        {/* <Producto food={food} /> */}
        </section >
    )
}
const Product2 = ({product}) => {
    
    const settings = {
    //   dots: false,
      autoplay:true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        //   dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
        <div className='ma-product'>
        <Slider {...settings}>
            {
                product.map((item, index) =>{
                    return (
                        <div key={index}>
                            <div>
                                <img src={item.img}/>
                            </div>
                            <div>
                                {item.name}
                            </div>
                        </div>
                    )
                })
            }
      </Slider>
      </div>
    )
}
const mapToProps = ({phone, computer, tablets, selected}) => ({phone, computer, tablets, selected});

export default connect(mapToProps)(Productos);