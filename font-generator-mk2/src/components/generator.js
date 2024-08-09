import React, { useState } from "react";
import Select from "react-select";
import "./Generator.css";

export const Generator = (props) => {

  const { currentFont } = props
  const cF = props;
  const setCf = props;
  // List of fonts Loaded onto the website

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
  ];
  // Default value for nameOutput
  let name = "Enter your Name";

  // State for nameOutput
  const [nameOutput, setNameOutput] = useState(name);

  // State for currently selected font

  // State for currently selected font color
  const [fontColor, setFontColor] = useState(currentColor[0]);
  // State for currentely selected minkyBack color
  const [minkyBack, setMinkyBack] = useState(currentMinkyBack[0]);
  // State for modal toggle
  const [isOpen, setIsOpen] = useState(true);

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
      } else{
        setCf(currentFont[0])
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
  const handleModalChange = (event) => {
    console.log(currentFont[0]);

    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="split-holder" style={{}}>
      <div className="split-left">
        {isOpen && (
          <span className="optionsMenu">
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
              style={{
                paddingLeft: "13%",
                paddingRight: "13%",
                display: "flex",
              }}
            >
              <Select
                options={currentFont}
                onChange={handleFontChange}
                styles={{ backgroundColor: "#fffff0", align_self: "center" }}
              ></Select>
              <Select
                options={currentColor}
                onChange={handleColorChange}
                styles={{
                  backgroundColor: "#fffff0",
                  color: currentColor.color,
                }}
              ></Select>
              <Select
                options={currentMinkyBack}
                onChange={handleMinkyBackChange}
              ></Select>
            </span>
          </span>
        )}
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
      <div>
        <button onClick={handleModalChange}>Toggle</button>
      </div>
    </div>
  );
};
