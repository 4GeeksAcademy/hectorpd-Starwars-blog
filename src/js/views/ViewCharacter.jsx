import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const ViewCharacter = () => {
    const params = useParams();
    const [person, setPerson] = useState({});

    const fetchPersonData = async () => {
        const cachedPerson= JSON.parse(localStorage.getItem("peopleLocal"));
        console.log(cachedPerson);
        
        if (cachedPerson && cachedPerson[params.peopleId]) {
            setPerson(cachedPerson[params.peopleId]);
        } else {
            const response = await fetch(`https://www.swapi.tech/api/people/${params.peopleId}`);
            if (response.ok) {
                const data = await response.json();
                const personData = data.result.properties;
                setPerson(personData);
                localStorage.setItem('peopleLocal', JSON.stringify({...cachedPerson, [params.peopleId]:personData}));
            } else {
                console.error("Error fetching data:", response.status, response.statusText);
            }
        }
    };

    useEffect(() => {
            fetchPersonData();
            }, [params.peopleId]);
    if (!person.name) {
        return <div>Loading...</div>;
    };
    
    return (
        <div className="d-flex justify-content-center" style={{background: 'gray' }}>
            <div className=" mb-3 mt-3 black text-white bordes" style={{ width: "60%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.peopleId}.jpg`} 
                        onError={(e) => { e.target.src = "./assets/img/placeholder.jpg"; }} alt={person.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center mt-5">
                            <h3 className="card-text">Name: {person.name}</h3>
                            <p className="card-text">Height: {person.height} cm</p>
                            <p className="card-text">Mass: {person.mass} Kg</p>
                            <p className="card-text">Hair Color: {person.hair_color}</p>
                            <p className="card-text">Skin Color: {person.skin_color}</p>
                            <p className="card-text">Eye Color: {person.eye_color}</p>
                            <p className="card-text">Birth Year: {person.birth_year}</p>
                            <p className="card-text mb-5">Gender: {person.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};