import React from "react";
import { useParams } from "react-router-dom";


export const ViewShip = () => {
    const params = useParams();
        console.log(params);
    const  uid  = parseInt(params.starshipId - 1);
        console.log(uid)
    const viewString = JSON.parse(localStorage.getItem("dataShip"));
        console.log(viewString);
    
    if (!viewString || viewString.length === 0 || uid < 0 || uid >= viewString.length) {
        return <div>No se encontró la nave</div>; // Manejo de caso si la nave no existe
    }
    const ship = viewString[uid].properties;
    
    return (
            <>
                <div className="container" style={{ maxWidth: 550 }}>
                    <div className="card my-1 mx-4 d-flex align-items-center justify-content-center">
                        <h5 className="pt-3">StarShip: { uid + 1 }</h5>
                        <div>
                            <img src="https://tse3.mm.bing.net/th?id=OIP.zUdfLxrDwJVBcv9h-_mSEQAAAA&pid=Api" className='mb-4 me-4' style={{ width: 50, height: 50 }} alt="..." />
                            <h1 className="card-text ms-3 d-inline">{ship.name}</h1>
                        </div>
                            <p className="card-text">Modelo: {ship.model}</p>
                            <p className="card-text">Clase: {ship.starship_class}</p>
                            <p className="card-text">Manufactura: {ship.manufacturer}</p>
                            <p className="card-text">Costo: {ship.cost_in_credits}</p>
                            <p className="card-text">Pasajeros: {ship.passengers}</p>
                    </div>
                </div>
            </>
    );
}