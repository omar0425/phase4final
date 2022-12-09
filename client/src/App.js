import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from "react";
import "./App.css";
import Signup from "./pages/Signup";
import Movies from "./pages/MovieList";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";



function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  function handleLogOutClick(){
    fetch("/logout", {method:"DELETE"})
    .then((res) =>{
      if (res.ok){
        setUser(null)
      }
    })

  }
  
 
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
        <Navbar handleLogOutClick={handleLogOutClick} user={user}/>
          <Switch>
            <Route exact path="/">
              <Movies />
              </Route>
            <Route path="/login" >
              <Login setUser={setUser}/>
              </Route>
            <Route path="/signup" >
              <Signup setUser={setUser}/>
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}



export default App;
