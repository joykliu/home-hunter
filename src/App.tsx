import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

// const logo = require("./logo.svg");

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={Logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
