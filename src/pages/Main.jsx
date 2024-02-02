import React, { useEffect, useState } from "react";

const API_KEY = "9d5002da74fa822995bfbbc6f6cb3955";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json);
        setLoading(false);
      });
  };

  console.log(movies);

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
        <div className="movies">
          {movies.results.map((movie) => (
            <ul key={movie.id}>
              <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
              {/* <p>realse date : {movie.release_date}</p> */}
              <p>{movie.title}</p>
              {/* <p>summary : {movie.overview}</p>
              <p>genre : {movie.genre_ids}</p> */}
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
