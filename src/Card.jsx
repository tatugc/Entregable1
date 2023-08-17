import React from "react";
import './Card.css'
function Card({ auto }) {
    return (
        <div>
            <h2>Información del Auto:</h2>
            <p><strong>marca del auto:</strong> {auto.nombre}</p>
            <p><strong>modelo del auto:</strong> {auto.modelo}</p>
            <p><strong>caballos de fuerza del auto:</strong> {auto.fuerza}</p>
        </div>
    );
}

export default Card;


