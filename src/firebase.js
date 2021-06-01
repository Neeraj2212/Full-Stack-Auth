import firebase from "firebase";

export const createUser = (email, password) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((err) => err.message);

export const signIN = (email, password) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((err) => {
      console.log(err.message);
      return err.message;
    });

export const signOut = () =>
  firebase
    .auth()
    .signOut()
    .then(() => {
      // eslint-disable-next-line no-unused-labels
      message: "Sign Out successfully";
    })
    .catch((err) => err.message);
