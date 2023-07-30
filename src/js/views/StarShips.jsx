import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const StarShips = () => {
    const {store, actions} = useContext(Context);
    const [starShips, setStarShips] = useState([JSON.parse(localStorage.getItem("shipsLocal"))]);
    
    
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
                                                <img src='https://starwars-visualguide.com/assets/img/placeholder.jpg' className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <p className="card-text">{starShip.results[uid].name}.</p>
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