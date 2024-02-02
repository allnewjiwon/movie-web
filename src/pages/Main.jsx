import React, { useEffect, useState } from "react";
import GNB from "../components/GNB";
import MovieList from "../components/MovieList";

function Main() {
  const API_KEY = "9d5002da74fa822995bfbbc6f6cb3955";
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );
    const json = await response.json();
    setMovies(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <header id="header">
        <h1 className="logo">JJ PROJECT</h1>
        {/* 24.02.02 comment by jiwon 각 네비게이션들은 추후 Link태그 사용해서 라우팅 할 것 */}
        <nav className="gnb">
          <span className="link-home">Home</span>
          <div className="search-area">
            <form className="search-form">
              <input type="text" placeholder="search" />
              <button className="search-btn">Search</button>
            </form>
          </div>
          <span className="link-contact">Contact</span>
          <span className="link-login">Login</span>
        </nav>
      </header>

      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.results.map((movie) => (
            <MovieList
              key={movie.id}
              coverImg={movie.poster_path}
              title={movie.title}
              summary={movie.overview}
              genre={movie.genre_ids}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
