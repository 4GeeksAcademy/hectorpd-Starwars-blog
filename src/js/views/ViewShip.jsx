import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const ViewShip = () => {
    const params = useParams();
    const [ship, setShip] = useState({});

    const fetchShipData = async () => {
        const cachedShip= JSON.parse(localStorage.getItem("shipsLocal"));
        console.log(cachedShip);
        if (cachedShip && cachedShip[params.starShipId]) {
            setShip(cachedShip[params.starShipId]);
        } else {
        
            const response = await fetch(`https://www.swapi.tech/api/starships/${params.starShipId}/`);
            if (response.ok) {
                const data = await response.json();
                const shipData = data.results.properties;
                setShip(shipData);
                localStorage.setItem('shipsLocal', JSON.stringify({...cachedShip, [params.starShipId]:shipData}));
            } else {
                console.error("Error fetching data:", response.status, response.statusText);
            }
        }
    };

    useEffect(() => {
            fetchShipData();
            }, [params.starShipId]);
    if (!ship.name) {
        return <div>Loading...</div>;
    };

    return (
            <>
                <div className="d-flex justify-content-center" style={{background: 'gray' }}>
            <div className=" mb-3 black text-white bordes" style={{ width: "60%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${params.starShipId}.jpg`}  
                        onError={(e) => { e.target.src = "./assets/img/placeholder.jpg"; }} alt={ship.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center mt-5">
                            <h3 className="card-text">Name:{ship.name}</h3>
                            <p className="card-text">Model: {ship.model} </p>
                            <p className="card-text">Class: {ship.starship_class} </p>
                            <p className="card-text">Manufacturer: {ship.manufacturer}</p>
                            <p className="card-text">Cost in Credits: {ship.cost_in_credits}</p>
                            <p className="card-text">Crew: {ship.crew}</p>
                            <p className="card-text">Passengers: {ship.passengers}</p>
                            <p className="card-text mb-5">Hyperdrive Rating: {ship.hyperdrive_rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
    );
}