import React from 'react';
import './css/app.css';
// import {NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export const Header = () => {
	return (
			<header>
				<Menu />
				<Icons />
			</header>
    )
}

const Menu = () => {
	return (
		<Navbar collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#brand">React-Bootstrap</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} href="#">
					Link
				</NavItem>
				<NavItem eventKey={2} href="#">
					Link
				</NavItem>
				<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
			</Nav>
			<Nav pullRight>
				<NavItem eventKey={1} href="#">
					Link Right
				</NavItem>
				<NavItem eventKey={2} href="#">
					Link Right
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
const Icons = () => {
		return (
				<div className='social'>
						<ul className="social-icons">
								<li className="tab">
										<a target='_blank' href="https://github.com/Mariley20">
												<i className="fa fa-youtube-play circle"></i>
										</a>
								</li>
								<li className="tab">
										<a target='_blank' href="http://bit.ly/2nMhQvM">
												<i className="fa fa-facebook-square circle"></i>
										</a>
								</li>
								<li className="tab">
										<a target='_blank' href="https://www.linkedin.com/in/marileye/">
												<i className="fa fa-building circle"></i>
										</a>
								</li>
						</ul>
				</div>
		)
}
