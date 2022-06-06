import React, { useEffect, useState } from "react";
import "../App.js";
import "../App.css";

const InfoComponent = ({ setAge, setHeight, setWeight, setGender }) => {
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  const onChangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div className="info-form">

      <div className="info-form-L">
        <br />
        <p />
        <label>▶ 성별 &nbsp;</label>
        <input
          onClick={() => {
            setGender(false);
          }}
          type="radio"
          id="gender"
          name="gender"
          value="female"
        ></input>
        여성 &nbsp;
        <input
          onClick={() => {
            setGender(true);
          }}
          type="radio"
          id="gender"
          name="gender"
          value="male"
        ></input>
        남성
        
        <p />
        <label>▶ 나이 &nbsp;</label>
        <input onChange={onChangeAge} placeholder="0" />
        <p />
        <label>▶ 신장 &nbsp;</label>
        <input onChange={onChangeHeight} placeholder="0" />
        <p />
        <label>▶ 체중 &nbsp;</label>
        <input onChange={onChangeWeight} placeholder="0" />
        <p />
        
      
      </div>

      <div className="info-form-R">
        <img
            src="images/bmibmr.jpeg"
            alt=""
            align="right"
            width="500px"
            position-="200"
            // height="200px"
          />
      </div>
    </div>
  );
};

export default InfoComponent;
