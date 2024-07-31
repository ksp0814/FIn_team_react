import React from "react";

const Card = (card) => {
  const imageUrl = `/image/card_${card.id}.png`;
  return (
    <div className="flex justify-center items-center space-x-4 overflow-x-auto py-4">
      <img src={imageUrl} className="w-40 h-60" />
    </div>
  );
};

export default Card;
