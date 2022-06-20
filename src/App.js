import React, { useState } from "react";
import Swal from "sweetalert2";

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

  
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const warningToast = () => {
    Toast.fire({
      icon: 'warning',
      title: '유효한 값을 입력해주세요.'
    })
  } 

  // 필드값 유효성 체크 함수
  const NumberCheck = () => {
    // 정수 3자리, 소수점 2자리 제한하는 정규식
    const pattern = /^(\d{0,3})([.]\d{0,2}?)?$/;

    // 각 항목의 값이 공백 or 0보다 작거나 같음 or 숫자가 아닌 문자이면 alert 
    if (age === '' || age <= 0 || !pattern.test(age)) {
      warningToast()
    }
    else if (height === '' || height <= 0 || !pattern.test(height)) {
      warningToast();
    }
    else if (weight === '' || weight <= 0 || !pattern.test(weight)) {
      warningToast();
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
          <span>
            성별∙연령 구분에 따른 신체질량지수 
            BMI(Body Mass Index)와 기초대사량을 측정해보세요.</span>
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
