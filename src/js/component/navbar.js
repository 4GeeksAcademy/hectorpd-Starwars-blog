import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light" style={{background: 'rgb(13,17,23)'}}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className= "logo" style={{width:'70px', borderRadius: '40%', border: '1px solid yellow'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"/>
				</span>
			</Link>
			<Link to="/Characters">
				<span className="navbar-brand mb-0 h1" style={{color:'rgb(157,138,90)'}}>Characters</span>
			</Link>
			<Link to="/Starships">
				<span className="navbar-brand mb-0 h1" style={{color:'rgb(157,138,90)'}}>Starships</span>
			</Link>
			<Link to="/Planets">
				<span className="navbar-brand mb-0 h1" style={{color:'rgb(157,138,90)'}}>Planets</span>
			</Link>
			<div className="ml-auto">
					<button className="btn btn-primary">Favorites</button>
			</div>
		</nav>
	);
};
