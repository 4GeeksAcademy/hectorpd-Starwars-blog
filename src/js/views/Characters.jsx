import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Characters = () => {
    const {store, actions} = useContext(Context);
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
    
        // Obtiene los datos del localStorage y los establece en el estado "characters"
        const peopleLocalData = JSON.parse(localStorage.getItem("peopleLocal"));
        setCharacters(peopleLocalData.results);
        }, []);

    const fetchCharacterDetails = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        
            const dataPeople = await response.json();
            console.log("Character details:", dataPeople);
        } catch (error) {
            console.error("Error fetching character details:", error);
    }
    };

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
                                                <img src='https://starwars-visualguide.com/assets/img/characters/1.jpg' className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">{character.name}.</p>
                                                <Link to={`/characters/${character.uid}`}>
                                                    <button onClick={() => fetchCharacterDetails(character.url)}>
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