import React from 'react';
// import Utils from './Utils.js';
import { NavLink } from 'react-router-dom'
// import Header from './Header';
//import './Productos.css';
import imagen from './probbb.png';

const Productos = () => {
    return (
        <div>
            <h1>Nuestros productos</h1>
            <section id="catalogo">

                <div className="container">
                    <div className="row">
                        <div id="myCarousel" className="carousel slide col-md-10 col-sm-12 col-xs-12">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row-fluid">
                                        <div className="col-md-3 col-sm-3 col-xs-3"><a href="nintendo.html"><img className="img-responsive" src={imagen} alt="" /></a></div>
                                        <div className="col-md-3 col-sm-3 col-xs-3"><a href="nintendo.html"><img className="img-responsive" src={imagen} alt="" /></a></div>
                                        <div className="col-md-3 col-sm-3 col-xs-3"><a href="nintendo.html"><img className="img-responsive" src={imagen} alt="" /></a></div>
                                        <div className="col-md-3 col-sm-3 col-xs-3"><a href="nintendo.html"><img className="img-responsive" src={imagen} alt="" /></a></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row-fluid">
                                        <div className="col-md-3 col-sm-3 col-xs-3"><a href="nintendo.html"><img className="img-responsive" src={imagen} alt="" /></a></div>
                                        <div className="col-md-3 col-sm-3 col-xs-3"><a href="nintendo.html"><img className="img-responsive" src={imagen} alt="" /></a></div>
                                        <div className="col-md-3 col-sm-3 col-xs-3"><a href="nintendo.html"><img className="img-responsive" src={imagen} alt="" /></a></div>
                                        <div className="col-md-3 col-sm-3 col-xs-3"><a href="nintendo.html"><img className="img-responsive" src={imagen} alt="" /></a></div>
                                    </div>
                                </div>
                            </div>

                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="col-md-1 centro"><a href="nintendo.html">Mas resultados</a></div>
                    </div>
                </div>
            </section>
            <hr />
            <NavLink to={'/Detalles'}>Mas detalles</NavLink>
        </div>
    )
}

export default Productos;