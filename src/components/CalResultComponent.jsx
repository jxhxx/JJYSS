import React, { useEffect, useState } from "react";

import BmiGauge from "./BmiGauge";
import BmiComponents from "./bmiComponent";
import BmrComponent from "./bmrComponent";

const CalResultComponent = ({ age, height, weight, gender }) => {

  // 기초대사량 데이터 담을 변수 선언
  const [state, setState] = useState(0);
  // BMI 데이터 담을 변수 선언
  const [grade, setGrade] = useState("");
  const [bmi, setBmi] = useState(weight / (height / 100) ** 2);

  // BMI 결과 저장
  const Gradetest = () => {
    const cpBmi = bmi;
    Math.floor(cpBmi);
    if (cpBmi >= 18.5 && cpBmi < 23) {
      setGrade("정상");
    } else if (cpBmi < 18.5) {
      setGrade("저체중");
    } else if (cpBmi >= 23 && cpBmi < 25) {
      setGrade("과체중");
    } else if (cpBmi >= 25 && cpBmi < 30) {
      setGrade("1단계 비만");
    } else if (cpBmi >= 30 && cpBmi < 35) {
      setGrade("2단계 비만");
    } else if (cpBmi >= 35) {
      setGrade("3단계 비만");
    }
  };

  useEffect(() => {

     // 숫자가 아닌 모든 문자를 판별하는 정규식
     const notNumPattern = /[^0-9]/g;

     // 필드 값을 재입력 할 때, 값이 공백 or 0보다 작거나 or 숫자가 아닐 경우 새로고침
     if (age === '' || age <= 0 || notNumPattern.test(age)) {
       window.location.replace("/"); 
     }
     else if (height === '' || height <= 0 || notNumPattern.test(height)) {
      window.location.replace("/"); 
     }
     else if (weight === '' || weight <= 0 || notNumPattern.test(weight)) {
      window.location.replace("/"); 
     }
    
     // 정상 값 입력
    else {
      if (gender === 'male') { // 남자 기초대사량 산출
        setState(66.47 + 13.75 * weight + 5 * height - 6.76 * age);
      } 
      else {  // 여자 기초대사량 산출
        setState(655.1 + 9.56 * weight + 1.85 * height - 4.68 * age);
      }
      setBmi(bmi.toFixed(2)); // 소수점 뒤 자릿수 2까지 
      Gradetest(); // BMI 등급 설정
    }
  }, []);

  // 산출결과UI
  return (
    <div className="resualt-container">
      <div className="title-nav">
        <h1>산출결과</h1>
      </div>
      <div className="cal-result">
        <br />
        {/* BMR 컴포넌트*/}
        <BmrComponent state={state} />
        
        {/* BMI 컴포넌트*/}
        <BmiComponents bmi={bmi} grade={grade} />

        {/* BMI 게이지 컴포넌트*/}
        <BmiGauge bmi={bmi} />
      </div>

    </div>
    
  );
};


export default CalResultComponent;
