import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/**
 * 24.01.29 
 * <index.js에 라우팅을 설정하는 이유>
 * 
 * 1. index.js는 앱의 최상위 진입점이기 때문에,
 * 여기서 라우팅을 설정하면 앱 전체에 걸쳐 일관된 라우팅 구조를 
 * 가질 수 있다.
 * 
 * 2. 하나의 라우터만 사용
 * - 보통 하나의 'BrowserRouter'를 사용해서 앱 전체의
 * 라우팅을 처리한다. 다른 방식으로 라우팅을 설정하는 경우
 * 여러 개의 라우터가 동시에 작동하면서 예상치 못한 동작이 발생할 수 있다.
 * 
 * **/ 