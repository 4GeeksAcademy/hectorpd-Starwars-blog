import React from "react";
import { useParams } from "react-router-dom";


export const ViewCharacter = () => {
    const params = useParams();
        console.log(params);
    const  uid  = parseInt(params.peopleId - 1);
        console.log(uid)
    const viewString = JSON.parse(localStorage.getItem("dataPeople"));
        console.log(viewString);
    
        if (!viewString || viewString.length === 0 || uid < 0 || uid >= viewString.length) {
            return <div>No se encontró la persona</div>; // Manejo de caso si el planeta no existe
        }    
        const people = viewString[uid].properties;
    
    return (
            <>
                <div className="container" style={{ maxWidth: 550 }}>
                    <div className="card my-1 mx-4 d-flex align-items-center justify-content-center">
                        <h5 className="pt-3">Character: { uid + 1 }</h5>
                        <div>
                            <img src="https://tse3.mm.bing.net/th?id=OIP.zUdfLxrDwJVBcv9h-_mSEQAAAA&pid=Api" className='mb-4 me-4' style={{ width: 50, height: 50 }} alt="..." />
                            <h1 className="card-text ms-3 d-inline">{people.name}</h1>
                        </div>
                            <p className="card-text">Nacimiento: {people.birth_year}</p>
                            <p className="card-text">Color de ojos: {people.eye_color}</p>
                            <p className="card-text">Genero: {people.gender}</p>
                            <p className="card-text">Altura: {people.height}</p>
                            <p className="card-text">Peso: {people.mass}</p>
                    </div>
                </div>
            </>
    );
}