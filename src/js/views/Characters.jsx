import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Characters = () => {
    const {store, actions} = useContext(Context);
    const [characters, setCharacters] = useState([JSON.parse(localStorage.getItem("peopleLocal"))]);

    return (
        <>
            <div className="back">
                <div className="container text-center">
                    {!characters ? "Loading"
                        :
                        (characters.map((character, uid) => (
                            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col" key={uid}>
                                    <div className="p-3">
                                        <div className="card" >
                                            <Link to={`/characters/${character.uid}`}>
                                                <img src='https://starwars-visualguide.com/assets/img/characters/1.jpg' className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <p className="card-text">{character.results[uid].name}.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )))
                    }
                </div>
            </div>
        </>
    )
}