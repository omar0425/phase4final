import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const MovieList = ({movies}) => {
 function handleClick(){}



  return (
    <div>
      <button onClick={handleClick}>Create a New Movie</button>
      <section>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default MovieList;
