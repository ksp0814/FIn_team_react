import React from "react";
import DefaultLayout from "./layout/DefaultLayout";
import CardHeader from "./components/CardHeader";
const App = () => {
  return (
    <DefaultLayout>
      <header className="flex flex-col items-center justify-center h-20 bg-gray-200">
        <h1>우리 FISA 은행</h1>
      </header>
      <div>
        <img src="./image/card_1.png" alt="card_1" />
        <img src="./image/card_2.png" alt="card_2" />
        <img src="./image/card_3.png" alt="card_3" />
      </div>
    </DefaultLayout>
  );
};

export default App;
