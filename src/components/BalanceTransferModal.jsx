import React, { useState } from "react";
import "./BalanceTransferModal.css";

const BalanceTransferModal = ({
  isOpen,
  onClose,
  accounts = [],
  onTransfer,
}) => {
  const [selectedAccount, setSelectedAccount] = useState(accounts[0] || null);
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const handleTransfer = () => {
    if (selectedAccount && amount) {
      onTransfer(selectedAccount, amount);
      onClose();
    } else {
      alert("계좌와 금액을 입력하세요.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          ✖
        </button>
        <h2>잔액 옮기기</h2>
        <div>
          <label htmlFor="account-select">계좌 선택:</label>
          <select
            id="account-select"
            value={selectedAccount ? selectedAccount.number : ""}
            onChange={(e) =>
              setSelectedAccount(
                accounts.find((acc) => acc.number === e.target.value) || null
              )
            }
          >
            {accounts.length > 0 ? (
              accounts.map((acc) => (
                <option key={acc.number} value={acc.number}>
                  {acc.name} ({acc.number})
                </option>
              ))
            ) : (
              <option value="">No accounts available</option>
            )}
          </select>
        </div>
        <div>
          <label htmlFor="amount">금액:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="modal-buttons">
          <button onClick={handleTransfer} className="modal-transfer">
            옮기기
          </button>
          <button onClick={onClose} className="modal-cancel">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceTransferModal;
