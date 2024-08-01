import React from "react";

const Card = ({ id, name, onClick }) => {
  const imageUrl = `/image/card_${id}.png`;

  return (
    <div
      className="flex flex-col items-center space-y-2 py-4 cursor-pointer"
      onClick={() => onClick(id)} // 클릭 시 id를 전달하여 onClick 함수 호출
    >
      <img src={imageUrl} alt={name} className="w-40 h-60" />
      <p className="text-center">{name}</p>
    </div>
  );
};

export default Card;
