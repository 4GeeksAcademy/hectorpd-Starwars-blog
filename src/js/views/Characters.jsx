import React from "react";
import { useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {
    const [list, setList] = useState();
    const host = "https://www.swapi.tech/api";
    const url = host + '/people/';
    const request = {
    method: "GET",
    redirect: "follow"
    };

    const localList = async () => {
        if (localStorage.getItem("userLocal") !== null) {
            const data = JSON.parse(localStorage.getItem("userLocal"));
            setList(data);
            console.log(data)
        } else {
            const response = await fetch(url, request);
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                setList(data);

                localStorage.setItem("userLocal", JSON.stringify(data));
            } else {
                console.log("Error: ", response.status, response.statusText);
            }
        }
    };
    useEffect(() => {
        localList();
    }, []);

    return (
        <>
            <div className="back">
            <div className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col">
                            <div className="p-3">
                            <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                            <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                            <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                            <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                            <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                            <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                            <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                            <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                            <div className="card" >
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            
        </>
        
    )
}