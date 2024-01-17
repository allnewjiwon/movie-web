/**
 *  24.01.16 import 순서  
 * 1. react 관련 라이브러리
 * 2. 외부 패키지 및 모듈 << ex) import {useState, useEffect} from 'react'; / import axios from 'axios'
 * 3. 내부 컴포넌트 및 스타일 ex) import MyComponent from './MyComponent'; / import './styles.css';
 * **/ 
import React from 'react';
import {Routes, Route, Link, Outlet} from 'react-router-dom';
import axios from 'axios';
import MyComponenet from './pages/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <MyComponenet />
    </div>
  );
}

export default App;
