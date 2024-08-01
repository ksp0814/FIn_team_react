import React from "react";
import "./Account.css";
const Account = ({ account }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(account.number)
      .then(() => {
        alert(`${account.name}의 계좌번호 복사완료`);
      })
      .catch((err) => {
        console.error("복사 실패: ", err);
      });
  };

  return (
    <div className="account-container">
      <div>{account.name}</div>
      <div>
        {account.number}
        <button onClick={copyToClipboard} className="copy-button">
          📋
        </button>
      </div>
      <div className="account-balance">{account.balance}원</div>
    </div>
  );
};

export default Account;
