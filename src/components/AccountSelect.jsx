import React, { useState } from "react";
import Account from "./Account";
import { dummyAcount } from "../dummydata/dummy";
import "./Account.css"; // CSS 파일 import

const AccountSelect = () => {
  let totalBalance = 0;
  dummyAcount.map((account) => (totalBalance = totalBalance + account.balance));

  const [showBalance, setShowBalance] = useState(true); // 상태 관리
  return (
    <div>
      <div className="total-balance">
        <p>총 잔액</p>
        <p>{totalBalance}원</p>
      </div>

      {dummyAcount.map((account) => (
        <Account
          account={account}
          key={account.number}
          allAccounts={dummyAcount}
        />
      ))}
    </div>
  );
};

export default AccountSelect;
