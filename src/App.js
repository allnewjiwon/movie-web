/**
 *  24.01.16 import 순서
 * 1. react 관련 라이브러리
 * 2. 외부 패키지 및 모듈 << ex) import {useState, useEffect} from 'react'; / import axios from 'axios'
 * 3. 내부 컴포넌트 및 스타일 ex) import MyComponent from './MyComponent'; / import './styles.css';
 * **/
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import axios from "axios";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Movie from "./pages/Movie";
import "./App.css";
import Genre from "./components/Genre";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/Main" element={<Main />}></Route>
      </Routes>
      <Genre />
    </div>
  );
}

export default App;
