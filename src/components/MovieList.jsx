import PropTypes from "prop-types";

function MovieList({ key, coverImg, title, summary, genre }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <img src={`${IMAGE_BASE_URL}${coverImg}`} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <p>{genre}</p>
    </div>
  );
}

export default MovieList;
