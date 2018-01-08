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
                <h3 className="g-h3-contacto">Contáctanos</h3>
                <Col className="icon-contact" xs={12} md={6}>
                <h4 className="g-titulo-secciones"><i className="fa fa-thumb-tack" aria-hidden="true"></i>  Visítanos</h4>
                    <div className="g-visitanos">
                        <iframe className="g-mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.4644814232556!2d-71.53253547631482!3d-16.40122009641886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a55c8ac1627%3A0x541109278d97b8a4!2sNova+Center%2C+Octavio+Mu%C3%B1oz+Najar%2C+Arequipa+Metropolitana!5e0!3m2!1ses!2spe!4v1512756110197" width="100%" height="225" frameBorder="0" allowFullScreen></iframe>
                        <h6 className="g-direccion">Calle Octavio Muñoz Najar N°221 Interior N°202 Arequipa - Perú</h6>
                    </div>
                </Col>
                <Col className="g-icon-contact" xs={12} md={3}>
                <h4 className="g-titulo-secciones"> <i className="fa fa-user" aria-hidden="true"></i> Comunicate</h4>
                    <div className="g-comunicate">
                        <h5 className="g-datos-comunicate"><i className="fa fa-phone-square " aria-hidden="true"></i> 951095509 - 953897588</h5>
                        <h5 className="g-datos-comunicate"><i className="fa fa-envelope " aria-hidden="true"></i> ventas@avantecperu.com</h5>
                        <h5 className="g-datos-comunicate"><i className="fa fa-skype" aria-hidden="true"> </i> avantecperu@msn.com</h5>
                    </div>
                </Col>
                <Col className="g-icon-contact" xs={12} md={3}>
                <h4 className="g-titulo-secciones"><i className="fa fa-search" aria-hidden="true"></i> Búscanos</h4>
                    <div className="g-buscanos">
                        <a className="cont-icon " href="https://www.facebook.com/supertecnologias/?pnref=lhc">
                            <i className="fa fa-facebook-square fa-3x g-facebook " aria-hidden="true"></i>
                        </a>
                        <a className="cont-icon " href="https://www.youtube.com/user/superbyteperu">
                            <i className="fa fa-youtube-play fa-3x g-youtube" aria-hidden="true"></i>
                        </a>
                    </div>
                    <h4 className="g-titulo-secciones"><i className="fa fa-envelope" aria-hidden="true"></i>  Suscribete</h4>
                    <div className="g-suscribete">
                        <input className="g-input-suscribete"  placeholder="email" ></input>
                        <button className="btn btn-default g-btn-suscribete">Suscribete</button>
                    </div>
                </Col>
                {/* <Col className="g-icon-contact" xs={12} md={2}>
                    <i className="fa fa-envelope" aria-hidden="true"> Suscribete</i><br />
                    <div className="g-suscribete">
                        <input className="g-input-suscribete"></input>
                        <button className="btn btn-default g-btn-suscribete">Suscribete</button>
                    </div>
                </Col> */}
            </Row>

        </div>
    );
}
export default Contactme;