import React, { useEffect, useState } from "react";
import "./App.css";
//import axios from "axios";

// App Components
import InfoComponent from "./components/InfoComponent";
import ResultButtonComponent from "./components/ResultButtonComponent";
import CalResultComponent from "./components/CalResultComponent";
import BmiGauge from "./components/BmiGauge"

function App() {
  const [resultUI, setResultUI] = useState(false);

  const [gender, setGender] = useState(false);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0); 
  const [weight, setWeight] = useState(0);

  function Modal() {
    return (
      <CalResultComponent
        age={age}
        height={height}
        weight={weight}
        gender={gender}
      />
    );
  }

  useEffect(() => {
    console.log(age, height, weight, gender);
  }, [age, height, weight, gender]);

  return (
    <div className="app">
      <div className="container">
        <div className="title-nav">
          <h1>건강 지킴이</h1>
        </div>
        <InfoComponent
          setGender={setGender}
          setAge={setAge}
          setHeight={setHeight}
          setWeight={setWeight}
        />
        <div className="result-view">
          <br />
          {/* 버튼 클릭 시 결과 UI가 열리고 닫힘 */}
          <div>
          <button className="resultBtn" onClick={() => {setResultUI(!resultUI); }}>
            결과보기
          </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* 결과컴포넌트 on/off */}
      {resultUI ? <Modal /> : null}
    </div>
  );
}

export default App;
