import React from 'react';
import './css/app.css';
import {NavLink} from 'react-router-dom';
// import { Navbar } from './C:/Users/Mariley/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-bootstrap';


export const Header = () => {
	return (
			<header>
				<Navbar />
				{/* <div className="hero" >
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
				</div> */}
			</header>
    )
}

const Navbar = () => {
	return (
  <nav className="navbar">
    <div className="navbar-container">
      {/* <!-- Navbar btn --> */}
      <div className="navbar-button">
	  <a> <i class="fa fa-map-marker" aria-hidden="true"></i> </a>
        <a href="#" data-toggle="modal" data-target="#login-modal"><i class="fa fa-user navIcons" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-shopping-cart navIcons" aria-hidden="true"></i></a>
	  
      </div>
      {/* <!-- Navbar search --> */}
      <div className="navbar-search">
        <form className="search-form" method="get" action="/search">
          <input type="text" name="q" placeholder="Search"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
      {/* <!-- Navbar category --> */}
      <div className="navbar-category">
        <a href="javascript:;" className="category-button">
          <div className="category-btn">
		  		  {/* <img className="img responsive imglogo" src="http://www.avantecperu.com/uploads/1/0/4/0/104022850/published/avaalrguitcordonelef55-compressor_1.png?1491785518"/> */}

            <i className="fa fa-chevron-circle-down"></i> Category
          </div>
        </a>
        <ul className="category-menu">
          <li><a href="#">Category 1</a></li>
          <li><a href="#">Category 2</a></li>
          <li className="category-dropdown">
            <a href="#">Category 3</a>
            <ul className="category-submenu">
              <li className="submenu-header">Header</li>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="submenu-divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
          <li><a href="#">Category 4</a></li>
          <li><a href="#">Category 5</a></li>
          <li className="category-dropdown">
            <a href="#">Category 6 long title long title long title</a>
            <ul className="category-submenu">
              <li className="submenu-header">Header</li>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="submenu-divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
	)
}
