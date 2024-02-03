import PropTypes from "prop-types";
import Modal from "./Modal";

function MovieList({ key, coverImg, title, genre, onClick}) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  
  return (
    <div>
      <div className="movie-list" onClick={onClick}> 
        {coverImg && (<img src={`${IMAGE_BASE_URL}${coverImg}`} alt={title} />)}
        <h2>{title}</h2>
        <p>{genre}</p>
      </div>
    </div>
  );
}

export default MovieList;
