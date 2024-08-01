import React, { useState } from "react";
import Account from "./Account";
import { dummyAcount } from "../dummydata/dummy";
import "./Account.css"; // CSS 파일 import

const AccountSelect = () => {
  const [accounts, setAccounts] = useState(dummyAcount);

  let totalBalance = accounts.reduce(
    (total, account) => total + account.balance,
    0
  );

  return (
    <div>
      <div className="total-balance">
        <p>총 잔액</p>
        <p>{totalBalance}원</p>
      </div>

      {accounts.map((account) => (
        <Account
          account={account}
          key={account.number}
          allAccounts={accounts}
          setAccounts={setAccounts}
        />
      ))}
    </div>
  );
};

export default AccountSelect;
