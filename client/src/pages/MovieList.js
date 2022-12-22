import React, { useState, useEffect, useContext } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { MyContext } from "../components/MyContext";

const MovieList = () => {
  
  const { user, movies } = useContext(MyContext);
  const [filter, setFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);


  

  const movies_not_yet_reviewed = movies.filter((movie) => {
    return !filteredMovies.find(
      (reviewed_movie) => reviewed_movie.id === movie.id
    );
  });
//Stretch Goal es lint errors
  useEffect(() => {
    if (filter === "") {
      setFilteredMovies(movies);
      
    } else if (filter === "myMovies") {
      
      setFilteredMovies(user.movies);
      
    } else {
      setFilteredMovies(movies_not_yet_reviewed);
      
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter,movies],500)



  // const filteredMovies = movies.filter((movie)=>{
  //   if (filter === "") return true
    
  //   if(filter === "myMovies"){
  //     if (movie.id === reviewed_movie.id)
  //   }
  // })

  function handleChange(e) {
    setFilter(e.target.value);
  }
  function myMovies(){
    console.log(user.movies)
  }

  return (
    <>
      <select onChange={handleChange}>
        <option value=''>All Movies</option>
        <option value='myMovies'>My movies</option>
        <option value='notMyMovies'>Not my movies</option>
      </select>
      <div>
        <Link to='movie/new'>
          <button>Create a New Movie</button>
        </Link>
        <section>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
        <button onClick={myMovies}>My Movies</button>
      </div>
    </>
  );
};

export default MovieList;
