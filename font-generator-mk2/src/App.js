import "./App.css";
import React from "react";
import { Generator } from "./components/generator";

function App() {
  return (
    <div className="App">
      <header className="App-header font-face-Brittany">
        Baby Boo's Font Generator
        <div className="disclaimer font-face-blossom">
          {" "}
          * Please note: Sizing and setup of letters is approximate. If you have
          any questions please feel free to contact us at shop@boosblankets.com{" "}
        </div>
      </header>
      {/* Loads Generator conponent */}
      <Generator />
    </div>
  );
}

export default App;
