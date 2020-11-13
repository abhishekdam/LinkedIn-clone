import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Login/Login";
import Network from "./routes/Network/Network";
import Jobs from "./routes/Jobs/Jobs";
import ForgotPassword from "./routes/Login/ForgotPassword/ForgotPassword";
import Profile from "./routes/Profile/Profile";
import User from "./routes/User/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/userSignup/:id"
            render={(props) => (
              <Signup key={props.location.pathname} {...props} />
            )}
          />
          <Route path="/userLogin" exact component={Login} />
          <Route
            path="/forgotPassword/:id"
            render={(props) => (
              <ForgotPassword key={props.location.pathname} {...props} />
            )}
          />
          <Route path="/network" exact component={Network} />
          <Route path="/jobs" exact component={Jobs} />
          <Route path="/profile" exact component={Profile} />
          <Route
            path="/user/:id"
            render={(props) => (
              <User key={props.location.pathname} {...props} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
