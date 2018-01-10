import React from 'react';
import './css/app.css';
import Contactame from './contacto'
// import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import {Header} from './Header';
import Productos from "./Productos";
import {carousel} from './actions';

const HomeC = () => {
    return(
        <div>
            <div class="container">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">

                    <div class="item active">
                        <img className="k-imagen" src="https://mosaic-church.org.uk/images/sized/images/uploads/hands-up-1200x500.jpg" alt="Los Angeles"/>
                        <div class="carousel-caption">
                        <h3>Los Angeles</h3>
                        <p>LA is always so much fun!</p>
                        </div>
                    </div>

                    <div class="item">
                        <img className="k-imagen" src="https://i.pinimg.com/736x/1e/1c/12/1e1c12894c7311846a207ae16fdf93fc--air-france-pic-nice.jpg" alt="Chicago"/>
                        <div class="carousel-caption">
                        <h3>Chicago</h3>
                        <p>Thank you, Chicago!</p>
                        </div>
                    </div>
                    
                    <div class="item">
                        <img className="k-imagen" src="https://i.pinimg.com/736x/1e/1c/12/1e1c12894c7311846a207ae16fdf93fc--air-france-pic-nice.jpg" alt="New York"/>
                        <div class="carousel-caption">
                        <h3>New York</h3>
                        <p>We love the Big Apple!</p>
                        </div>
                    </div>
                
                    </div>

                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>

        </div>
    );
}


export const Home = () => {
    return (
        <div>
            <Header />
            <HomeC/>
            <Productos/>
            <Contactame />
        </div>
    )
}
