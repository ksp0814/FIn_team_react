import React, { useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import CardSelect from "./components/CardSelect";
import AccountSelect from "./components/AccountSelect";
import "./App.css"; // 추가된 CSS 파일 import

const App = () => {
  const [showCardSelect, setShowCardSelect] = useState(false);
  const [showAccount, setAccount] = useState(false);

  const cardbuttonHandler = () => {
    console.log("카드 버튼이 클릭되었습니다.");
    setShowCardSelect(!showCardSelect);
    setAccount(false);
  };

  const accountbuttonHandler = () => {
    console.log("계좌 버튼이 클릭되었습니다.");
    setAccount(!showAccount);
    setShowCardSelect(false);
  };

  return (
    <DefaultLayout>
      <header className="header">
        <h1>우리 FISA 은행</h1>
      </header>
      <div className="button-container">
        <button onClick={cardbuttonHandler} type="button" className="button">
          카드
        </button>
        <button onClick={accountbuttonHandler} type="button" className="button">
          계좌
        </button>
      </div>
      <div className="body">
        {showCardSelect && <CardSelect />}
        {showAccount && <AccountSelect />}
      </div>
      <footer className="footer">
        <p>&copy; 2024 우리 FISA 은행. All rights reserved.</p>
      </footer>
    </DefaultLayout>
  );
};

export default App;
