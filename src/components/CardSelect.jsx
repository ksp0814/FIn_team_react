import React from "react";
import "./CardSelect.css";

const CardSelect = () => {
  return (
    <div className="flex justify-center items-center space-x-4 overflow-x-auto py-4">
      <img src="\image\card_1.png" alt="card_1" className="w-150 h-150" />
      <img src="\image\card_2.png" alt="card_2" className="w-150 h-150" />
      <img src="\image\card_3.png" alt="card_3" className="w-150 h-150" />
    </div>
  );
};

export default CardSelect;
