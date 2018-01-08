import React, { Component } from 'react';
import './css/app.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';


const Header = () => {
	return (
		<div>
			<header>
				<div className="hero" >
					<div className="overlay">
						<div className="hero-content d-flex">
							<nav
								className="navbar navbar-default navbar-fixed-top navhome">
								<div >
									<div className="navbar-header">
										<button
											type="button"
											className="navbar-toggle collapsed"
											data-toggle="collapse"
											data-target="#bs-example-navbar-collapse-1"
											aria-expanded="false">
											<span className="sr-only">Toggle navigation</span>
											<span className="icon-bar" />
											<span className="icon-bar" />
											<span className="icon-bar" />
										</button>
                                        <img className="img responsive imglogo" src="http://www.avantecperu.com/uploads/1/0/4/0/104022850/published/avaalrguitcordonelef55-compressor_1.png?1491785518"/>
										{/* <NavLink to={'/Home'}><img className="img responsive imglogo" src={estherlogo} /></NavLink> */}
									</div>
									<div
										className="navbar-collapse collapse"
										id="bs-example-navbar-collapse-1"
										aria-expanded="false">
										<ul className="nav navbar-nav navbar-right">
											<li>
												<NavLink to={'/Homes'}  className="list raleway "
												>HOME</NavLink>
											</li>
											<li>
												<NavLink to={'/Productos'} className="list raleway"
												>PRODUCTOS</NavLink>
											</li>
											<li>
												<NavLink to={'/Ofertas'} className="list raleway "
												>OFERTAS </NavLink>
											</li>
											<li>
												<NavLink to={'/Novedades'} className="list raleway "
												>NOVEDADES</NavLink>
											</li>
											<li>
												<NavLink to={'/Ubicanos'} className="list raleway "
												>UBICANOS</NavLink>
											</li>
										</ul>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</div>
    )
}

export default Header;