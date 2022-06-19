import React, { useCallback, useEffect, useState } from "react";
import "../App.js";
import "../App.css";
import axios from "axios";
import { render } from "@testing-library/react";

const InfoComponent = ({ setAge, setHeight, setWeight, setGender}) => {

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
          onChange={() => {
            setGender(false);
          }}
          type="radio"
          id="gender"
          name="gender"
          value="female"
          checked="checked"
        ></input>
        여성 &nbsp;
        <input
          onChange={() => {
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
          <input type="number" 
            onChange={onChangeAge} placeholder="" />
        </div>
        <p />
        <div>
          <label>▶ 신장 &nbsp;</label>
          <input type="number"
            onChange={onChangeHeight} placeholder="" />
        </div>
        <p />
        <div>
          <label>▶ 체중 &nbsp;</label>
          <input type="number" 
            onChange={onChangeWeight} placeholder="" />
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
