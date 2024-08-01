import React, { useState } from "react";
import BalanceTransferModal from "./BalanceTransferModal";
import "./Account.css";

const Account = ({ account, allAccounts, setAccounts }) => {
  const [isModalOpen, setModalOpen] = useState(false);

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

  const handleTransfer = (targetAccount, amount) => {
    const updatedAccounts = allAccounts.map((acc) => {
      if (acc.number === account.number) {
        return { ...acc, balance: acc.balance - amount };
      } else if (acc.number === targetAccount.number) {
        return { ...acc, balance: acc.balance + amount };
      }
      return acc;
    });

    setAccounts(updatedAccounts);
  };

  const otherAccounts = allAccounts.filter(
    (acc) => acc.number !== account.number
  );

  return (
    <div className="account-container">
      <div>{account.name}</div>
      <div>
        {account.number}
        <button onClick={copyToClipboard} className="copy-button">
          📋
        </button>
        <button onClick={() => setModalOpen(true)} className="transfer-button">
          옮기기
        </button>
      </div>
      <div className="account-balance">{account.balance}원</div>

      <BalanceTransferModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        accounts={otherAccounts}
        account={account}
        onTransfer={handleTransfer}
      />
    </div>
  );
};

export default Account;
