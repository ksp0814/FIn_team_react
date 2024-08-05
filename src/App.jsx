import React, { useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import CardSelect from "./components/CardSelect";
import AccountSelect from "./components/AccountSelect";
import "./App.css"; // 추가된 CSS 파일 import

const App = () => {
  // 상태 변수 선언: 'showCardSelect'가 true일 때 CardSelect 컴포넌트가 렌더링됨
  const [showCardSelect, setShowCardSelect] = useState(true);
  const [showAccount, setAccount] = useState(false);

  const cardbuttonHandler = () => {
    console.log("카드 버튼이 클릭되었습니다.");
    setShowCardSelect(!showCardSelect);
    if (showCardSelect) {
      setShowCardSelect(true);
    }
    setAccount(false);
  };

  const accountbuttonHandler = () => {
    console.log("계좌 버튼이 클릭되었습니다.");
    setAccount(!showAccount);
    if (showAccount) {
      setAccount(true);
    }
    setShowCardSelect(false);
  };

  // 모달 생성 함수
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false)

  return (
    <DefaultLayout>
      <header className="flex flex-col items-center justify-center h-20 bg-gray-200 fixed top-0 left-0 w-full z-50">
        <h1>우리 FISA 은행</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 pt-20 pb-16">
        {" "}
        {/* Add padding-bottom to avoid overlap */}
        {/* 'showCardSelect', 'showAccount가 true일 때만 CardSelect 컴포넌트 렌더링 */}
        {showCardSelect && <CardSelect />}
        {showAccount && <AccountSelect />}
        <div>
          {/* onClick 핸들러 설정 */}
          <button
            onClick={cardbuttonHandler}
            type="button"
            style={{
              marginTop: "20px",
              padding: "15px 30px", // 패딩을 조정하여 버튼 크기 증가
              fontSize: "18px", // 폰트 크기를 조정하여 텍스트 크기 증가
              width: "100px", // 버튼의 너비를 조정
              height: "50px", // 버튼의 높이를 조정
            }}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            카드
          </button>
          <button
            onClick={accountbuttonHandler}
            type="button"
            style={{
              marginTop: "20px",
              padding: "15px 30px", // 패딩을 조정하여 버튼 크기 증가
              fontSize: "18px", // 폰트 크기를 조정하여 텍스트 크기 증가
              width: "100px", // 버튼의 너비를 조정
            }}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            계좌
          </button>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center h-16 bg-gray-200 fixed bottom-0 left-0 w-full">
        <p>&copy; 2024 우리 FISA 은행. All rights reserved.</p>
      </footer>
    </DefaultLayout>
  );
};

export default App;
