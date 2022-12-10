//Update styling for movies and buttons
//Create review list and form
//Provide update and delet button for each review
//add filter in reviews and movies to show users associated data
//update styling

import React from "react";
import "../components/card.css";
import { Link } from "react-router-dom";
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
      <Link to='/review/new'>
      <button>Create a review</button>
      </Link>
      
    </div>
  );
};

export default MovieCard;
