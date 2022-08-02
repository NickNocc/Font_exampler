import React, { useState } from "react";
import "./Generator.css";

export const Generator = () => {
  const currentFont = [
    {
      fontName: "Amazingly beautiful",
      fontClass: "font-face-Amazingly",
    },
    {
      fontName: "Aurora",
      fontClass: "font-face-aurora",
    },
    {
      fontName: "Baked Fresh",
      fontClass: "font-face-bakery",
    },
    {
      fontName: "Blossom",
      fontClass: "font-face-blossom",
    },
    {
      fontName: "Carefree",
      fontClass: "font-face-Carefree",
    },
    {
      fontName: "Chakra",
      fontClass: "font-face-Chakra",
    },
    {
      fontName: "Classico",
      fontClass: "font-face-Classico",
    },
    {
      fontName: "Clocks",
      fontClass: "font-face-Clocks",
    },
    {
      fontName: "Cookie",
      fontClass: "font-face-Cookie",
    },
    {
      fontName: "Ghisella",
      fontClass: "font-face-Ghisella",
    },
    {
      fontName: "Hancock",
      fontClass: "font-face-Hancock",
    },
    {
      fontName: "Homework",
      fontClass: "font-face-Homework",
    },
    {
      fontName: "Langrish",
      fontClass: "font-face-Langrish",
    },
    {
      fontName: "Lively",
      fontClass: "font-face-Lively",
    },
    {
      fontName: "Lobster",
      fontClass: "font-face-Lobster",
    },
    {
      fontName: "Tatertot",
      fontClass: "font-face-Tatertot",
    },
    {
      fontName: "Violetta",
      fontClass: "font-face-Violetta",
    },
    {
      fontName: "Eduarda",
      fontClass: "font-face-Eduarda",
    },
  ];

  const [cF, setCf] = useState(currentFont[0]);

  const handleFontChange = (event) => {
    setCf(currentFont[event.target.value]);
  };

  return (
    <div className="split-holder">
      <div className="split-left">
        <input type="text" id="name-input" placeholder="Enter Name" />
        <button id="submit-btn">Submit</button>
        <select
          className={"font-select"}
          value={cF.fontName}
          onChange={handleFontChange}
        >
          {currentFont
            ? currentFont.map((font, i) => (
                <option value={i} key={i}>
                  {font.fontName}
                </option>
              ))
            : null}
        </select>
        {/* add font choices, maybe open select box instead */}
      </div>
      <div className="split-right">
        <div className={cF.fontClass}>Output</div>
        {console.log("font class: ", cF.fontClass)}
        {console.log("font name: ", cF.value)}
        {/* update text with entered name */}
      </div>
    </div>
  );
};
