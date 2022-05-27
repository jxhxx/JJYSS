import React from 'react';
import '../App.css';

class CalResultComponent extends React.Component {
    render() {
        return (
            <div className="resualt-container">
                <div className="title-nav">
                    <h1>산출결과</h1>
                </div>
                
                <div className="cal-result">
                    <br />
                    <p>기초대사량</p>
                    <button className='detailBtn' type='submit'>자세히보기</button>
                    <br /> <br />
                    <p>BMI</p>
                    <button className='detailBtn' type='submit'>자세히보기</button>
                </div>    
            </div>  
        );
    }
}

export default CalResultComponent;