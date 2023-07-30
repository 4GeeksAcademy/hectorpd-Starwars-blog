import React from "react";
import { useParams } from "react-router-dom";


export const ViewPlanet = () => {
    const params = useParams();
    console.log(params);
    const  id  = params.userId - 1;
    console.log(id)
    const viewString = JSON.parse(localStorage.getItem("worldsLocal"));
    console.log(viewString);
    
    
    return (
            <>
                <div className="container" style={{ maxWidth: 550 }}>
                    <div className="card my-1 mx-4 d-flex align-items-center justify-content-center">
                        <h5 className="pt-3">Planet: { id + 1 }</h5>
                        <div>
                            <img src="https://tse3.mm.bing.net/th?id=OIP.zUdfLxrDwJVBcv9h-_mSEQAAAA&pid=Api" className='mb-4 me-4' style={{ width: 50, height: 50 }} alt="..." />
                            <h1 className="card-text ms-3 d-inline">{viewString[id].name}</h1>
                        </div>
                            <p className="card-text">Company: {viewString[id].climate}</p>
                            <p className="card-text">Email: {viewString[id].created}</p>
                            <p className="card-text">Website: {viewString[id].diameter}</p>
                            <p className="card-text">Phone: {viewString[id].gravity}</p>
                            <p className="card-text">Username: {viewString[id].population}</p>
                    </div>
                </div>
            </>
    );
}