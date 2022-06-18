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
    console.log(isNaN(age));
  }, [age, height, weight, gender]);


  // 유효성 체크 함수
  const NumberCheck = () => {

    // 숫자 정규식
    const numPattern = /[0-9]/g;

    // 항목의 값이 공백이거나 숫자 정규식이 아닌 경우
    if (age, height, weight === '' || 
      !numPattern.test(age, height, weight)) {
      alert("유효한 값을 입력해주세요.");
    } // 항목의 값이 1보다 작은 수거나 숫자 정규식이 아닌 경우
    else if (age, height, weight < 1 ||
      !numPattern.test(age, height, weight)) {
        alert("유효한 값을 입력해주세요."); 
    } // 위 조건에 해당되지 않으면 resultUI의 상태를 전환할 수 있음
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
