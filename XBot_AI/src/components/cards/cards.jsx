import React from "react";
import './cards.css';


export default function Cards(){


    return(
        <div className="cardsContainer">
            <div className="cardContainer">
            <div className="card">
                <h2>Hi, what is the weather</h2>
                <p>Get immediate AI generated response</p>
            </div>
            <div className="card">
                <h2>Hi, what is my location</h2>
                <p>Get immediate AI generated response</p>
            </div>
            </div>

            <div className="cardContainer">
            <div className="card">
                <h2>Hi, what is the temperature</h2>
                <p>Get immediate AI generated response</p>
            </div>
            <div className="card">
                <h2>Hi, how are you</h2>
                <p>Get immediate AI generated response</p>
            </div>
            </div>

        </div>
    )
}