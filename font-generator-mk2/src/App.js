import "./App.css";
import React from "react";
import { Generator } from "./components/generator";

function App() {
  return (
    <div className="App">
      <header className="App-header font-face-Langrish">
        Boos Fonts
        <div className="App-info font-face-Langrish">
          More Fonts coming soon!
        </div>
      </header>
      {/* Loads Generator conponent */}
      <Generator />
      <div className="disclaimer">
        {" "}
        * Please note: Not all fonts will register numbers, special characters,
        etc. Sizing and setup of letters is approximate. If you have any
        questions please feel free to contact us at shop@boosblankets.com
      </div>
    </div>
  );
}

export default App;
