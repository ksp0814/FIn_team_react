import React from "react";
import "./Card.css";
const Card = ({ id, name, onClick }) => {
  const imageUrl = `/image/card_${id}.png`;

  return (
    <div
      className="card-container"
      onClick={() => onClick(id)} // 클릭 시 id를 전달하여 onClick 함수 호출
    >
      <img src={imageUrl} alt={name} className="card-image" />
      <p className="text-center">{name}</p>
    </div>
  );
};

export default Card;
