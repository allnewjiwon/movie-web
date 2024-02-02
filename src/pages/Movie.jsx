import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
// axios : http 요청을 보내 api로부터 데이터를 가져오게함
// async : 비동기 함수를 정의할 때 사용
function Movie (){
  // api 불러오기

  const [movies, setMovies] = useState([]);

  const API_KEY = "9d5002da74fa822995bfbbc6f6cb3955";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
  
  const fetchData = async () => {
    const request = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
    try{
      const movieData = request.data.results;
      setMovies(movieData);
      console.log(movieData);
    }
    catch(error){
      console.log('error message', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div>
      <ul className="movie-list">
        {
          movies.map((movie) => (
            <li className="movie-item" key={movie.id}>
              {movie.poster_path && (<img src={`${IMG_BASE_URL}${movie.poster_path}`} alt="" />)}
              <h3>제목 : {movie.title}</h3>
              <span>개봉일자 : {movie.release_date}</span>
              <span>한줄 요약 : {movie.overview}</span>
              <span>장르 : {movie.genre_ids}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Movie;