import React, { useState } from "react";
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
      label: "Black thread",
    },
    {
      color: "rgb(255, 255, 255)",
      value: "White",
      label: "White thread",
    },
    {
      color: "#ebeec6",
      value: "Ivory",
      label: "Ivory thread",
    },
    {
      color: "#a9aaa4",
      value: "Silver",
      label: "Silver thread",
    },
    {
      color: "#606164",
      value: "Charcoal",
      label: "Charcoal thread",
    },
    // {
    //   color: "",
    //   value: "Latte",
    //   label: "Latte",
    // },
    {
      color: "#8e7256",
      value: "Coffee",
      label: "Coffee thread",
    },
    {
      color: "#483a39",
      value: "Brown",
      label: "Brown thread",
    },
    {
      color: "#cda547",
      value: "Gold",
      label: "Gold thread",
    },
    {
      color: "#f6c62d",
      value: "Yellow",
      label: "Yellow thread",
    },
    {
      color: "#e75c34",
      value: "Orange",
      label: "Orange thread",
    },
    {
      color: "#9d583c",
      value: "Rust",
      label: "Rust thread",
    },
    {
      color: "#b92a33",
      value: "Red",
      label: "Red thread",
    },
    {
      color: "#84324a",
      value: "Merlot",
      label: "Merlot thread",
    },
    {
      color: "#d66196",
      value: "Hot Pink",
      label: "Hot Pink thread",
    },
    {
      color: "#feb6d8",
      value: "Paris Pink",
      label: "Paris Pink thread",
    },
    {
      color: "#ba8c90",
      value: "Wood Rose",
      label: "Wood Rose thread",
    },
    {
      color: "#e2bdba",
      value: "Rose Water",
      label: "Rose Water thread",
    },
    {
      color: "#fbbed3",
      value: "Baby Pink",
      label: "Baby Pink thread",
    },
    {
      color: "#f88f99",
      value: "Coral",
      label: "Coral thread",
    },
    {
      color: "#978fba",
      value: "Lavender",
      label: "Lavender thread",
    },
    {
      color: "#9879a2",
      value: "Amethyst",
      label: "Amethyst thread",
    },
    {
      color: "#303647",
      value: "Navy",
      label: "Navy thread",
    },
    {
      color: "#224379",
      value: "Royal Blue",
      label: "Royal Blue thread",
    },
    {
      color: "#68c7e7",
      value: "Aqua",
      label: "Aqua thread",
    },
    {
      color: "#7fc7cd",
      value: "Saltwater",
      label: "Saltwater thread",
    },
    {
      color: "#a7c6e1",
      value: "Baby Blue",
      label: "Baby Blue thread",
    },
    {
      color: "#b9c2a0",
      value: "Sage",
      label: "Sage thread",
    },
    {
      color: "#729730",
      value: "Lime",
      label: "Lime thread",
    },
    {
      color: "#00cd00",
      value: "Green",
      label: "Green thread",
    },
    {
      color: "#354e3c",
      value: "Emerald",
      label: "Emerald thread",
    },
    {
      color: "#3b4b38",
      value: "Hunter",
      label: "Hunter thread",
    },
  ];
  // List of fabric back colors loaded into the site
  const currentMinkyBack = [
    {
      value: "Safari Babies",
      label: "Safari Babies",
      location: "url(../fabrics/safari_babies.jpg)",
    },
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

  const currentMinkyFront = [
    {
      value: "1",
      label: "saltwater dot",
      location: "url(https://media.rainpos.com/Checker/CD-DKTURQ.jpg)",
    },
    {
      value: "2",
      label: "hunter dot",
      location:
        "url(https://cdn11.bigcommerce.com/s-rv5ea8/images/stencil/2048x2048/products/99/313/CD_HNTR__82974.1582646689.jpg?c=2)",
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

  const [minkyFront, setMinkyFront] = useState(currentMinkyFront[0]);

  const [controlsVisible, setControlsVisible] = useState(false);

  const [buttonText, setButtonText] = useState("🔻");

  // Changes font on Select Change
  const handleFontChange = (event) => {
    // Stores event in var
    let selectedFont = event.target.value;

    // Empty var to hold index position
    let fontIndex;

    // Function to find index of selected font
    currentFont.filter((font, i) => {
      if (font.value === selectedFont) {
        fontIndex = i;
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
    if (globalText === "") {
      setNameOutput("Enter Name");
    } else {
      setNameOutput(globalText);
    }
  };
  // Changes fontColor to inputed value
  const handleColorChange = (event) => {
    const newColor = event.target.value;

    let colorIndex;

    currentColor.filter((style, i) => {
      if (style.value === newColor) {
        colorIndex = i;
      }
    });

    setFontColor(currentColor[colorIndex]);
  };
  // Changes currentMinkyBack
  const handleMinkyBackChange = (event) => {
    const newMinkyBack = event.target.value;

    let minkyBackIndex;

    currentMinkyBack.filter((style, i) => {
      if (style.value === newMinkyBack) {
        minkyBackIndex = i;
      }

      setMinkyBack(currentMinkyBack[minkyBackIndex]);
    });
  };
  const handleMinkyFrontChange = (event) => {
    const newMinkyFront = event.target.value;

    let minkyFrontIndex;

    currentMinkyFront.filter((style, i) => {
      if (style.value === newMinkyFront) {
        minkyFrontIndex = i;
      }

      setMinkyFront(currentMinkyFront[minkyFrontIndex]);
    });
  };

  const handleControls = () => {
    if (controlsVisible === true) {
      setTimeout(setControlsVisible(false), setButtonText("🔻"), 30);
    } else if (controlsVisible === false) {
      setTimeout(setControlsVisible(true), setButtonText("🔺"), 700);
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
      <div
        className="split-right"
        style={{
          backgroundImage: minkyFront.location,
        }}
      >
        {/* Changes div class to match with font-face css in index.css */}
        <div
          style={{ color: fontColor.color }}
          className={cF.fontClass + " nameOutput"}
        >
          {nameOutput}
        </div>
      </div>
      <MenuToggle onClick={handleControls} open={controlsVisible}>
        {buttonText}
      </MenuToggle>
      <Controls open={controlsVisible}>
        <span>
          <span className="menuBox font-face-Brittany">
            <span className="topControls">
              <select
                value={minkyBack.value}
                onChange={(e) => handleMinkyBackChange(e)}
              >
                {currentMinkyBack.map((minkBack, i) => (
                  <option
                    key={i}
                    defaultValue={currentMinkyBack[0]}
                    value={minkBack.value}
                    label={minkBack.label}
                  ></option>
                ))}
              </select>
              <p>&</p>
              <select
                value={minkyFront.value}
                onChange={(e) => handleMinkyFrontChange(e)}
              >
                {currentMinkyFront.map((minkFront, i) => (
                  <option
                    key={i}
                    defaultValue={currentMinkyFront[0]}
                    value={minkFront.value}
                    label={minkFront.label}
                  ></option>
                ))}
              </select>
              <p>with</p>
            </span>
            <span className="bottomControls">
              <select value={cF.value} onChange={(e) => handleFontChange(e)}>
                {currentFont.map((font, i) => (
                  <option
                    key={i}
                    defaultValue={currentFont[0]}
                    value={font.value}
                    label={font.label}
                  ></option>
                ))}
              </select>
              <p>&</p>
              <select
                value={fontColor.value}
                onChange={(e) => handleColorChange(e)}
              >
                {currentColor.map((hue, i) => (
                  <option
                    key={i}
                    defaultValue={currentColor[0]}
                    value={hue.value}
                    label={hue.label}
                  ></option>
                ))}
              </select>
            </span>
            <span className="nameControls">
              <p>For:</p>
              <input
                type="text"
                placeholder="Enter Name!"
                onChange={handleNameChange}
              />
            </span>
            {/* Where name is inputted */}
            {/* <input
            type="text"
            id="name-input"
            placeholder="Enter Name"
            onChange={handleNameChange}
          />
        </span>
         Select conponent to display font options 
        <span
          open={controlsVisible}
          style={{
            backgroundColor: "transparent",
            paddingLeft: "7%",
            paddingRight: "7%",
            display: "flex",
          }}
        >
          
            <Select
              defaultValue={currentFont[0]}
              options={currentFont}
              onChange={handleFontChange}
              classNamePrefix="innerSelect"
            ></Select>
            <Select
              defaultValue={currentColor[0]}
              options={currentColor}
              onChange={handleColorChange}
              classNamePrefix="innerSelect"
            ></Select>
            <Select
              defaultValue={currentMinkyBack[0]}
              options={currentMinkyBack}
              onChange={handleMinkyBackChange}
              classNamePrefix="innerSelect"
              ></Select> 
          */}
          </span>
        </span>
      </Controls>
    </div>
  );
};

const Controls = Styled.div`
  background-color: #e9dedc;
  position: absolute;
  height: ${({ open }) => (open ? "0px" : "20vh")}; width: 100%;
  bottom: 0%;
  visibility: visible;
  transition: all 500ms ease;
  z-index: 9;
  overflow: hidden;
  `;

// Button to toggle controls
const MenuToggle = Styled.div`
  background-color: #e9dedc;
  height: 5%;
  width: 11%;
  position: absolute;
  border: 20px, green;
  bottom: ${({ open }) => (open ? "0vh" : "20vh")};
  right: 5vw;
  transition: all 500ms ease;
  z-index: 10;
  align-content: stretch;
  font-size: 33px;
`;
