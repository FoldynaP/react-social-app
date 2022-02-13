import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route  exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </div>
    </Router>
 )

}

export default App;
