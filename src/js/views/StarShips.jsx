import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const StarShips = () => {
    const {store, actions} = useContext(Context);
    const [starShips, setStarShips] = useState([]);
    
    useEffect(() => {
    
        // Obtiene los datos del localStorage y los establece en el estado 
            
        const shipsLocalData = JSON.parse(localStorage.getItem("shipsLocal"));
        setStarShips(shipsLocalData.results);
        }, []);

        const fetchShipDetails = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
            
                const dataShip = await response.json();
                console.log("Character details:", dataShip);
            } catch (error) {
                console.error("Error fetching starship details:", error);
            }
        };

    const extractUIDFromURL = (url) => {
        const parts = url.split("/");
        return parts[parts.length - 2];
    };
    
    return (
        <>
            <div className="back">
                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {!starShips ? "Loading" 
                        :
                            (starShips.map((starShip, uid) => (
                                <div className="col" key={uid}>
                                    <div className="p-3">
                                        <div className="card" >
                                            <Link to={`/starShips/${starShip.uid}`}>
                                                <img
                                                    src={`https://starwars-visualguide.com/assets/img/starships/${extractUIDFromURL(starShip.url)}.jpg`}
                                                    className="card-img-top"
                                                    alt="..."
                                                    />
                                            </Link>
                                            <div className="card-body">
                                                <p className="card-text">{starShip.name}.</p>
                                                <Link to={`/starShips/${starShip.uid}`}>
                                                    <button onClick={() => fetchShipDetails(starShip.url)}>
                                                        Get Details
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}