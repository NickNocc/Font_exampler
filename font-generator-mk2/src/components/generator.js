import React, { useState } from "react";
import Select from "react-select";
import "./Generator.css";

export const Generator = () => {
  // List of fonts Loaded onto the website
  const currentFont = [
    //  {
    //    fontName: "X",     Name Listed
    //    fontClass: "X-X",  Connects to the font's css class
    //    value: "X",        Im not sure honestly lmao
    //    label: "X"         The label in the list
    //  },
    {
      fontName: "Almond Butter",
      fontClass: "font-face-Almondbutter",
      value: "Almondbutter",
      label: "Almond Butter",
    },
    {
      fontName: "Amazingly beautiful",
      fontClass: "font-face-Amazingly",
      value: "Amazingly beautiful",
      label: "Amazingly Beautiful",
    },
    {
      fontName: "Andrea",
      fontClass: "font-face-Andrea",
      value: "Andrea",
      label: "Andrea",
    },
    {
      fontName: "Aurora",
      fontClass: "font-face-aurora",
      value: "Aurora",
      label: "Aurora",
    },
    {
      fontName: "Autery",
      fontClass: "font-face-Autery",
      value: "Autery",
      label: "Autery",
    },
    {
      fontName: "Baby Point",
      fontClass: "font-face-Babypoint",
      value: "Babypoint",
      label: "Baby Point",
    },
    {
      fontName: "Baked Fresh",
      fontClass: "font-face-Bakedfresh",
      value: "Bakedfresh",
      label: "Baked Fresh",
    },
    {
      fontName: "Blossom",
      fontClass: "font-face-blossom",
      value: "Blossom",
      label: "Blossom",
    },
    {
      fontName: "Boho Flowers",
      fontClass: "font-face-BohoFlowers",
      value: "BohoFlowers",
      label: "BohoFlowers",
    },
    {
      fontName: "Chakra",
      fontClass: "font-face-Chakra",
      value: "Chakra",
      label: "Chakra",
    },
    {
      fontName: "Chalk",
      fontClass: "font-face-Chalk",
      value: "Chalk",
      label: "Chalk",
    },
    {
      fontName: "Classico",
      fontClass: "font-face-classico",
      value: "classico",
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
      fontName: "Doodle",
      fontClass: "font-face-Doodle",
      value: "Doodle",
      label: "Doodle",
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
      fontName: "Hancock",
      fontClass: "font-face-Hancock",
      value: "Hancock",
      label: "Hancock",
    },
    {
      fontName: "Harpsichord",
      fontClass: "font-face-Harpsichord",
      value: "Harpsichord",
      label: "Harpsichord",
    },
    {
      fontName: "Langrish",
      fontClass: "font-face-Langrish",
      value: "Langrish",
      label: "Langrish",
    },
    {
      fontName: "Layla",
      fontClass: "font-face-Layla",
      value: "Layla",
      label: "Layla",
    },
    {
      fontName: "Lively",
      fontClass: "font-face-Lively",
      value: "Lively",
      label: "Lively",
    },
    {
      fontName: "Sweetheart",
      fontClass: "font-face-Sweetheart",
      value: "Sweetheart",
      label: "Sweetheart",
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

  const currentColor = [
    // {
    //   color: "",
    //   value: "",
    //   label: "",
    // },
    {
      color: "rgb(0, 0, 0)",
      value: "Black",
      label: "Black",
    },
    {
      color: "rgb(255, 255, 255)",
      value: "White",
      label: "White",
    },
    {
      color: "rgb(255, 255, 240)",
      value: "Ivory",
      label: "Ivory",
    },
    {
      color: "#C0C0C0",
      value: "Silver",
      label: "Silver",
    },
    {
      color: "#36454F",
      value: "Charcoal",
      label: "Charcoal",
    },
    // {
    //   color: "",
    //   value: "Latte",
    //   label: "Latte",
    // },
    {
      color: "#6F4E37",
      value: "Coffee",
      label: "Coffee",
    },
    {
      color: "#A52A2A",
      value: "Brown",
      label: "Brown",
    },
    {
      color: "#FFD700",
      value: "Gold",
      label: "Gold",
    },
    {
      color: "#FFFF00",
      value: "Yellow",
      label: "Yellow",
    },
    {
      color: "#FFA500",
      value: "Orange",
      label: "Orange",
    },
    {
      color: "#b7410e",
      value: "Rust",
      label: "Rust",
    },
    {
      color: "#FF0000",
      value: "Red",
      label: "Red",
    },
    {
      color: "#501F2F",
      value: "Merlot",
      label: "Merlot",
    },
    {
      color: "#FF69B4",
      value: "Hot Pink",
      label: "Hot Pink",
    },
    {
      color: "#D5698A",
      value: "Paris Pink",
      label: "Paris Pink",
    },
    {
      color: "#AE7876",
      value: "Wood Rose",
      label: "Wood Rose",
    },
    {
      color: "#CBAFAA",
      value: "Rose Water",
      label: "Rose Water",
    },
    {
      color: "#F4C2C2",
      value: "Baby Pink",
      label: "Baby Pink",
    },
    {
      color: "#f88379",
      value: "Coral",
      label: "Coral",
    },
    {
      color: "#E6E6FA",
      value: "Lavender",
      label: "Lavender",
    },
    {
      color: "#9966CC",
      value: "Amethyst",
      label: "Amethyst",
    },
    {
      color: "#000080",
      value: "Navy",
      label: "Navy",
    },
    {
      color: "#4169E1",
      value: "Royal Blue",
      label: "Royal Blue",
    },
    {
      color: "#00ffff",
      value: "Aqua",
      label: "Aqua",
    },
    {
      color: "#5DBADB",
      value: "Saltwater",
      label: "Saltwater",
    },
    {
      color: "#89CFF0",
      value: "Baby Blue",
      label: "Baby Blue",
    },
    {
      color: "#bcb88a",
      value: "Sage",
      label: "Sage",
    },
    {
      color: "#32cd32",
      value: "Lime",
      label: "Lime",
    },
    {
      color: "#00cd00",
      value: "Green",
      label: "Green",
    },
    {
      color: "#50c878",
      value: "Emerald",
      label: "Emerald",
    },
    {
      color: "#355e3b",
      value: "Hunter",
      label: "Hunter",
    },
  ];

  // Default value for nameOutput
  let name = "Enter your Name";

  // State for nameOutput
  const [nameOutput, setNameOutput] = useState(name);

  // State for currently selected font
  const [cF, setCf] = useState(currentFont[0]);

  const [fontColor, setFontColor] = useState(currentColor[0]);

  // Changes font on Select Change
  const handleFontChange = (event) => {
    // Stores event in var
    let selectedFont = event.fontName;
    // Empty var to hold index position
    let fontIndex;
    // Function to find index of selected font
    let changeFont = currentFont.filter((font, i) => {
      if (font.fontName === selectedFont) {
        console.log(currentFont[i]);
        fontIndex = i;
        return;
      }
    });
    // Sets the current font to the index of selected font
    setCf(currentFont[fontIndex]);
  };

  // Changes nameOutput to inputed value
  const handleNameChange = (event) => {
    let newText = event.target.value;
    let globalText = "";
    const regex = /[^a-zA-Z\u002D\u0027]+/gi;

    globalText = newText.replaceAll(regex, "");

    setNameOutput(globalText);
  };

  const handleColorChange = (event) => {
    const newColor = event.value;

    let colorIndex;

    let changeColor = currentColor.filter((style, i) => {
      if (style.value === newColor) {
        colorIndex = i;
        return;
      }
    });
    console.log("fontcolor: " + fontColor.color);

    setFontColor(currentColor[colorIndex]);
    console.log("fontcolor2: " + fontColor.color);
  };

  return (
    <div className="split-holder">
      <div className="split-left">
        <span>
          {/* Where name is inputted */}
          <input
            type="text"
            id="name-input"
            placeholder="Enter Name"
            onChange={handleNameChange}
          />
        </span>
        {/* Select conponent to display font options */}
        <span
          style={{ paddingLeft: "13%", paddingRight: "13%", display: "flex" }}
        >
          <Select
            options={currentFont}
            onChange={handleFontChange}
            styles={{ backgroundColor: "#fffff0", align_self: "center" }}
          ></Select>
          <Select
            options={currentColor}
            onChange={handleColorChange}
            styles={{ backgroundColor: "#fffff0", color: currentColor.color }}
          ></Select>
        </span>
      </div>
      <div className="split-right">
        {/* Changes div class to match with font-face css in index.css */}
        <div
          style={{ color: fontColor.color }}
          className={cF.fontClass + " nameOutput"}
        >
          {nameOutput}
        </div>
      </div>
    </div>
  );
};
