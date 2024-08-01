import React, { useState, useEffect } from "react";
import { HistoryDummy } from "../dummydata/dummy";
import CardInfo from "./CardInfo";
import "./ModalCardInfo.css"; // CSS 파일 임포트

const ModalCardInfo = ({ cardId }) => {
  const [sortOption, setSortOption] = useState("date"); // 초기 정렬 옵션은 날짜순
  const [selectCategories, setSelectCategories] = useState([]); // 카테고리 정렬에 사용

  // 특정 cardId에 해당하는 트랜잭션 데이터 필터링
  const getFilteredAndSortedTransactions = () => {
    let cardTransactions = HistoryDummy.filter(
      (transaction) => transaction.cardId === cardId
    );

    // 선택된 카테고리에 따라 필터링
    if (selectCategories.length > 0) {
      cardTransactions = cardTransactions.filter((transaction) =>
        selectCategories.includes(transaction.category)
      );
    }

    // 정렬 옵션에 따라 정렬
    cardTransactions.sort((a, b) => {
      if (sortOption === "cost") {
        return (
          parseInt(b.cost.replace(/,/g, "")) -
          parseInt(a.cost.replace(/,/g, ""))
        );
      } else if (sortOption === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0; // 기본적으로 변경하지 않음
    });

    return cardTransactions;
  };

  const [filteredAndSortedTransactions, setFilteredAndSortedTransactions] =
    useState(getFilteredAndSortedTransactions());

  useEffect(() => {
    setFilteredAndSortedTransactions(getFilteredAndSortedTransactions());
  }, [cardId, sortOption, selectCategories]);

  // 정렬 옵션 변경 핸들러
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectCategories((prev) =>
      prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value]
    );
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
            <input
              type="checkbox"
              name="food"
              value="food"
              checked={selectCategories.includes("food")}
              onChange={handleCheckboxChange}
            />{" "}
            음식
          </label>
          <label>
            <input
              type="checkbox"
              name="living"
              value="living"
              checked={selectCategories.includes("living")}
              onChange={handleCheckboxChange}
            />{" "}
            생활
          </label>
          <label>
            <input
              type="checkbox"
              name="play"
              value="play"
              checked={selectCategories.includes("play")}
              onChange={handleCheckboxChange}
            />{" "}
            문화
          </label>
          <label>
            <input
              type="checkbox"
              name="car"
              value="car"
              checked={selectCategories.includes("car")}
              onChange={handleCheckboxChange}
            />{" "}
            자동차
          </label>
        </div>
      </div>
      <CardInfo transactions={filteredAndSortedTransactions} />{" "}
      {/* transactions을 전달 */}
    </div>
  );
};

export default ModalCardInfo;
