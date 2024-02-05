import React, { useEffect, useState } from "react";
import Header from "../components/Header";
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
      <Header />
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <main className="container">
          <div className="movie__list-wrap">
            {movies.results.map((movie) => (
              <MovieList
                key={movie.id}
                coverImg={movie.poster_path}
                title={movie.title}
                summary={movie.overview}
                genre={movie.genre_ids}
                movie={movie}
              />
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default Main;
