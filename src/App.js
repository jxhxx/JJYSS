import React, { useState } from 'react';
import './App.css';

// App Components
import InfoComponent from './components/InfoComponent';
import CalResultComponent from './components/CalResultComponent';

function App() {
// // 결과 표시 UI의 상태를 state로 저장
let [resultUI, setResultUI] = useState(false);

  return (
    <div className="app">
      <div className="container">
        <div className="title-nav">
          <h1>건강 지킴이</h1>
          
        </div>

        <br /> <br />
      <InfoComponent />    
    
    <div>
      <br />
      <button className="resultBtn" onClick={ () => {setResultUI(!resultUI)}}
         >결과보기</button>
    </div>
      {
        resultUI === true ? <CalResultComponent /> : null
      }

      </div>
    </div>
    
  );
}

export default App;
