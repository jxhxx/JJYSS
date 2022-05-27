import React, { useState } from 'react';
import './App.css';

// App Components
import InfoComponent from './components/InfoComponent';
import ResultButtonComponent from './components/ResultButtonComponent';
import CalResultComponent from './components/CalResultComponent';

function App() {
  
  let [resultUI, setResultUI] = useState(false);

  function Modal() {
    return (
        <CalResultComponent />
    );
  }

  return (
    <div className="app">
      <div className="container">
        <div className="title-nav">
          <h1>건강 지킴이</h1>
        </div>

        <br /> <br />
        <InfoComponent />    

        <div className='result-view'>
              <br />
              { /* 버튼 클릭 시 결과 UI가 열리고 닫힘 */ }
              <button className='resultBtn' onClick={ () => {setResultUI(!resultUI)}} >
                  결과보기
              </button>
        </div>    
      </div>
      <br /><br /><br />

      { /* 결과컴포넌트 on/off */ }
      {resultUI ? <Modal /> : null}
      
    </div>
    
  );
}

export default App;
