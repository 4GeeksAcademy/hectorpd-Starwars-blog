import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Planets = () => {
    const {store, actions} = useContext(Context);
    const [planets, setPlanets] = useState([JSON.parse(localStorage.getItem("worldsLocal"))]);
    
    
    return (
        <>
            <div className="back">
                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {!planets ? "Loading" 
                        :
                            (planets.map((planet, uid) => (
                                <div className="col" key={uid}>
                                    <div className="p-3">
                                        <div className="card" >
                                            <Link to={`/planets/${planet.uid}`}>
                                                <img src='https://starwars-visualguide.com/assets/img/placeholder.jpg' className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <p className="card-text">{planet.results[uid].name}.</p>
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