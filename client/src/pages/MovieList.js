import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

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
      <Link to="movie/new">
        <button >Create a New Movie</button>
      </Link>
      <section>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default MovieList;
