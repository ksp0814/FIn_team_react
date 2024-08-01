import React from "react";
import "./CardSelect.css";
import Card from "./Card";
import { CardDummy } from "../dummydata/dummy";

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
