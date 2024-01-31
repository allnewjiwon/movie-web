import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
// axios : http 요청을 보내 api로부터 데이터를 가져오게함
// async : 비동기 함수를 정의할 때 사용
function Movie (){
  // api 불러오기
  const fetchData = async () => {
    try{
      await axios.get()
    }
    catch{}
  }
  return(
    <div>
      
    </div>
  )
}

export default Movie;