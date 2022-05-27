import React from 'react';
import '../App.css';

class CalResultComponent extends React.Component {
    render() {
        return (
    <div className="cal-result">
          <h2>산출결과</h2>
          <br />
          <p>기초대사량</p>
          <button className='detailBtn' type='submit'>자세히보기</button>
          <br /> <br />
          <p>BMI</p>
          <button className='detailBtn' type='submit'>자세히보기</button>
    </div>      
        );
    }
}

export default CalResultComponent;