import React, { useState } from "react";
import "./Generator.css";

export const Generator = () => {
  const currentFont = [
    "Aurora",
    "Baked Fresh",
    "Carefree",
    "Clocks",
    "Lively",
    "Lobster",
    "Ghisella",
    "Violetta",
    "Blossom",
    "Chakra",
    "Tatertot",
    "Langrish",
    "Classico",
    "Hancock",
    "Homework",
    "Cookie",
    "Amazingly beautiful",
    "Eduarda",
  ];

  const [cF, setCf] = useState(currentFont[0]);
  console.log(cF);

  const handleFontChange = (event) => {
    setCf(event.target.value);
  };

  return (
    <div className="split-holder">
      <div className="split-left">
        <input type="text" id="name-input" placeholder="Enter Name" />
        <button id="submit-btn">Submit</button>
        <select className="font-select" value={cF} onChange={handleFontChange}>
          {currentFont 
          ? currentFont.map((font, i) => (
            <option value={i} key={i}>{font}</option>
          )) : null}
        </select>
        {/* add font choices, maybe open select box instead */}
      </div>
      <div className="split-right">
        <div className="output">Output</div>
        {/* update text with entered name */}
      </div>
    </div>
  );
};
