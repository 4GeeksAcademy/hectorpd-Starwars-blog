import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/Characters.jsx";
import { StarShips } from "./views/StarShips.jsx";
import { Planets } from "./views/Planets.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ViewCharacter } from "./views/ViewCharacter.jsx";
import { ViewPlanet } from "./views/ViewPlanet.jsx";
import { ViewShip } from "./views/ViewShip.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters/" element={<Characters />} />
						<Route path="/characters/:peopleId" element={<ViewCharacter />} />
						<Route path="/starships/" element={<StarShips />} />
						<Route path="/starships/:starShipId" element={<ViewPlanet />} />
						<Route path="/planets/" element={<Planets />} />
						<Route path="/planets/:planetId" element={<ViewShip />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
