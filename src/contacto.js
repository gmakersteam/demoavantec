import React from 'react';
import './css/app.css';

// import { connect } from "redux-zero/react";
import { Row, Col } from 'react-bootstrap';
// import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


const Contactme = () => {
    return (
        <div className="g-contacto" align="center">
            <Row className="show-grid show-grid-contactame ">
                <Col xs={6} md={4}>
                    <h3>Acerca de Avantec</h3>
                    <ul>
                        <li>Quienes somos</li>
                    </ul>
                    <h3>Atención al Cliente</h3>
                    <ul>
                        <li>Quienes somos</li>
                        <li>Preguntas Frecuentes</li>
                        <li>Contacto</li>
                        <li>Formas de Pago</li>
                    </ul>

                </Col>
                <Col className="icon-contact" xs={6} md={4}>
                <h4 >Visítanos</h4>
                    <div className="g-visitanos">
                        <p >Arequipa-cercado</p>
                        <p className="g-direccion">Octavio Muñoz Najar 221 Tda. 202 - Galerías NovaCenter</p>
                        <p className="g-direccion">Octavio Muños Najar 223 Tda. 109 - Galerías CompuPlaza</p>
                        {/* <iframe className="g-mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.4644814232556!2d-71.53253547631482!3d-16.40122009641886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a55c8ac1627%3A0x541109278d97b8a4!2sNova+Center%2C+Octavio+Mu%C3%B1oz+Najar%2C+Arequipa+Metropolitana!5e0!3m2!1ses!2spe!4v1512756110197" width="100%" height="225" frameBorder="0" allowFullScreen></iframe> */}
                    </div>
                </Col>
                <Col className="g-icon-contact" xs={6} md={4}>
                <h4 > <i className="fa fa-user" aria-hidden="true"></i> Contactanos</h4>
                    <div className="g-comunicate">
                        <p className="g-datos-comunicate"><i className="fa fa-phone-square " aria-hidden="true"></i> 977371550 - 949510000</p>
                        <p className="g-datos-comunicate"><i className="fa fa-phone-square " aria-hidden="true"></i> 951095509 - 953897588</p>
                        <p className="g-datos-comunicate"><i className="fa fa-envelope " aria-hidden="true"></i> ventas@avantecperu.com</p>
                    </div>
                </Col>
                
            </Row>

        </div>
    );
}
export default Contactme;