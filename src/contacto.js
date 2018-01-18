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
            <Row className='text-center contacto'>
                <Col xs={12} md={4} >
                    <p>Medios de Pago</p>
                    <ul className='medios_pago' >
                        <li><img src='./img/contact/Paypal.svg' /></li>
                        <li><img src='./img/contact/Visa.svg' /></li>
                    </ul>
                </Col>
                <Col xs={12} md={4}>
                    <p>Tambien puedes encontrarnos</p>
                    <ul className='medios_pago'>
                        <li><a target='_blank' href='http://www.mercadolibre.com.pe/‎' ><img src='./img/contact/mercadoLibre.png' /></a></li>
                        <li><a target='_blank' href='http://www.olx.com.pe/'><img src='./img/contact/olx.png' /></a></li>
                    </ul>
                </Col>
                <Col xs={12} md={4}>    
                            <div id="revolvermap" align="center"  className="wcustomhtml">
                                <div className="ab">
                                    <div className="abc">
                                        <iframe className="adc" scrolling="no" frameBorder="0" allowtransparency="true" width="50%" height="50%" src="//rf.revolvermaps.com/w/6/a/a2.php?i=5dv1qe7od2v&amp;m=7&amp;c=e63100&amp;cr1=ffffff&amp;f=arial&amp;l=0&amp;bv=90&amp;lx=-400&amp;ly=400&amp;hi=20&amp;he=7&amp;hc=a8ddff&amp;rs=80"></iframe>
                                    </div>
                                </div>
                                <script type="text/javascript" src="//rf.revolvermaps.com/0/0/6.js?i=5dv1qe7od2v&amp;m=7&amp;c=e63100&amp;cr1=ffffff&amp;f=arial&amp;l=0&amp;bv=90&amp;lx=-400&amp;ly=400&amp;hi=20&amp;he=7&amp;hc=a8ddff&amp;rs=80" async="async"></script>
                            </div>
                </Col>
            </Row>
            <Row  className='row-linea text-center contacto'>
                <Col  xs={12} md={5} className='columns'>
                <p >Visítanos</p>
                    <ul className='direction-pago'>
                        <li>Arequipa-cercado</li>
                        <li>Octavio Muños Najar 223 Tda. 109 - Galerías CompuPlaza</li>
                        <li>(5 cuadras de la Plaza de Armas)</li>
                        <li ><i className="fa fa-whatsapp " aria-hidden="true"></i> 977371550 - 949510000</li>
                        <li ><i className="fa fa-envelope " aria-hidden="true"></i> ventas@avantecperu.com</li>
                        <li><i className="fa fa-skype" aria-hidden="true"></i> avantecperu@msn.com</li>
                        {/* <iframe className="g-mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.4644814232556!2d-71.53253547631482!3d-16.40122009641886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a55c8ac1627%3A0x541109278d97b8a4!2sNova+Center%2C+Octavio+Mu%C3%B1oz+Najar%2C+Arequipa+Metropolitana!5e0!3m2!1ses!2spe!4v1512756110197" width="100%" height="225" frameBorder="0" allowFullScreen></iframe> */}
                    </ul>
                </Col>
                <Col xs={12} md={6} className='columns'>
                    <div className='map-responsive'>
                        <iframe width="600" height="300" frameBorder="0" style={{border:"0"}} allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d521.7333380728154!2d-71.53004819124676!3d-16.401822124224466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a55c4e099d5%3A0xb64798c1831690dd!2sCompuplaza!5e0!3m2!1ses!2spe!4v1516121602949"></iframe>
                    </div>
                </Col>
                {/* <Col xs={12} md={3} className='columns'>
                    
                </Col> */}
                <Col xs={12} md={1}>
                    <p>Siguenos</p>
                </Col>
            </Row>
            </section>
    );
}
export default Contactme;