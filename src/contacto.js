import React from 'react';
import './css/app.css';

// import { connect } from "redux-zero/react";
import { Row, Col } from 'react-bootstrap';
// import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


const Contactme = () => {
    return (
        <section id='contact'>
            <Row  className='text-center contacto'>
                <Col  xs={12} md={5} className='columns'>
                <p >Visítanos</p>
                    <ul className='direction-pago'>
                        <li>Arequipa-cercado</li>
                        <li>Octavio Muñoz Najar 221 Tda. 202 - Galerías NovaCenter</li>
                        <li>Octavio Muños Najar 223 Tda. 109 - Galerías CompuPlaza</li>
                        {/* <iframe className="g-mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.4644814232556!2d-71.53253547631482!3d-16.40122009641886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a55c8ac1627%3A0x541109278d97b8a4!2sNova+Center%2C+Octavio+Mu%C3%B1oz+Najar%2C+Arequipa+Metropolitana!5e0!3m2!1ses!2spe!4v1512756110197" width="100%" height="225" frameBorder="0" allowFullScreen></iframe> */}
                    </ul>
                </Col>
                <Col xs={12} md={3} className='columns'>
                    <p>Contactanos</p>
                    <ul className='contact-number'>
                        <li ><i className="fa fa-phone-square " aria-hidden="true"></i> 977371550 - 949510000</li>
                        <li ><i className="fa fa-phone-square " aria-hidden="true"></i> 951095509 - 953897588</li>
                        <li ><i className="fa fa-envelope " aria-hidden="true"></i> ventas@avantecperu.com</li>
                    </ul>
                </Col>
                <Col xs={12} md={3} className='columns'>
                    <p>Medios de Pago</p>
                    <ul className='medios_pago'>
                        <li><img src='./img/pago/Paypal.svg' /></li>
                        <li><img src='./img/pago/Visa.svg' /></li>
                    </ul>
                </Col>
                <Col xs={12} md={1}>
                    <p>Siguenos</p>
                </Col>
            </Row>
            </section>
    );
}
export default Contactme;