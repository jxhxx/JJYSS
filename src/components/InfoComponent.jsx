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
        <div className="genderInput">
        <label>✔︎ &nbsp;성별 &nbsp; </label>
        <input
          onChange={() => {
            setGender(false);
          }}
          type="radio"
          id="gender"
          name="gender"
          value="female"
          defaultChecked="checked"
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
        &nbsp;
        남성
        </div>
        <br />
        <div className="ageInput">
          <label>✔︎ &nbsp;나이 &nbsp;&nbsp;</label>
          <input type="text" maxLength="6"
            onChange={onChangeAge} placeholder="" />&nbsp;세(만)
        </div> 
        <p />
        <div className="heightInput">
          <label>✔︎ &nbsp;신장 &nbsp;&nbsp;</label>
          <input type="text" maxLength="6" 
            onChange={onChangeHeight} placeholder="" />&nbsp;cm
        </div>
        <p />
        <div className="weightInput">
          <label>✔︎ &nbsp;체중 &nbsp;&nbsp;</label>
          <input type="text" maxLength="6"
            onChange={onChangeWeight} placeholder="" />&nbsp;kg
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
            position="200"
          />
      </div>
    </div>
  );
};

export default InfoComponent;
