import React from 'react';
import {Carousel} from 'react-bootstrap';
import './css/app.css';
import Contactame from './contacto'
// import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import {Header} from './Header';
import Productos from "./Productos";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="bodyme">
                <Carousel>
		<Carousel.Item>
			<img width={100} height={500} alt="900x500" src="http://www.mipc.com.pe/media/wysiwyg/tinkPad.jpg" />
			<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img width={100} height={500} alt="900x500" src="http://www.mipc.com.pe/media/wysiwyg/Tintas.jpg" />
			<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
            {/* <img alt="" src="http://www.mipc.com.pe/media/wysiwyg/Dise_oPubli..jpg"> */}
			<img width={100} height={500} alt="900x500" src="http://www.mipc.com.pe/media/wysiwyg/Dise_oPubli..jpg"/>
			<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
            </div>
            <Productos/>
            <Contactame />
        </div>
    )
}

export default Home;