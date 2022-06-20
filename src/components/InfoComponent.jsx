import React from "react";
import "../App.css";

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
      
      {/* 정보 입력 */}
      <div className="info-form-L">
        <br />
        <p />
        <div>
        <label>▶ 성별 &nbsp;</label>
        <input
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="radio"
          id="gender"
          name="gender"
          value="female"
          defaultChecked="checked"
        ></input>
        여성 &nbsp;
        <input
          onChange={(e) => {
            setGender(e.target.value);
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

      {/* BMI BMR 산출식 이미지 */}
      <div className="info-form-R">
        <img
            src="images/bmibmr.jpeg"
            alt=""
            align="center"
            width="100%"
            max-width="500px"
            position-="200"
          />
      </div>
    </div>
  );
};

export default InfoComponent;
