import React, { useState } from "react";
import Select from "react-select";
import "./Generator.css";

export const Generator = () => {
  const currentFont = [
    {
      fontName: "Amazingly beautiful",
      fontClass: "font-face-Amazingly",
      value: "Amazingly beautiful",
      label: "Amazingly Beautiful",
    },
    {
      fontName: "Aurora",
      fontClass: "font-face-aurora",
      value: "aurora",
      label: "Aurora",
    },
    {
      fontName: "Baked Fresh",
      fontClass: "font-face-bakery",
      value: "Baked Fresh",
      label: "Baked Fresh",
    },
    {
      fontName: "Blossom",
      fontClass: "font-face-blossom",
      value: "Blossom",
      label: "Blossom",
    },
    {
      fontName: "Carefree",
      fontClass: "font-face-Carefree",
      value: "Carefree",
      label: "Carefree",
    },
    {
      fontName: "Chakra",
      fontClass: "font-face-Chakra",
      value: "Chakra",
      label: "Chakra",
    },
    {
      fontName: "Classico",
      fontClass: "font-face-Classico",
      value: "Classico",
      label: "Classico",
    },
    {
      fontName: "Clocks",
      fontClass: "font-face-Clocks",
      value: "Clocks",
      label: "Clocks",
    },
    {
      fontName: "Cookie",
      fontClass: "font-face-Cookie",
      value: "Cookie",
      label: "Cookie",
    },
    {
      fontName: "Eduarda",
      fontClass: "font-face-Eduarda",
      value: "Eduarda",
      label: "Eduarda",
    },
    {
      fontName: "Ghisella",
      fontClass: "font-face-Ghisella",
      value: "Ghisella",
      label: "Ghisella",
    },
    {
      fontName: "hancock",
      fontClass: "font-face-hancock",
      value: "Hancock",
      label: "Hancock",
    },
    {
      fontName: "Homework",
      fontClass: "font-face-Homework",
      value: "Homework",
      label: "Homework",
    },
    {
      fontName: "Langrish",
      fontClass: "font-face-Langrish",
      value: "Langrish",
      label: "Langrish",
    },
    {
      fontName: "Lively",
      fontClass: "font-face-Lively",
      value: "Lively",
      label: "Lively",
    },
    {
      fontName: "Lobster",
      fontClass: "font-face-Lobster",
      value: "Lobster",
      label: "Lobster",
    },
    {
      fontName: "Tatertot",
      fontClass: "font-face-Tatertot",
      value: "Tatertot",
      label: "Tatertot",
    },
    {
      fontName: "Violetta",
      fontClass: "font-face-Violetta",
      value: "Violetta",
      label: "Violetta",
    },
  ];

  let name = "Enter your Name!";
  const [nameOutput, setNameOutput] = useState(name);
  const [cF, setCf] = useState(currentFont[0]);

  const handleFontChange = (event) => {
    let selectedFont = event.fontName;
    let fontIndex;
    let changeFont = currentFont.filter((font, i) => {
      if (font.fontName === selectedFont) {
        console.log(i);
        fontIndex = i;
        return;
      }
    });
    setCf(currentFont[fontIndex]);
  };

  const handleNameChange = (event) => {
    setNameOutput(event.target.value);
  };

  return (
    <div className="split-holder">
      <div className="split-left">
        <span>
          <input
            type="text"
            id="name-input"
            placeholder="Enter Name"
            onChange={handleNameChange}
          />
        </span>
        <Select options={currentFont} onChange={handleFontChange}></Select>
      </div>
      <div className="split-right">
        <div className={cF.fontClass + " nameOutput"}>{nameOutput}</div>
      </div>
    </div>
  );
};
