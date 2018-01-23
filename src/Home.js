import React, { Component } from 'react';
import './Home.css';
import Contactame from './contacto'
// import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import {Header} from './Header';
import Productos from "./Productos";
import {carousel} from './actions';
import Slider from 'react-slick';

const HomeC = () => {
    return(
        <div id="componenteK">
            <div className="">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner">

                    <div className="item active">
                        <img className="k-imagen" src="./img/home/1.jpeg" alt="Los Angeles"/>
                        <div className="carousel-caption">
                        <button className="k-buttonRef">Detalles</button>
                        </div>
                    </div>

                    <div className="item">
                        <img className="k-imagen" src="./img/home/5.jpg" alt="Los Angeles"/>
                        <div className="carousel-caption">
                        <button className="k-buttonRef">Detalles</button>
                        </div>
                    </div>
                    <div className="item">
                        <img className="k-imagen" src="img/home/3.jpg" alt="Chicago"/>
                        <div className="carousel-caption">
                        <button className="k-buttonRefSky">Detalles</button>
                        </div>
                    </div>
                    
                    <div className="item">
                        <img className="k-imagen" src="img/home/2.jpg" alt="New York"/>
                        <div className="carousel-caption">
                        <button className="k-buttonRefRed">Detalles</button>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="text">Construyendo</div>
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

const Aditional = () => {
    return(
        <div class="content-steps-home steps-home-desktop ng-scope">
	<div class="">
		<div class=" steps-home-row">
			<div class="col-xs-3 col-sm-3 col-md-3 step-home">
				<div class="text-center">
					<div class="first-icon-step-home sprite-steps-home"></div>
					<div class="title-step-home">
						Tiendas <br/> oficiales
					</div>
					<br/>
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 step-home">
				<div class="text-center">
					<div class="two-icon-step-home sprite-steps-home"></div>
					<div class="title-step-home" >
						Llegamos <br/> a todo el país
					</div>
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 step-home">
				<div class="text-center">
					<div class="three-icon-step-home sprite-steps-home"></div>
					<div class="title-step-home" >
						Paga con cualquier <br/> forma de pago
					</div>
				</div>
			</div>
			<div class="col-xs-3 col-sm-3 col-md-3 step-home last-step">
				<div class="text-center">
					<div class="fourth-icon-step-home sprite-steps-home"></div>
					<div class="title-step-home" >
						Fonocompras <br/>
						<span >
							<b>(01) 500-7899</b>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    );
}

export default class AutoPlay extends Component{
    render() {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 4000,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
          <div className="">
            <h2 class="col-md-12 col-xs12 title-general">
			<b>Contamos con gran variedad de marcas</b>
		</h2>
            <Slider {...settings}>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="http://images.indianexpress.com/2016/07/samsung-logo-759.png"/></div>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="http://www.advanceperu.com/wp-content/uploads/logo-Advance-specs-1-300x182.png"/></div>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="http://app.getsnapps.com/app_201/content/281_1702210943_getsnapps-2.png"/></div>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="http://metrosite2014.wpengine.netdna-cdn.com/wp-content/uploads/2013/08/Sony-logo3.jpg"/></div>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="https://vignette.wikia.nocookie.net/logopedia/images/2/2e/Moto_lenovo_logo_2016.png/revision/latest/scale-to-width-down/350?cb=20160916192222"/></div>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="https://www.canon.es/Images/canon-press-centre-canon-logo_tcm86-1449463.png"/></div>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="https://cdn5.aoe.com/fileadmin/AOE.com/images/logos/clients/Panasonic_color.svg"/></div>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="https://ae01.alicdn.com/kf/HTB1BrEqOXXXXXb3apXX760XFXXXa.png"/></div>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="http://connectstore.co.za/wp-content/uploads/2016/12/C53S625419_default.jpg?x95000"/></div>
              <div className="col-md-3 col-xs-3"><img className="img-responsive" src="https://static.digit.in/default/e3f765e70743d75a4cff1ef6a19f96937c25294a.jpeg"/></div>

            </Slider>
          </div>
        );
      }
}
export const Home = () => {
    return (
        <div>
            <Header />
            <HomeC/>
            <Aditional/>
            <AutoPlay/>
            <Productos/>
            <Contactame />
        </div>
    )
}
