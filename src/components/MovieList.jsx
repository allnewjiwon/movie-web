import PropTypes from "prop-types";
import { useState } from 'react';

import Modal from "../components/Modal";

function MovieList({ key, coverImg, title, genre, onClick, movie}) {
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
    <div className="movie__list">
      <div className="movie__list-cnts" onClick={() => modalOpen(movie)}> 
        {coverImg && (<div className="poster-box"><img className="movie__list-poster" src={`${IMAGE_BASE_URL}${coverImg}`} alt={title} /></div>)}
        <h2 className="movie__list-title">{title}</h2>
        <span className="movie__list-genre">{genre}</span>
      </div>
      
      {selected ? <Modal 
        image_base_url={IMAGE_BASE_URL}
        poster_path={selected.poster_path}
        title={selected.title}
        score={selected.score}
        overview={selected.overview}
        modalClose={modalClose}
        release_date={selected.release_date}
      /> : null}
    </div>
  );
}

export default MovieList;
