import React from 'react';
import './Cards.css';  // Asegúrate de tener el archivo de estilos adecuado

const Card = ({ title, description, price, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>${price}</strong></p>
        <button className="btn">Ver detalles</button>
      </div>
    </div>
  );
}

export default Card;
