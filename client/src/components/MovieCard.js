import React from "react";
import "../components/card.css";
const MovieCard = ({ movie }) => {
  return (
    <div className='card'>
      <h2 className='title'>{movie.title}</h2>
      <img className='poster-image' src={movie.poster_url} alt='' />
      <p>
        <b>{movie.description}</b>
      </p>
      <p> {`${movie.category} | ${movie.year} | ${movie.length}`} </p>
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieCard;
