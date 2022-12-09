import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, {useState} from "react";
import "./App.css";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";



function App() {
  const [user, setUser] = useState(null)
  console.log("user:", user)
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Movies />
              </Route>
            <Route path="/login" setUser={setUser}>
              <Login />
              </Route>
            <Route path="/signup" setUser={setUser}>
              <Signup />
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}



export default App;
