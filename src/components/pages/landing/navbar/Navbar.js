import React from 'react';
import { RiComputerFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { navigation } from '../../../utilities/nav';
import "./Navbar.css"

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-container">
				<div className="navbar-left">
					<RiComputerFill/>
				</div>
				<nav className="navbar-right">
					{
						navigation &&
						navigation.map((element, index) => (
							<NavLink  key={index} to={element.link} className="nav-items">
								{element.element}
							</NavLink>
						))
					}
					<button
						type="button"
						className="nav-button"
					>
						File Returns Now
					</button>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
