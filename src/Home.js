import React from 'react';
import './css/app.css';
import Contactame from './contacto'
// import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import {Header} from './Header';
import Productos from "./Productos";
import {carousel} from './actions';
import Rproduct from './rproduct';

const HomeC = () => {
    return(
        <div id="componenteK">
            <div className="">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">

                    <div className="item active">
                        <img className="k-imagen" src="http://ligia-fiedler.ro/theblondefashionista/images/1400x500/paris_02_1400x500.jpg" alt="Los Angeles"/>
                        <div className="carousel-caption">
                        <button className="k-buttonRef">Detalles</button>
                        </div>
                    </div>

                    <div className="item">
                        <img className="k-imagen" src="http://ligia-fiedler.ro/theblondefashionista/images/1400x500/paris_02_1400x500.jpg" alt="Chicago"/>
                        <div className="carousel-caption">
                        <button className="k-buttonRefSky">Detalles</button>
                        </div>
                    </div>
                    
                    <div className="item">
                        <img className="k-imagen" src="http://ligia-fiedler.ro/theblondefashionista/images/1400x500/paris_02_1400x500.jpg" alt="New York"/>
                        <div className="carousel-caption">
                        <button className="k-buttonRefRed">Detalles</button>
                        </div>
                    </div>
                    <div class="middle">
                        <div class="text">Construyendo</div>
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

                </div>

        </div>
    );
}

const Ofertas = () => {
    return(
        <section>
        <div className="col-md-4 col-sm-4 col-xs-4">
            <img className="img-ofertas" src="https://raw.githubusercontent.com/gmakersteam/demoavantec/master/public/imagenes-productos/tablet.png"/>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
            <img className="img-ofertas" src="https://raw.githubusercontent.com/gmakersteam/demoavantec/master/public/imagenes-productos/scooter.png"/>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
            <img className="img-ofertas" src="https://raw.githubusercontent.com/gmakersteam/demoavantec/master/public/imagenes-productos/galaxys8.png"/>
        </div>
        
    </section>
    );
}


export const Home = () => {
    return (
        <div>
            <Header />
            <HomeC/>
            <Productos/>
            <Contactame />
            <Rproduct/>
        </div>
    )
}
