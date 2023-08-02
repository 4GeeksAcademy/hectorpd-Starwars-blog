import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Characters = () => {
    const {store, actions} = useContext(Context);
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
    
        const peopleLocalData = JSON.parse(localStorage.getItem("peopleLocal"));
        setCharacters(peopleLocalData.results);
        }, []);

    
    const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};

    return (
        <>
            <div className="back">
                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        {!characters ? "Loading"
                            :
                            (characters.map((character, uid) => (
                                <div className="col" key={uid}>
                                    <div className="p-3">
                                        <div className="card" >
                                                <img alt="" src={`https://starwars-visualguide.com/assets/img/characters/${uid+1}.jpg`} onError={handleOnErrorImg} />
                                            <div className="card-body">
                                                <p className="card-text">{character.name}.</p>
                                                <div className="footerCharacter"> 
                                                    <Link to={`/characters/${character.uid}`}>
                                                        <button className="btn btn-secondary" onClick={() => (character.url)}>
                                                            Get Details
                                                        </button>
                                                    </Link>
                                                    <button className="btn btn-danger" onClick={() => {actions.addFavorites(character.name)}} type="button">
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