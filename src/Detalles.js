import React, { Component } from 'react';
// import Utils from './Utils.js';

import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom';
import Header from './Header';
// import "./Detalles.css";
import './css/app.css';

const Productos = () => {
    return (
        <div>
            <Header/>
            <div className="kdetails">
                <div class="col-md-4 col-xs-12 col-sm-4 col-lg-4">
                    <div class="col-item">
                        <div class="photo">
                            <img class="img-responsive" src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/26219514_1814719181902792_5028677798249707148_n.jpg?oh=c830dad72a69334588de94298e1e66ee&oe=5ABA0355" alt=""/>
                        </div>
                        <div class="info">
                                <div class="separator clear-left">
                                    <p class="btn-details">
                                        <i class="fa fa-shopping-cart"></i><a href="#" 
                                        class="hidden-sm" data-toggle="modal" data-target="#myModal4">Añadir a carrito</a></p>
                                </div>
                                <div class="clearfix"></div>
                                </div>
                        </div>
                    </div> 

                    <div className="col-md-5 col-xs-12 col-sm-5 col-lg-5 k-details">
                        <h2 className="k-title">Tablet Advance SmartPad SP7346, 10.1" 1280x800, Android 5.1, 3G, Dual SIM, 16GB, 2GB.</h2>
                        <hr/>
                        <p className="k-detalleproduct">Bandas 3G (850/1900 MHz) / 2G (850/900/1800/1900 MHZ), conectividad Wireless 802.11 b/g/n, Bluetooth, procesador Mediatek MTK8321 Quad-Core, memoria RAM 2GB, almacenamiento interno 16GB, ranura micro-SD (soporta hasta 32GB), conector micro-USB 2.0, conector 3.5mm, cámara posterior 5 MP con Flash LED, cámara frontal 2 MP, Radio FM, reproduce video y audio.</p>
                    </div>
                    <div className="col-md-3 col-xs-12 col-sm-3 col-lg-3 k-details">
                        <h3>Precio:</h3>
                        <h1 className="k-precio">S/. 460.00</h1>
                        <button type="button" class="k-buy" ><span><span>Comprar</span></span></button>
                        <div class="view-pagos">
                            <span><img src="http://www.mipc.com.pe/skin/frontend/ultimo/default/images/pasarelas/pagoefectivo.jpg" height="27px"/></span>
                            <span><img src="http://www.mipc.com.pe/skin/frontend/ultimo/default/images/pasarelas/visa.jpg" height="27px"/></span>
                            <span><img src="http://www.mipc.com.pe/skin/frontend/ultimo/default/images/pasarelas/mastercard.jpg" height="27px"/></span>
                            <span><img src="http://www.mipc.com.pe/skin/frontend/ultimo/default/images/pasarelas/amex.jpg" height="27px"/></span>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Productos;