import React, { useState } from "react";

// App Components
import InfoComponent from "./components/InfoComponent";
import CalResultComponent from "./components/CalResultComponent";

function App() {
  // 결과UI 상태값 담을 변수 선언
  const [resultUI, setResultUI] = useState(false);

  // 성별, 나이, 신장, 체중 값 담을 변수 선언
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
        {/* 정보 입력 부분*/}
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
            }}>
            결과보기
          </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      
      {/* 결과UI (on/off) */}
      {resultUI ? <Modal /> : null}
    </div>
    
  );
}

export default App;
