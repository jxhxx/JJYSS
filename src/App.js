import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title-nav">
        <h1>건강 지킴이</h1>
        </div>

    <Modal />
    </div>
    
  );
}

// 컴포넌트 만드는 법
// 1. function 만들기 (다른 function 바깥에)
// 2. return() 안에 html 담기
// 3. <함수명></함수명> or <함수명 /> 쓰기
const Modal = () => {
  return (
    <div className="modal">
          <p>testetestst</p>
          </div>
  )
}

export default App;
