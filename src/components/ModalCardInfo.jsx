import React, { useState } from "react";
import { HistoryDummy } from "../dummydata/dummy";
import CardInfo from "./CardInfo";
import "./ModalCardInfo.css"; // CSS 파일 임포트

const ModalCardInfo = ({ cardId }) => {
  const [sortOption, setSortOption] = useState("date"); // 초기 정렬 옵션은 날짜순

  if (cardId === null) {
    return <div>No card selected</div>;
  }

  // 특정 cardId에 해당하는 트랜잭션 데이터 필터링
  let cardTransactions = HistoryDummy.filter(
    (transaction) => transaction.cardId === cardId
  );

  // 정렬 옵션에 따라 정렬
  cardTransactions.sort((a, b) => {
    if (sortOption === "cost") {
      return (
        parseInt(b.cost.replace(/,/g, "")) - parseInt(a.cost.replace(/,/g, ""))
      );
    } else if (sortOption === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0; // 기본적으로 변경하지 않음
  });

  // 정렬 옵션 변경 핸들러
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="modal-container">
      <div className="filter-controls">
        <div className="select-container">
          <label htmlFor="filter">정렬 옵션:</label>
          <select name="정렬 옵션" id="filter" onChange={handleSortChange}>
            <option value="date">날짜순</option>
            <option value="cost">금액순</option>
          </select>
        </div>
        <div className="checkbox-container">
          <label>
            <input type="checkbox" name="food" value="food" /> 음식
          </label>
          <label>
            <input type="checkbox" name="living" value="living" /> 생활
          </label>
          <label>
            <input type="checkbox" name="play" value="play" /> 문화
          </label>
          <label>
            <input type="checkbox" name="car" value="car" /> 자동차
          </label>
        </div>
      </div>
      <CardInfo transactions={cardTransactions} /> {/* transactions을 전달 */}
    </div>
  );
};

export default ModalCardInfo;
