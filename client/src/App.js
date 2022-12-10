import { BrowserRouter, Route, Switch,useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";
import Signup from "./pages/Signup";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import MovieForm from "./pages/MovieForm";
import MovieList from "./pages/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => {
        setMovies(movies);
      });
  }, []);
  const [user, setUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  function handleLogOutClick() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setUser(null);
        history.push("/login");
        
      }
    });
  }

  return (
    <div className='App'>
      
        <div className='container'>
          <Navbar handleLogOutClick={handleLogOutClick} user={user} />
          <Switch>
            <Route exact path='/movies'>
              <MovieList movies={movies} />
            </Route>
            <Route path='/movie/new'>
              <MovieForm />
            </Route>
            <Route path='/login'>
              <Login setUser={setUser} />
            </Route>
            <Route path='/signup'>
              <Signup setUser={setUser} />
            </Route>
          </Switch>
        </div>
    
    </div>
  );
}

export default App;
