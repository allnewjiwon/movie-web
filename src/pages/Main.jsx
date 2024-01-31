import React, { useEffect, useState } from "react";

const API_KEY = "9d5002da74fa822995bfbbc6f6cb3955";

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json);
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
          {movies.results.map((movie) => (
            <li key={movie.id}>
              {movie.original_title}
              <img src={movie.poster_path}></img>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
