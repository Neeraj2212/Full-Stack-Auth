/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Profile from "./components/profile";
import NavBar from "./components/NavBar";
import { userContext } from "./userProvider";
import "./App.css";

function App() {
  const user = useContext(userContext);
  console.log(user);

  return (
    <>
      <div>
        <Router>
          <NavBar />

          {user != null ? (
            <Switch>
              <Route path="/profile" component={Profile}></Route>
              <Redirect to="/profile" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />{" "}
              <Redirect to="/signup" />
            </Switch>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
