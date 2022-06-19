import React, { useEffect, useState } from "react";
import "./App.css";
//import axios from "axios";

// App Components
import InfoComponent from "./components/InfoComponent";
import ResultButtonComponent from "./components/ResultButtonComponent";
import CalResultComponent from "./components/CalResultComponent";
import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";

function App() {
  const [resultUI, setResultUI] = useState(false);

  // 나이, 신장, 체중 
  const [gender, setGender] = useState(false);
  const [age, setAge] = useState('');
  const [height, setHeight] = useState(''); 
  const [weight, setWeight] = useState('');

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
    console.log([age, height, weight, gender]);
    console.log(typeof(age));console.log(typeof(height));
    console.log(typeof(weight));
  }, [age, height, weight, gender]);


  // 유효성 체크 함수
  const NumberCheck = () => {
    // 숫자가 아닌 모든 문자를 판별하는 정규식
    const notNumPattern = /[^0-9]/g;

    // 각 항목의 값이 공백 or 0보다 작거나 같음 or 숫자가 아닌 문자이면 경고창 띄움
    if (age === '' || age <= 0 || notNumPattern.test(age)) {
      alert("유효한 값을 입력해주세요.");
    }
    else if (height === '' || height <= 0 || notNumPattern.test(height)) {
      alert("유효한 값을 입력해주세요.");
    }
    else if (weight === '' || weight <= 0 || notNumPattern.test(weight)) {
      alert("유효한 값을 입력해주세요.");
    }
    else {
      setResultUI(!resultUI);
    }
  }
 
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
          <button className="resultBtn" onClick={() => { 
          NumberCheck(); 
           // setResultUI(!resultUI);  
            }}>
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
