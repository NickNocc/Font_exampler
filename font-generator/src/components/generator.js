import React, { useState } from "react";
import "./Generator.css"

export const Generator = ({}) => {  
  const currentFont = [1, 2, 3, 4];

  const [cF, setCf] = useState(currentFont)
  console.log(cF);

  return (
    <div className="split-holder">
      <div className="split-left">
        <input type="text" id="name-input" placeholder="Enter Name" />
        <button id="submit-btn">Submit</button>
        <select className="font-select" value={cF}></select>
        {/* add font choices, maybe open select box instead */}
      </div>
      <div className="split-right">
        <div className="output">Output</div>
        {/* update text with entered name */}
      </div>
    </div>
  );
};
