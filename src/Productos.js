import React from 'react';
// import Utils from './Utils.js';
import { NavLink } from 'react-router-dom'
// import Header from './Header';
import './Productos.css';
import img_prueba from './probbb.png';

const Producto = ({ imagen, nombre, precio, oferta }) => {
    return (
        <div className="col-md-3 col-sm-3 col-xs-3 producto">
            <NavLink to={'/Detalles'}>
                <img className="img-responsive" src={imagen} alt="" />
            </NavLink>
            <h3>
                <NavLink to={'/Detalles'}>{nombre}</NavLink>
            </h3>
            <div className='precio'>
                <p className={oferta ? 'old' : 'precio'}>S/. {precio}</p>
                {
                    oferta && <p className='precio oferta'>S/. {oferta}</p>
                }
            </div>
        </div>
    )
}
export const Productos = () => {
    return (
        <div id='Productos'>
            <h1>Nuestros productos</h1>
            <section id="catalogo">

                <div className="container">
                    <div className="row">
                        <div id="myCarousel" className="carousel slide col-md-10 col-sm-12 col-xs-12">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row-fluid">
                                        <Producto imagen={img_prueba} precio={999.99} oferta={899.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} oferta={899.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} oferta={899.99} nombre={'Producto'} />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row-fluid">
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} oferta={899.99} />
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div id="myCarousel2" className="carousel slide col-md-10 col-sm-12 col-xs-12">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel2" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel2" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row-fluid">
                                        <Producto imagen={img_prueba} precio={999.99} oferta={899.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} oferta={899.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} oferta={899.99} nombre={'Producto'} />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row-fluid">
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} oferta={899.99} />
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} />
                                        <Producto imagen={img_prueba} precio={999.99} nombre={'Producto'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
