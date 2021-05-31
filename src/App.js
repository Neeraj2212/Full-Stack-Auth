import React from "react"
import './App.css';
import firebase from "firebase";

function App() {
  const firebaseApp = firebase.apps[0];
  console.log(firebaseApp)
  return (
    <div className="App">
      <div>
      <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>
    </div>
  );
}

export default App;
