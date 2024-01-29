import React from "react";
import { useEffect, useState } from "react";

const API_KEY = "9cf52cfc64015d8eb0b74ce4e9e0a774";

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    fetch(
      `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.movieListResult.movieList);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div id="GNB">
        <p>Home</p>
        <form>
          <input type="text" placeholder="search" />
          <button>Search</button>
        </form>
        <p>Contact</p>
        <p>Log in</p>
      </div>

      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <li key={movie.movieCd}>
              {movie.movieNm}{" "}
              {movie.movieNmEn === "" ? "" : "(" + movie.movieNmEn + ")"}
              <p>제작 연도 : {movie.prdtYear}</p>
              <p>장르 : {movie.genreAlt}</p>
              <p>제작 국가 : {movie.nationAlt}</p>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
