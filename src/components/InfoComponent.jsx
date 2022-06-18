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
        <div>
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
        </div>
        <p />
        <div>
          <label>▶ 나이 &nbsp;</label>
          <input onChange={onChangeAge} placeholder="0" />
        </div>
        <p />
        <div>
          <label>▶ 신장 &nbsp;</label>
          <input onChange={onChangeHeight} placeholder="0" />
        </div>
        <p />
        <div>
          <label>▶ 체중 &nbsp;</label>
          <input onChange={onChangeWeight} placeholder="0" />
        </div>
        <p />
        
      
      </div>

      <div className="info-form-R">
        <img
            src="images/bmibmr.jpeg"
            alt=""
            align="center"
            //width="500px"
            width="100%"
            max-width="500px"
            position-="200"
            // height="200px"
          />
      </div>
    </div>
  );
};

export default InfoComponent;
