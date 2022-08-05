import "./App.css";
import React from "react";
import { Generator } from "./components/generator";

function App() {
  return (
    <div className="App">
      <header className="App-header font-face-Langrish">Font Generator</header>
      <Generator />
    </div>
  );
}

export default App;

// <header className={"App-header" + " " + "font-face-aurora"}>
