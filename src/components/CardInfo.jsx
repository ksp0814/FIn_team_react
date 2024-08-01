import React from "react";
import "./CardInfo.css"; // CSS 파일 임포트

const CardInfo = ({ transactions }) => {
  if (!Array.isArray(transactions)) {
    console.error("transactions should be an array");
    return <div className="no-transactions">선택된 카드가 없습니다.</div>;
  }

  return (
    <div className="card-info-container">
      {transactions.map((transaction, index) => (
        <div className="card-info-box" key={index}>
          <p className="info-item info-left">
            <strong>사용처:</strong> {transaction.use}
          </p>
          <p className="info-item info-right">
            <strong>결제 금액:</strong> {transaction.cost}원
          </p>
          <p className="info-item info-left">
            <strong>사용날짜:</strong> {transaction.date}
          </p>
          <p className="info-item info-right">
            <strong>항목:</strong> {transaction.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardInfo;
