import React, { useEffect, useState } from "react";
import "../App.css";
import BmiGauge from "./BmiGauge";
import BmiComponents from "./bmiComponent";
import BmrComponent from "./bmrComponent";

const CalResultComponent = ({ age, height, weight, gender }) => {
  const [state, setState] = useState(0);
  const [grade, setGrade] = useState("");
  const [bmi, setBmi] = useState(weight / (height / 100) ** 2);

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
      setGrade("1단계 비만");
    } else if (cpBmi >= 35) {
      setGrade("3단계 비만");
    }
  };
  
  useEffect(() => {
    if (gender === true) { // 남자 기초대사량 산출
      setState(66 + 13.8 * weight + 5 * height + 6.8 * age);
    } else {  // 여자 기초대사량 산출
      setState(655 + 9.6 * weight + 1.8 * height + 4.7 * age);
    }
    setBmi(bmi.toFixed(2));
    Gradetest();
  }, []);

  //. 산출결과 띄우기
  return (
    <div className="resualt-container">
      <div className="title-nav">
        <h1>산출결과</h1>
      </div>


      <div className="cal-result">
        <br />
        <BmrComponent state={state} />
        <br />
        <br />
        <BmiComponents bmi={bmi} grade={grade} />
        <BmiGauge bmi={bmi} />
      </div>

    </div>
  );
};


export default CalResultComponent;
