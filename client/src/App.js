import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import Login from "./pages/Login";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <Movies />
              </Route>
            <Route exact path="/login">
              <Login />
              </Route>
            <Route exact path="/signup">
              <Signup />
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

//dashBoard(homepage)
//login
//signup
//project

export default App;
