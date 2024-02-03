import { useEffect, useState } from "react";

function Genre() {
  const API_KEY = "9d5002da74fa822995bfbbc6f6cb3955";
  const [genres, setGenres] = useState("hello");

  const getGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`
    );
    const json = await response.json();
    setGenres(json);
  };

  useEffect(() => {
    getGenres();
  }, []);

  console.log(genres);

  return (
    <div>
      {genres.genres.map((genre) => {
        <div>
          {genre.id} : {genre.name}
        </div>;
      })}
    </div>
  );
}

export default Genre;
