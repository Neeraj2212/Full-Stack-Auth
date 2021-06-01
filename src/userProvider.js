/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  });

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export default UserProvider;
