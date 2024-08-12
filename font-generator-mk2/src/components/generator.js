import React, { useState } from "react";
import Select from "react-select";
import "./Generator.css";
import Styled from "styled-components";

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
  // List of colors loaded onto the site
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
      color: "#ebeec6",
      value: "Ivory",
      label: "Ivory",
    },
    {
      color: "#a9aaa4",
      value: "Silver",
      label: "Silver",
    },
    {
      color: "#606164",
      value: "Charcoal",
      label: "Charcoal",
    },
    // {
    //   color: "",
    //   value: "Latte",
    //   label: "Latte",
    // },
    {
      color: "#8e7256",
      value: "Coffee",
      label: "Coffee",
    },
    {
      color: "#483a39",
      value: "Brown",
      label: "Brown",
    },
    {
      color: "#cda547",
      value: "Gold",
      label: "Gold",
    },
    {
      color: "#f6c62d",
      value: "Yellow",
      label: "Yellow",
    },
    {
      color: "#e75c34",
      value: "Orange",
      label: "Orange",
    },
    {
      color: "#9d583c",
      value: "Rust",
      label: "Rust",
    },
    {
      color: "#b92a33",
      value: "Red",
      label: "Red",
    },
    {
      color: "#84324a",
      value: "Merlot",
      label: "Merlot",
    },
    {
      color: "#d66196",
      value: "Hot Pink",
      label: "Hot Pink",
    },
    {
      color: "#feb6d8",
      value: "Paris Pink",
      label: "Paris Pink",
    },
    {
      color: "#ba8c90",
      value: "Wood Rose",
      label: "Wood Rose",
    },
    {
      color: "#e2bdba",
      value: "Rose Water",
      label: "Rose Water",
    },
    {
      color: "#fbbed3",
      value: "Baby Pink",
      label: "Baby Pink",
    },
    {
      color: "#f88f99",
      value: "Coral",
      label: "Coral",
    },
    {
      color: "#978fba",
      value: "Lavender",
      label: "Lavender",
    },
    {
      color: "#9879a2",
      value: "Amethyst",
      label: "Amethyst",
    },
    {
      color: "#303647",
      value: "Navy",
      label: "Navy",
    },
    {
      color: "#224379",
      value: "Royal Blue",
      label: "Royal Blue",
    },
    {
      color: "#68c7e7",
      value: "Aqua",
      label: "Aqua",
    },
    {
      color: "#7fc7cd",
      value: "Saltwater",
      label: "Saltwater",
    },
    {
      color: "#a7c6e1",
      value: "Baby Blue",
      label: "Baby Blue",
    },
    {
      color: "#b9c2a0",
      value: "Sage",
      label: "Sage",
    },
    {
      color: "#729730",
      value: "Lime",
      label: "Lime",
    },
    {
      color: "#00cd00",
      value: "Green",
      label: "Green",
    },
    {
      color: "#354e3c",
      value: "Emerald",
      label: "Emerald",
    },
    {
      color: "#3b4b38",
      value: "Hunter",
      label: "Hunter",
    },
  ];
  // List of fabric back colors loaded into the site
  const currentMinkyBack = [
    {
      value: "liolioli",
      label: "liolioli",
      location: "url(../fabrics/liolioli.jpg)",
    },
    {
      value: "doubt",
      label: "doubt",
      location: "url(../fabrics/doubt.jpg)",
    },
    {
      value: "Safari Babies",
      label: "Safari Babies",
      location: "url(../fabrics/safari_babies.jpg)",
    },
  ];
  // Default value for nameOutput
  let name = "Enter your Name";

  // State for nameOutput
  const [nameOutput, setNameOutput] = useState(name);

  // State for currently selected font
  const [cF, setCf] = useState(currentFont[0]);

  // State for currently selected color
  const [fontColor, setFontColor] = useState(currentColor[0]);

  const [minkyBack, setMinkyBack] = useState(currentMinkyBack[0]);

  const [controlsVisible, setControlsVisible] = useState(false);

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
  // Changes fontColor to inputed value
  const handleColorChange = (event) => {
    const newColor = event.value;

    let colorIndex;

    let changeColor = currentColor.filter((style, i) => {
      if (style.value === newColor) {
        colorIndex = i;
        return;
      }
    });

    setFontColor(currentColor[colorIndex]);
  };
  // Changes currentMinkyBack
  const handleMinkyBackChange = (event) => {
    const newMinkyBack = event.value;

    let minkyBackIndex;

    let changeMinkyBack = currentMinkyBack.filter((style, i) => {
      if (style.value === newMinkyBack) {
        minkyBackIndex = i;
      }

      setMinkyBack(currentMinkyBack[minkyBackIndex]);
    });
  };

  const handleControls = () => {
    if (controlsVisible === true) {
      setControlsVisible(false);
    } else if (controlsVisible === false) {
      setControlsVisible(true);
    }
  };

  return (
    <div
      className="split-holder"
      style={{
        backgroundImage: minkyBack.location,
      }}
    >
      <div className="split-left"></div>
      <div className="split-right">
        {/* Changes div class to match with font-face css in index.css */}
        <div
          style={{ color: fontColor.color }}
          className={cF.fontClass + " nameOutput"}
        >
          {nameOutput}
        </div>
      </div>
      <Controls open={controlsVisible}>
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
          open={controlsVisible}
          style={{
            paddingLeft: "13%",
            paddingRight: "13%",
            display: "flex",
          }}
        >
          <Select
            defaultValue={currentFont[0]}
            options={currentFont}
            onChange={handleFontChange}
            styles={{ backgroundColor: "#fffff0", align_self: "center" }}
          ></Select>
          <Select
            defaultValue={currentColor[0]}
            options={currentColor}
            onChange={handleColorChange}
            styles={{
              backgroundColor: "#fffff0",
              color: currentColor.color,
            }}
          ></Select>
          <Select
            defaultValue={currentMinkyBack[0]}
            options={currentMinkyBack}
            onChange={handleMinkyBackChange}
          ></Select>
        </span>
      </Controls>
      <button onClick={handleControls}>peepee squee</button>
    </div>
  );
};

const Controls = Styled.div`position: absolute; height: fit-content; width: 100%; bottom: ${({
  open,
}) => (open ? ".001%" : "15%")};
visibility: ${({ open }) => (open ? "collapse" : "visible")};
    transition: bottom ease 0.3s;`;
