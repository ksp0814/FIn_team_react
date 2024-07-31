import React from "react";
import "./CardSelect.css";
import Card from "./Card";

const CardDummy = [
  {
    cardId: 1,
    date: "2027/07/21",
    name: "woori travel",
  },
  {
    cardId: 2,
    date: "2025/05/01",
    name: "woori naver",
  },
  {
    cardId: 3,
    date: "2024/07/31",
    name: "woori check",
  },
];
const CardSelect = () => {
  return (
    <div className="flex justify-center items-center space-x-4 overflow-x-auto py-4">
      {CardDummy.map((card) => (
        <Card id={card.cardId} name={card.name} date={card.date} />
      ))}
    </div>
  );
};

export default CardSelect;
