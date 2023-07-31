import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Planets = () => {
    const {store, actions} = useContext(Context);
    const [planets, setPlanets] = useState([]);
    
    useEffect(() => {
    
        // Obtiene los datos del localStorage y los establece en el estado 
            
        const worldsLocalData = JSON.parse(localStorage.getItem("worldsLocal"));
        setPlanets(worldsLocalData.results);
        }, []);

        const fetchPlanetDetails = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
            
                const dataWorlds = await response.json();
                console.log("Planet details:", dataWorlds);
            } catch (error) {
                console.error("Error fetching planet details:", error);
        }
    };
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
                                                <img src='https://starwars-visualguide.com/assets/img/placeholder.jpg' className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">{planet.name}.</p>
                                                <Link to={`/planets/${planet.uid}`}>
                                                    <button onClick={() => fetchPlanetDetails(planet.url)}>
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