import React from 'react';
// import {NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './css/app.css';

export const Header = () => {
	return (
			<header>
				<Menu />
				{/* <Categorias /> */}
				<Icons />
			</header>
    )
}

const Menu = () => {
	return (
		<Navbar fixedTop inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#brand"><img className='mar-logo' src='./imagenes-productos/logo.png' /></a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem eventKey={1} href="#">
						Gadgets
				</NavItem>
				<NavItem eventKey={2} href="#">
						Computadoras
				</NavItem>
				<NavItem eventKey={3} href="#">
					Equipos_Biometricos
				</NavItem>
				<NavItem eventKey={4} href="#">
												Laptops
				</NavItem>
				<NavItem eventKey={5} href="#">
						Tablets
				</NavItem>
				<NavItem eventKey={6} href="#">
						Celulares
				</NavItem>
				<NavItem eventKey={7} href="#">
						Drones
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
// const Categorias = () => {
// 		return (
// 				<Navbar fixedBottom collapseOnSelect>
// 						<Navbar.Collapse>
// 								<Nav pullRight>
										
// 								</Nav>
// 						</Navbar.Collapse>
// 				</Navbar>
// 		)
// }
const Icons = () => {
		return (
				<div className='social'>
						<ul className="social-icons">
								<li className="tab">
										<a target='_blank' href="https://www.youtube.com/user/superbyteperu">
												<i className="fa fa-youtube-play circle"></i>
										</a>
								</li>
								<li className="tab">
										<a target='_blank' href="https://www.facebook.com/supertecnologias/">
												<i className="fa fa-facebook-square circle"></i>
										</a>
								</li>
								<li className="tab">
										<a target='_blank' href="https://avantecperu.mitiendanube.com/">
												<i className="fa fa-building circle"></i>
										</a>
								</li>
						</ul>
				</div>
		)
}
