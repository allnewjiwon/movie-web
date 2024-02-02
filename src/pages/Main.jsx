import React, { useEffect, useState } from "react";
import Modal from '../components/Modal';

const API_KEY = "9d5002da74fa822995bfbbc6f6cb3955";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);

  const getMovies = async () => {
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json);
        setLoading(false);
      });
  };

  // console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  // 모달 열기 ?
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
        <ul className="movies">
          {movies.results.map((movie) => (
            <li key={movie.id} onClick={()=>modalOpen(movie)}>
              {/* 24.01.31 영화포스터 이미지가 null 일 때를 고려해 조건부 렌더링 추가 */}
              {movie.poster_path && (<img alt={movie.title} src={`${IMAGE_BASE_URL}${movie.poster_path}`} />)}
              <p>title : {movie.title}</p>
              <p>genre : {movie.genre_ids}</p>
            </li>
          ))}
        </ul>
      )}
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

export default Main;
