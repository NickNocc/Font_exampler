import "./App.css";
import React from "react";
import { Generator } from "./components/generator";

function App() {
  return (
    <div className="App">
      <header className="App-header font-face-Langrish">
        Namely
        <div className="App-info font-face-Langrish">
          More Fonts coming soon!
        </div>
      </header>
      {/* Loads Generator conponent */}
      <Generator />
    </div>
  );
}

export default App;
