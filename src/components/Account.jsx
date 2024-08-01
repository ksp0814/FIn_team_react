import React from "react";
import BalanceTransferModal from "./BalanceTransferModal";
import "./Account.css";

const Account = ({ account, allAccounts }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

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
    // 잔액 옮기기 로직을 구현합니다
    console.log(`옮길 계좌: ${targetAccount.name}, 금액: ${amount}`);
  };

  // 현재 계좌를 제외한 다른 계좌들만 필터링합니다
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
