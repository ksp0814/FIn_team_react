import React from "react";
import "./Card.css";

const Card = (card) => {
  const imageUrl = `/image/card_${card.id}.png`;
  return (
    <div className="card-container">
      <img src={imageUrl} className="card-image" />
    </div>
  );
};

export default Card;
