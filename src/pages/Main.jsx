import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Modal from "../components/Modal";

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
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [selected, setSelected] = useState(null);

  const modalOpen = (movie) => {
    const modalData = {
      ...movie,
      score : movie.vote_average,
      overview : movie.overview
    } 
    setSelected(modalData);
  }
  
  const modalClose = () => {
    setSelected(null);
  }

  return (
    <div>
      <Header />

      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.results.map((movie) => (
            <MovieList
              onClick={()=>modalOpen(movie)}
              modalClose={modalClose}
              key={movie.id}
              coverImg={movie.poster_path}
              title={movie.title}
              summary={movie.overview}
              genre={movie.genre_ids}
            />
          ))}
          {selected ? <Modal 
            image_base_url={IMAGE_BASE_URL}
            poster_path={selected.poster_path}
            title={selected.title}
            score={selected.score}
            overview={selected.overview}
            modalClose={modalClose}
          /> : null}
        </div>
      )}
    </div>
  );
}

export default Main;
