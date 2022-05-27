/* 

    App.js에 버튼 직접 구현해서 이 컴포넌트 현재 미사용

*/

import React, { useState } from 'react';
import '../App.js'
import '../App.css';
import CalResultComponent from './CalResultComponent';

function ResultButtonComponent() {
    // 결과 표시 UI 상태를 state에 저장
    let [resultUI, setResultUI] = useState(false);
    return(
        <div className='result-view'>
            <br />
            { /* 버튼 클릭 시 결과 UI가 열리고 닫힘 */ }
            <button className='resultBtn' onClick={ () => {setResultUI(!resultUI)}} >
                결과보기
            </button>

            {
                resultUI === true ? <CalResultComponent /> : null
            }

        </div>      
    );

}

export default ResultButtonComponent;