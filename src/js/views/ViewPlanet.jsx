import React from "react";
import { useParams } from "react-router-dom";


export const ViewPlanet = () => {
    const params = useParams();
    console.log(params);
    const  uid  = params.planetId - 1;
    console.log(id)
    const viewString = JSON.parse(localStorage.getItem("worldsLocal"));
    console.log(viewString);
    
    
    return (
            <>
                <div className="container" style={{ maxWidth: 550 }}>
                    <div className="card my-1 mx-4 d-flex align-items-center justify-content-center">
                        <h5 className="pt-3">Planet: { uid + 1 }</h5>
                        <div>
                            <img src="https://tse3.mm.bing.net/th?id=OIP.zUdfLxrDwJVBcv9h-_mSEQAAAA&pid=Api" className='mb-4 me-4' style={{ width: 50, height: 50 }} alt="..." />
                            <h1 className="card-text ms-3 d-inline">{viewString[uid].name}</h1>
                        </div>
                            <p className="card-text">Company: {viewString[uid].climate}</p>
                            <p className="card-text">Email: {viewString[uid].created}</p>
                            <p className="card-text">Website: {viewString[uid].diameter}</p>
                            <p className="card-text">Phone: {viewString[uid].gravity}</p>
                            <p className="card-text">Username: {viewString[uid].population}</p>
                    </div>
                </div>
            </>
    );
}