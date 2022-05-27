import React, { useState } from 'react';
import './App.css';

// App Components
import InfoComponent from './components/InfoComponent';
import ResultButtonComponent from './components/ResultButtonComponent';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="title-nav">
          <h1>건강 지킴이</h1>
          
        </div>

        <br /> <br />
      <InfoComponent />    
      <ResultButtonComponent />
      </div>
    </div>
    
  );
}

export default App;
