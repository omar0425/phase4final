import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
 
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => {
        setMovies(movies);
      });
  }, []);


  return (
    <div>
      <section>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default MovieList;
