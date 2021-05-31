/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            {/* <Route path="/signup" component={SignUp}></Route> */}
            <Redirect to="/signup" />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
