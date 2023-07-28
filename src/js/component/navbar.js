import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/home">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<Link to="/Characters">
				<span className="navbar-brand mb-0 h1">Characters</span>
			</Link>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starships</span>
			</Link>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Planets</span>
			</Link>
			<div className="ml-auto">
					<button className="btn btn-primary">Favorites</button>
			</div>
		</nav>
	);
};
