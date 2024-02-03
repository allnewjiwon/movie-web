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
    <div>
      <div className="movie-list" onClick={() => modalOpen(movie)}> 
        {coverImg && (<img src={`${IMAGE_BASE_URL}${coverImg}`} alt={title} />)}
        <h2>{title}</h2>
        <p>{genre}</p>
      </div>
      
      {selected ? <Modal 
        image_base_url={IMAGE_BASE_URL}
        poster_path={selected.poster_path}
        title={selected.title}
        score={selected.score}
        overview={selected.overview}
        modalClose={modalClose}
      /> : null}
    </div>
  );
}

export default MovieList;
