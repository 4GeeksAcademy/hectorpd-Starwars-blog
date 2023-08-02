import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const StarShips = () => {
    const {store, actions} = useContext(Context);
    const [starShips, setStarShips] = useState([]);
    
    useEffect(() => {
    
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

    const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};

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
                                                <img src={`https://starwars-visualguide.com/assets/img/starships/${uid+5}.jpg`} onError={handleOnErrorImg} />
                                            <div className="card-body">
                                                <p className="card-text">{starShip.name}.</p>
                                                <div className="footerShips"> 
                                                    <Link to={`/starShips/${starShip.uid}`}>
                                                        <button className="btn btn-secondary btn-favorite" onClick={() => fetchShipDetails(starShip.url)}>
                                                            Get Details
                                                        </button>
                                                    </Link>
                                                    <button className="btn btn-danger" onClick={() => {actions.addFavorites(starShip.name)}} type="button">
                                                            <i className="fas fa-heart"></i>
                                                    </button>
                                                </div>    
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