/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Profile from "./components/profile";
import NavBar from "./components/NavBar";
import { userContext } from "./userProvider";
import "./App.css";

function App() {
  const user = useContext(userContext);

  return (
    <>
      <main>
        <NavBar />

        {!user && (
          <>
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Redirect to="/signup" />{" "}
            </Switch>
          </>
        )}

        {user && (
          <>
            <Switch>
              <Route exact path="/profile" component={Profile} />
              <Redirect to="/profile" />
            </Switch>
          </>
        )}
      </main>
    </>
  );
}

export default App;
