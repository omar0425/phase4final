//Update styling for movies and buttons
//Create review list and form
//Provide update and delet button for each review
//add filter in reviews and movies to show users associated data
//update styling

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
      <p> {`${movie.category} | ${movie.year} | ${movie.length} mins`} </p>
      <br />
      <br />
      <br />
      <button>Create a review</button>
    </div>
  );
};

export default MovieCard;
