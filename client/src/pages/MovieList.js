import React,{useState, useEffect} from 'react'

const MovieList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => {
        setMovies(movies);
      });
  }, []);
  const categories = movies
  .map((movie) => movie.category)
  .filter(
    (category, index, categories) => categories.indexOf(category) === index
  )
  .sort();
  const displayedMovies = movies.filter(
    (movie) => selectedCategory === "All" || movie.category === selectedCategory
  );

  return (
    <div>MovieList</div>
  )
}

export default MovieList