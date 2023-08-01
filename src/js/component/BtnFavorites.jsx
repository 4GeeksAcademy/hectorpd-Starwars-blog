import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const BtnFavorites = () => {
    const {store, actions} = useContext(Context);
    const myFavorites = store.favorites;

    return(

        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Favorites
                <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
                    {myFavorites.length}
                </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
            {myFavorites.length === 0 ? (
                <li><span className="dropdown-item"> No Favorites Selected</span></li>
                ) : (
                    myFavorites.map((item, id) => (
                        <li key={id} className="d-flex aling-items-center">
                            <span className="dropdown-item">{id}</span>
                            <button type="button" className="btn btn-outline-danger me-2"
                            onClick={() => actions.removeFavorites(id)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </li>
                    ))
                )   
            }
            </ul>
        </div>

    )
}