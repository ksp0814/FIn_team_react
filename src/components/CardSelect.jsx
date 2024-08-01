import React, { useState } from "react";
import "./CardSelect.css";
import Card from "./Card";
import { CardDummy } from "../dummydata/dummy";
import ModalCard from "./ui/ModalCard";
import ModalCardInfo from "./ModalCardInfo";

const CardSelect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const openModal = (cardId) => {
    setSelectedCardId(cardId);
    setIsModalOpen(true);
    console.log("모달이 생성되었습니다.");
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex justify-center items-center space-x-4 overflow-x-auto py-4">
        {CardDummy.map((card) => (
          <Card
            id={card.cardId}
            name={card.name}
            key={card.cardId}
            onClick={openModal} // Card 클릭 시 openModal 함수 호출
          />
        ))}
      </div>
      {isModalOpen && (
        <ModalCard onClose={closeModal}>
          <div className="flex justify-center items-center space-x-4 overflow-x-auto py-4">
            <ModalCardInfo cardId={selectedCardId} />{" "}
            {/* 선택된 카드의 ID를 ModalCardInfo에 전달 */}
          </div>
        </ModalCard>
      )}
    </>
  );
};

export default CardSelect;
