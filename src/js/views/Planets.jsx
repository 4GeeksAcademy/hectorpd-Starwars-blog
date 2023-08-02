import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Planets = () => {
    const { store, actions } = useContext(Context);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {

        const worldsLocalData = JSON.parse(localStorage.getItem("worldsLocal"));
        setPlanets(worldsLocalData.results);
    }, []);


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
                                            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                                onError={(e) => {
                                                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                                }}
                                                alt="Not found"
                                                className="bordesimggrid" />
                                            <div className="card-body">
                                                <p className="card-text">{planet.name}.</p>
                                                <div className="footerPlanets">
                                                    <Link to={`/planets/${planet.uid}`}>
                                                        <button className="btn btn-secondary" onClick={() => (planet.url)}>
                                                            Get Details
                                                        </button>
                                                    </Link>
                                                    <button className="btn btn-danger" onClick={() => { actions.addFavorites(planet.name) }} type="button">
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