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
    if (cpBmi > 18 && cpBmi < 23) {
      setGrade("정상");
    } else if (cpBmi < 18) {
      setGrade("저체중");
    } else if (cpBmi > 23) {
      setGrade("경도비만");
    } else if (cpBmi > 30) {
      setGrade("중도비만");
    }
  };
  
  useEffect(() => {
    if (gender === true) {
      setState(66 + 13.8 * weight + 5 * height + 6.8 * age);
    } else {
      setState(655 + 9.6 * weight + 1.8 * height + 4.7 * age);
    }
    setBmi(bmi.toFixed(2));
    Gradetest();
  }, []);

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
