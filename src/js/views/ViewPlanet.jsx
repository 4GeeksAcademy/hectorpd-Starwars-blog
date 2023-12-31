import React, { useEffect, useState }from "react";
import { useParams } from "react-router-dom";


export const ViewPlanet = () => {
    const params = useParams();
    const [planet, setPlanet] = useState({});

    const fetchPlanetData = async () => {
        const cachedPlanet= JSON.parse(localStorage.getItem("worldsLocal"));
        // console.log(cachedPlanet);
        if (cachedPlanet && cachedPlanet[params.planetId]) {
            setPlanet(cachedPlanet[params.planetId]);
        } else {
            const response = await fetch(`https://www.swapi.tech/api/planets/${params.planetId}`);
            if (response.ok) {
                const data = await response.json();
                const planetData = data.result.properties;
                setPlanet(planetData);
                localStorage.setItem('worldsLocal', JSON.stringify({...cachedPlanet, [params.planetId]: planetData }));
            } else {
                console.error("Error:", response.status, response.statusText);
            }
        }
    };

    useEffect(() => {
            fetchPlanetData();
            }, [params.planetId]);
    if (!planet.name) {
        return <div>Loading...</div>;
    };
    
    return (
        <div className="d-flex justify-content-center" style={{background: 'gray' }}>
            <div className=" mb-3 mt-3 black text-white bordes" style={{ width: "60%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`} 
                            onError={(e) => {
                                e.target.src = "./assets/img/placeholder.jpg";
                            }} alt={planet.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center ms-5 ps-5 mt-3">
                            <h3 className="card-text">Name: {planet.name}</h3>
                            <p className="card-text">Diameter: {planet.diameter} Km</p>
                            <p className="card-text">Rotation period: {planet.rotation_period} Hours</p>
                            <p className="card-text">Orbital period: {planet.orbital_period} Days</p>
                            <p className="card-text">Gravity: {planet.gravity} gal</p>
                            <p className="card-text">Population: {planet.population} hab/m²</p>
                            <p className="card-text">Climate: {planet.climate}</p>
                            <p className="card-text">Terrain: {planet.terrain}</p>
                            <p className="card-text mb-5">Created: {planet.created}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}