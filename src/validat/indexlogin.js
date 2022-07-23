import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Validatelogin from "./Validatelogin";

function App() {
  return (
    <div className="App">
      <h1>Validated Login Form</h1>
      <Validatelogin/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
