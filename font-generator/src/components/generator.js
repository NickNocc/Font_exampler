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
      fontClass: "font-face-Aurora",
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

  let name = "Enter your Name!";
  const [nameOutput, setNameOutput] = useState(name);
  const [cF, setCf] = useState(currentFont[0]);

  const handleFontChange = (event) => {
    setCf(currentFont[event.target.value]);
  };

  const handleNameChange = (event) => {
    setNameOutput(event.target.value);
  };

  return (
    <div className="split-holder">
      <div className="split-left">
        <input
          type="text"
          id="name-input"
          placeholder="Enter Name"
          onChange={handleNameChange}
        />
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
      </div>
      <div className="split-right">
        <div className={cF.fontClass + " nameOutput"}>{nameOutput}</div>
      </div>
    </div>
  );
};
