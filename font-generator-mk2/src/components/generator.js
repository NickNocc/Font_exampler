import React, { useState } from "react";
import "./Generator.css";
import Styled from "styled-components";

export const Generator = () => {
  // List of fonts Loaded onto the website
  const fontList = [
    //  {
    //    fontName: "X",     Name Listed
    //    fontClass: "X-X",  Connects to the font's css className
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
      fontName: "Brooklyn",
      fontClass: "font-face-Brooklyn",
      value: "Brooklyn",
      label: "Brooklyn",
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
      fontName: "February",
      fontClass: "font-face-Farmhouse",
      value: "February",
      label: "February",
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
    {
      fontName: "Wonderful",
      fontClass: "font-face-Wonderful",
      value: "Wonderful",
      label: "Wonderful",
    },
  ];
  // List of colors thread loaded onto the site
  const currentColor = [
    // {
    //   color: "",
    //   value: "",
    //   label: "",
    // },
    {
      color: "#9879a2",
      value: "Amethyst",
      label: "Amethyst",
    },
    {
      color: "#68c7e7",
      value: "Aqua",
      label: "Aqua",
    },
    {
      color: "#a7c6e1",
      value: "Baby Blue",
      label: "Baby Blue",
    },
    {
      color: "#fbbed3",
      value: "Baby Pink",
      label: "Baby Pink",
    },
    {
      color: "rgb(0, 0, 0)",
      value: "Black",
      label: "Black",
    },
    {
      color: "#483a39",
      value: "Brown",
      label: "Brown",
    },
    {
      color: "#606164",
      value: "Charcoal",
      label: "Charcoal",
    },
    {
      color: "#8e7256",
      value: "Coffee",
      label: "Coffee",
    },
    {
      color: "#f88f99",
      value: "Coral",
      label: "Coral",
    },
    {
      color: "#354e3c",
      value: "Emerald",
      label: "Emerald",
    },
    {
      color: "#cda547",
      value: "Gold",
      label: "Gold",
    },
    {
      color: "#00cd00",
      value: "Green",
      label: "Green",
    },
    {
      color: "#d66196",
      value: "Hot Pink",
      label: "Hot Pink",
    },
    {
      color: "#3b4b38",
      value: "Hunter",
      label: "Hunter",
    },
    {
      color: "#ebeec6",
      value: "Ivory",
      label: "Ivory",
    },
    {
      color: "#978fba",
      value: "Lavender",
      label: "Lavender",
    },
    {
      color: "#729730",
      value: "Lime",
      label: "Lime",
    },
    {
      color: "#84324a",
      value: "Merlot",
      label: "Merlot",
    },
    {
      color: "#303647",
      value: "Navy",
      label: "Navy",
    },
    {
      color: "#e75c34",
      value: "Orange",
      label: "Orange",
    },
    {
      color: "#feb6d8",
      value: "Paris Pink",
      label: "Paris Pink",
    },
    {
      color: "#b92a33",
      value: "Red",
      label: "Red",
    },
    {
      color: "#224379",
      value: "Royal Blue",
      label: "Royal Blue",
    },
    {
      color: "#e2bdba",
      value: "Rose Water",
      label: "Rose Water",
    },
    {
      color: "#9d583c",
      value: "Rust",
      label: "Rust",
    },
    {
      color: "#b9c2a0",
      value: "Sage",
      label: "Sage",
    },
    {
      color: "#7fc7cd",
      value: "Saltwater",
      label: "Saltwater",
    },
    {
      color: "#a9aaa4",
      value: "Silver",
      label: "Silver",
    },
    {
      color: "rgb(255, 255, 255)",
      value: "White",
      label: "White",
    },
    {
      color: "#ba8c90",
      value: "Wood Rose",
      label: "Wood Rose",
    },
    {
      color: "#f6c62d",
      value: "Yellow",
      label: "Yellow",
    },
    // {
    //   color: "",
    //   value: "Latte",
    //   label: "Latte",
    // },
  ];
  // List of fabric front colors loaded into the site. Non-Customizable Side
  const currentMinkyStatic = [
    // {
    // value: ,
    // label: ,
    // location: ,
    // },
    {
      value: "Call of the Wild",
      label: "Call of the Wild",
      location: "url(../fabrics/calloftheWild.jpg)",
    },
    // {
    //   value: "Latte Checkers",
    //   label: "Latte Checkers",
    //   location: "url(../fabrics/latteMushroomCheckers.jpg)",
    // },
    {
      value: "Christmas Trucks",
      label: "Christmas Trucks",
      location: "url(../fabrics/xmasTrucks.jpg)",
    },
    {
      value: "Fairytale Blush",
      label: "Fairytale Blush",
      location: "url(../fabrics/fairytaleBlush.jpg)",
    },
    {
      value: "Baby Calf Woodland",
      label: "Baby Calf Woodland",
      location: "url(../fabrics/babyCalfWoodland.jpg)",
    },
    {
      value: "Bessie Calf",
      label: "Bessie Calf",
      location: "url(../fabrics/bessieCalf.jpg)",
    },
    {
      value: "Brownie Calf",
      label: "Brownie Calf",
      location: "url(../fabrics/brownieCalf.jpg)",
    },
    {
      value: "Clararose Calf",
      label: "Clararose Calf",
      location: "url(../fabrics/clararoseCalf.jpg)",
    },
    {
      value: "Penny Calf",
      label: "Penny Calf",
      location: "url(../fabrics/pennyCalf.jpg)",
    },
    {
      value: "Beige Fawn",
      label: "Beige Fawn",
      location: "url(../fabrics/beigeFawn.jpg)",
    },
    {
      value: "Brown Fawn",
      label: "Brown Fawn",
      location: "url(../fabrics/fawnMinky.jpg)",
    },
    {
      value: "Lavender Fawn",
      label: "Lavender Fawn",
      location: "url(../fabrics/lavenderFawn.jpg)",
    },
    {
      value: "Rosewater Fawn",
      label: "Rosewater Fawn",
      location: "url(../fabrics/rosewaterFawn.jpg)",
    },
    {
      value: "Gray Galaxy",
      label: "Gray Galaxy",
      location: "url(../fabrics/grayGalaxy.jpg)",
    },
    {
      value: "Hunter Galaxy",
      label: "Hunter Galaxy",
      location: "url(../fabrics/hunterGalaxy.jpg)",
    },
    {
      value: "Basil Glacier",
      label: "Basil Glacier",
      location: "url(../fabrics/basilGlacier.jpg)",
    },
    {
      value: "Evergreen Glacier",
      label: "Evergreen Glacier",
      location: "url(../fabrics/greenGlacier.jpg)",
    },
    {
      value: "Ice Pink Glacier",
      label: "Ice Pink Glacier",
      location: "url(../fabrics/icePinkGlacier.jpg)",
    },
    {
      value: "Ivory Glacier",
      label: "Ivory Glacier",
      location: "url(../fabrics/ivoryGlacier.jpg)",
    },
    {
      value: "Jeans Glacier",
      label: "Jeans Glacier",
      location: "url(../fabrics/jeansGlacier.jpg)",
    },
    {
      value: "Latte Glacier",
      label: "Latte Glacier",
      location: "url(../fabrics/latteGlacier.jpg)",
    },
    {
      value: "Lavender Glacier",
      label: "Lavender Glacier",
      location: "url(../fabrics/lavenderGlacier.jpg)",
    },
    {
      value: "Moss Glacier",
      label: "Moss Glacier",
      location: "url(../fabrics/mossGlacier.jpg)",
    },
    {
      value: "Navy Glacier",
      label: "Navy Glacier",
      location: "url(../fabrics/navyGlacier.jpg)",
    },
    {
      value: "White Glacier",
      label: "White Glacier",
      location: "url(../fabrics/snowGlacier.jpg)",
    },
    {
      value: "Woodrose Glacier",
      label: "Woodrose Glacier",
      location: "url(../fabrics/woodroseGlacier.jpg)",
    },
    {
      value: "Lavender Heather",
      label: "Lavender Heather",
      location: "url(../fabrics/lavenderHeather.jpg)",
    },
    {
      value: "Elderberry Hide",
      label: "Elderberry Hide",
      location: "url(../fabrics/elderberryHide.jpg)",
    },
    {
      value: "Gray Hide",
      label: "Gray Hide",
      location: "url(../fabrics/grayHide.jpg)",
    },
    {
      value: "Sage Hide",
      label: "Sage Hide",
      location: "url(../fabrics/thymeHide.jpg)",
    },
    {
      value: "Rosewater Hide",
      label: "Rosewater Hide",
      location: "url(../fabrics/rosewaterHide.jpg)",
    },
    {
      value: "Leopard Blush",
      label: "Leopard Blush",
      location: "url(../fabrics/leopardBlush.jpg)",
    },
    {
      value: "Foxxy Rust",
      label: "Foxxy Rust",
      location: "url(../fabrics/foxxyRust.jpg)",
    },
    {
      value: "Leopard Sand",
      label: "Leopard Sand",
      location: "url(../fabrics/leopardSand.jpg)",
    },
    {
      value: "Lavender Lynx",
      label: "Lavender Lynx",
      location: "url(../fabrics/lavenderLynx.jpg)",
    },
    {
      value: "Wildrose Lynx",
      label: "Wildrose Lynx",
      location: "url(../fabrics/wildroseLynx.jpg)",
    },
    {
      value: "Mighty Jungle",
      label: "Mighty Jungle",
      location: "url(../fabrics/mightyJungle.jpg)",
    },
    {
      value: "Mushroom Minky",
      label: "Mushroom Minky",
      location: "url(../fabrics/mushroomMinky.jpg)",
    },
    {
      value: "Heads Up Natural",
      label: "Heads Up Natural",
      location: "url(../fabrics/headsupNatural.jpg)",
    },
    {
      value: "Nine Iron",
      label: "Nine Iron",
      location: "url(../fabrics/nineIron.jpg)",
    },
    {
      value: "Gray Plaid",
      label: "Gray Plaid",
      location: "url(../fabrics/grayPlaid.jpg)",
    },
    {
      value: "Biscotti Ocelot",
      label: "Biscotti Ocelot",
      location: "url(../fabrics/biscottiOcelot.jpg)",
    },
    {
      value: "Brown Sugar Pony",
      label: "Brown Sugar Pony",
      location: "url(../fabrics/brownsugarPony.jpg)",
    },
    {
      value: "Ivory Brown Pony",
      label: "Ivory Brown Pony",
      location: "url(../fabrics/brownpony.jpg)",
    },
    {
      value: "Mud Pie Pony",
      label: "Mud Pie Pony",
      location: "url(../fabrics/mudpiePony.jpg)",
    },
    {
      value: "Storm Pony",
      label: "Storm Pony",
      location: "url(../fabrics/stormPony.jpg)",
    },
    {
      value: "Teddy Quartz",
      label: "Teddy Quartz",
      location: "url(../fabrics/teddyQuartz.jpg)",
    },
    {
      value: "Artichoke Wild Rabbit",
      label: "Artichoke Wild Rabbit",
      location: "url(../fabrics/wildRabbitArtichoke.jpg)",
    },
    {
      value: "Driftwood Rabbit",
      label: "Driftwood Rabbit",
      location: "url(../fabrics/driftwoodRabbit.jpg)",
    },
    {
      value: "Sandshell Rabbit",
      label: "Sandshell Rabbit",
      location: "url(../fabrics/sandshellRabbit.jpg)",
    },
    {
      value: "Silver Lining Wild Rabbit",
      label: "Silver Lining Wild Rabbit",
      location: "url(../fabrics/wildRabbitSilverLining.jpg)",
    },
    {
      value: "Walnut Wild Rabbit",
      label: "Walnut Wild Rabbit",
      location: "url(../fabrics/wildRabbitWalnut.jpg)",
    },
    {
      value: "Sweet Darlings",
      label: "Sweet Darlings",
      location: "url(../fabrics/sweetDarlings.jpg)",
    },
    {
      value: "Rite of Spring",
      label: "Rite of Spring",
      location: "url(../fabrics/riteofSpring.jpg)",
    },
    {
      value: "Once upon a time",
      label: "Once upon a time",
      location: "url(../fabrics/oneuponatime.jpg)",
    },
    {
      value: "Safari Babies",
      label: "Safari Babies",
      location: "url(../fabrics/safariBabies.jpg)",
    },
    {
      value: "Safari Dreams",
      label: "Safari Dreams",
      location: "url(../fabrics/safariDreamsBlue.jpg)",
    },
    {
      value: "Sydney Natural",
      label: "Sydney Natural",
      location: "url(../fabrics/sydneyNatural.jpg)",
    },
    {
      value: "Natural Snow Owl",
      label: "Natural Snow Owl",
      location: "url(../fabrics/naturalSnowOwl.jpg)",
    },
    {
      value: "Navy Snow Owl",
      label: "Navy Snow Owl",
      location: "url(../fabrics/navySnowOwl.jpg)",
    },
    {
      value: "Unicorn Sorbet",
      label: "Unicorn Sorbet",
      location: "url(../fabrics/unicornSorbet.jpg)",
    },
    {
      value: "Blue Tie-Dye",
      label: "Blue Tie-Dye",
      location: "url(../fabrics/blueTieDye.jpg)",
    },
    {
      value: "Vienna Crystal",
      label: "Vienna Crystal",
      location: "url(../fabrics/viennaCrystal.jpg)",
    },
    {
      value: "Vienna Latte",
      label: "Vienna Latte",
      location: "url(../fabrics/viennaLatte.jpg)",
    },
    {
      value: "Vienna Pecan",
      label: "Vienna Pecan",
      location: "url(../fabrics/viennaPecan.jpg)",
    },
    {
      value: "Vienna Plumwine",
      label: "Vienna Plumwine",
      location: "url(../fabrics/viennaPlumwine.jpg)",
    },
    {
      value: "Vienna Spruce",
      label: "Vienna Spruce",
      location: "url(../fabrics/viennaSpruce.jpg)",
    },

    //^^ this may be a different color, revisit
  ];
  //List of fabric back colors loaded into the site. Customizable side
  const currentMinkyCustom = [
    {
      value: "Amethyst Dot",
      label: "Amethyst Dot",
      location: "url(../fabrics/amethystDot.jpg)",
    },
    {
      value: "Aqua Dot",
      label: "Aqua Dot",
      location: "url(../fabrics/aquamarineDot.jpg)",
    },
    {
      value: "Baby Blue Dot",
      label: "Baby Blue Dot",
      location: "url(../fabrics/babyBlueDot.jpg)",
    },
    {
      value: "Baby Pink Dot",
      label: "Baby Pink Dot",
      location: "url(../fabrics/babyPinkDot.jpg",
    },
    {
      value: "Black Dot",
      label: "Black Dot",
      location: "url(../fabrics/blackDot.jpg)",
    },
    {
      value: "Brown Dot",
      label: "Brown Dot",
      location: "url(../fabrics/brownDot.jpg)",
    },
    // {
    //   value: "Chocolate Dot",
    //   label: "Chocolate Dot",
    //   location: "url(../fabrics/)",
    // },
    {
      value: "Coral Dot",
      label: "Coral Dot",
      location: "url(../fabrics/coralDot.jpg)",
    },
    {
      value: "Denim Dot",
      label: "Denim Dot",
      location: "url(../fabrics/denimDot.jpg)",
    },
    {
      value: "Dusty Rose Dot",
      label: "Dusty Rose Dot",
      location: "url(../fabrics/dustyRoseDot.jpg)",
    },
    {
      value: "Electric Blue Dot",
      label: "Electric Blue Dot",
      location: "url(../fabrics/electricBlueDot.jpg)",
    },
    {
      value: "Emerald Dot",
      label: "Emerald Dot",
      location: "url(../fabrics/emeraldDot.jpg)",
    },
    {
      value: "Hot Pink Dot",
      label: "Hot Pink Dot",
      location: "url(../fabrics/fuschiaDot.jpg)",
    },
    {
      value: "Graphite Dot",
      label: "Graphite Dot",
      location: "url(../fabrics/graphiteDot.jpg)",
    },
    {
      value: "Hunter Dot",
      label: "Hunter Dot",
      location: "url(../fabrics/hunterDot.jpg)",
    },
    {
      value: "Ivory Dot",
      label: "Ivory Dot",
      location: "url(../fabrics/ivoryDot.jpg)",
    },
    {
      value: "Kelly Green Dot",
      label: "Kelly Green Dot",
      location: "url(../fabrics/kellyGreenDot.jpg)",
    },
    {
      value: "Latte Dot",
      label: "Latte Dot",
      location: "url(../fabrics/latteDot.jpg)",
    },
    {
      value: "Lavender Dot",
      label: "Lavender Dot",
      location: "url(../fabrics/lavenderDot.jpg)",
    },
    {
      value: "Mallard Dot",
      label: "Mallard Dot",
      location: "url(../fabrics/mallardDot.jpg)",
    },
    {
      value: "Midnight Dot",
      label: "Midnight Dot",
      location: "url(../fabrics/midnightBlueDot.jpg)",
    },
    {
      value: "Navy Dot",
      label: "Navy Dot",
      location: "url(../fabrics/navyDot.jpg)",
    },
    {
      value: "Opal Dot",
      label: "Opal Dot",
      location: "url(../fabrics/opalDot.jpg)",
    },
    {
      value: "Paris Pink Dot",
      label: "Paris Pink Dot",
      location: "url(../fabrics/parisPinkDot.jpg)",
    },
    {
      value: "Papaya Dot",
      label: "Papaya Dot",
      location: "url(../fabrics/papayaDot.jpg)",
    },
    // {
    //   value: "Penny Dot",
    //   label: "Penny Dot",
    //   location: "url(../fabrics/)",
    // },
    {
      value: "Purple Dot",
      label: "Purple Dot",
      location: "url(../fabrics/purpleDot.jpg)",
    },
    {
      value: "Red Dot",
      label: "Red Dot",
      location: "url(../fabrics/redDot.jpg)",
    },
    {
      value: "Royal Dot",
      label: "Royal Dot",
      location: "url(../fabrics/royalBlueDot.jpg)",
    },
    {
      value: "Rust Dot",
      label: "Rust Dot",
      location: "url(../fabrics/rustDot.jpg)",
    },
    {
      value: "Sage Dot",
      label: "Sage Dot",
      location: "url(../fabrics/sageDot.jpg)",
    },
    {
      value: "Saltwater Dot",
      label: "Saltwater Dot",
      location: "url(../fabrics/saltwaterDot.jpg)",
    },
    {
      value: "Shell Dot",
      label: "Shell Dot",
      location: "url(../fabrics/shellDot.jpg)",
    },
    {
      value: "Steel Dot",
      label: "Steel Dot",
      location: "url(../fabrics/steelDot.jpg)",
    },
    {
      value: "Sunshine Dot",
      label: "Sunshine Dot",
      location: "url(../fabrics/sunshineDot.jpg)",
    },
    {
      value: "Teal Dot",
      label: "Teal Dot",
      location: "url(../fabrics/tealDot.jpg)",
    },
    // {
    //   value: "Taupe Dot",
    //   label: "Taupe Dot",
    //   location: "url(../fabrics/)",
    // },

    {
      value: "White Dot",
      label: "White Dot",
      location: "url(../fabrics/whiteDot.jpg)",
    },
    {
      value: "Yellow Dot",
      label: "Yellow Dot",
      location: "url(../fabrics/yellowDot.jpg)",
    },
    {
      value: "Alloy Glacier",
      label: "Alloy Glacier",
      location: "url(../fabrics/alloyGlacier.jpg)",
    },
    {
      value: "Ash Glacier",
      label: "Ash Glacier",
      location: "url(../fabrics/ashGlacier.jpg)",
    },
    {
      value: "Basil Glacier",
      label: "Basil Glacier",
      location: "url(../fabrics/basilGlacier.jpg)",
    },
    {
      value: "Black Glacier",
      label: "Black Glacier",
      location: "url(../fabrics/blackGlacier.jpg)",
    },
    {
      value: "Cardinal Glacier",
      label: "Cardinal Glacier",
      location: "url(../fabrics/cardinalGlacier.jpg)",
    },
    {
      value: "Cedarwood Glacier",
      label: "Cedarwood Glacier",
      location: "url(../fabrics/cedarwoodGlacier.jpg)",
    },
    {
      value: "Brown Glacier",
      label: "Brown Glacier",
      location: "url(../fabrics/brownGlacier.jpg)",
    },
    {
      value: "Evergreen Glacier",
      label: "Evergreen Glacier",
      location: "url(../fabrics/greenGlacier.jpg)",
    },
    {
      value: "Ginger Glacier",
      label: "Ginger Glacier",
      location: "url(../fabrics/gingerGlacier.jpg)",
    },
    {
      value: "Hot Pink Glacier",
      label: "Hot Pink Glacier",
      location: "url(../fabrics/hotPinkGlacier.jpg)",
    },
    {
      value: "Ice Pink Glacier",
      label: "Ice Pink Glacier",
      location: "url(../fabrics/icePinkGlacier.jpg)",
    },
    {
      value: "Ink Glacier",
      label: "Ink Glacier",
      location: "url(../fabrics/inkGlacier.jpg)",
    },
    {
      value: "Ivory Glacier",
      label: "Ivory Glacier",
      location: "url(../fabrics/ivoryGlacier.jpg)",
    },
    {
      value: "Jeans Glacier",
      label: "Jeans Glacier",
      location: "url(../fabrics/jeansGlacier.jpg)",
    },
    {
      value: "Latte Glacier",
      label: "Latte Glacier",
      location: "url(../fabrics/latteGlacier.jpg)",
    },
    {
      value: "Merlot Glacier",
      label: "Merlot Glacier",
      location: "url(../fabrics/merlotGlacier.jpg)",
    },
    {
      value: "Misty Mauve Glacier",
      label: "Misty Mauve Glacier",
      location: "url(../fabrics/mistyMauveGlacier.jpg)",
    },
    {
      value: "Moss Glacier",
      label: "Moss Glacier",
      location: "url(../fabrics/mossGlacier.jpg)",
    },
    {
      value: "Navy Glacier",
      label: "Navy Glacier",
      location: "url(../fabrics/navyGlacier.jpg)",
    },
    {
      value: "Pecan Glacier",
      label: "Pecan Glacier",
      location: "url(../fabrics/pecanGlacier.jpg)",
    },
    {
      value: "Plumwine Glacier",
      label: "Plumwine Glacier",
      location: "url(../fabrics/plumWineGlacier.jpg)",
    },
    {
      value: "Cardinal Glacier",
      label: "Cardinal Glacier",
      location: "url(../fabrics/cardinalGlacier.jpg)",
    },
    {
      value: "Royal Glacier",
      label: "Royal Glacier",
      location: "url(../fabrics/royalGlacier.jpg)",
    },
    //Looks kinda ugly, ask alexis
    {
      value: "Silver Glacier",
      label: "Silver Glacier",
      location: "url(../fabrics/silverGlacier.jpg)",
    },
    {
      value: "Simply Taupe Glacier",
      label: "Simply Taupe Glacier",
      location: "url(../fabrics/simplyTaupeGlacier.jpg)",
    },
    {
      value: "White Glacier",
      label: "White Glacier",
      location: "url(../fabrics/snowGlacier.jpg)",
    },
    {
      value: "Woodrose Glacier",
      label: "Woodrose Glacier",
      location: "url(../fabrics/woodroseGlacier.jpg)",
    },
    {
      value: "Baby Blue Hide",
      label: "Baby Blue Hide",
      location: "url(../fabrics/babyBlueHide.jpg)",
    },
    {
      value: "Banana Hide",
      label: "Banana Hide",
      location: "url(../fabrics/bananaHide.jpg)",
    },
    {
      value: "Black Hide",
      label: "Black Hide",
      location: "url(../fabrics/blackHide.jpg)",
    },
    {
      value: "Blush Hide",
      label: "Blush Hide",
      location: "url(../fabrics/blushHide.jpg)",
    },
    {
      value: "Cerise Hide",
      label: "Cerise Hide",
      location: "url(../fabrics/ceriseHide.jpg)",
    },
    {
      value: "Champagne Hide",
      label: "Champagne Hide",
      location: "url(../fabrics/champagneHide.jpg)",
    },
    {
      value: "Chive Hide",
      label: "Chive Hide",
      location: "url(../fabrics/chiveHide.jpg)",
    },
    {
      value: "Chocolate Hide",
      label: "Chocolate Hide",
      location: "url(../fabrics/chocolateHide.jpg)",
    },
    {
      value: "Denim Hide",
      label: "Denim Hide",
      location: "url(../fabrics/jeansHide.jpg)",
    },
    {
      value: "Elderberry Hide",
      label: "Elderberry Hide",
      location: "url(../fabrics/elderberryHide.jpg)",
    },
    {
      value: "Gray Hide",
      label: "Gray Hide",
      location: "url(../fabrics/grayHide.jpg)",
    },
    {
      value: "Ice Mint Hide",
      label: "Ice Mint Hide",
      location: "url(../fabrics/iceHide.jpg)",
    },
    {
      value: "Ivory Hide",
      label: "Ivory Hide",
      location: "url(../fabrics/ivoryHide.jpg)",
    },
    {
      value: "Jeans Hide",
      label: "Jeans Hide",
      location: "url(../fabrics/jeansHide.jpg)",
    },
    {
      value: "Mallard Hide",
      label: "Mallard Hide",
      location: "url(../fabrics/mallardHide.jpg)",
    },
    {
      value: "Merlot Hide",
      label: "Merlot Hide",
      location: "url(../fabrics/merlotHide.jpg)",
    },
    {
      value: "Navy Hide",
      label: "Navy Hide",
      location: "url(../fabrics/navyHide.jpg)",
    },
    {
      value: "Neon Diva Hide",
      label: "Neon Diva Hide",
      location: "url(../fabrics/neondivaHide.jpg)",
    },
    {
      value: "Rosewater Hide",
      label: "Rosewater Hide",
      location: "url(../fabrics/rosewaterHide.jpg)",
    },
    {
      value: "Truffle Hide",
      label: "Truffle Hide",
      locatoin: "url(../fabrics/truffleHide.jpg)",
    },
    {
      value: "White Hide",
      label: "White Hide",
      location: "url(../fabrics/snowHide.jpg)",
    },
    {
      value: "Willow Spruce",
      label: "Willow Spruce",
      location: "url(../fabrics/spruceHide.jpg)",
    },
    {
      value: "Sage Hide",
      label: "Sage Hide",
      location: "url(../fabrics/thymeHide.jpg)",
    },
    {
      value: "Truffle Hide",
      label: "Truffle Hide",
      location: "url(../fabrics/truffleHide.jpg)",
    },
    {
      value: "Woodland Hide",
      label: "Woodland Hide",
      location: "url(../fabrics/woodlandHide.jpg)",
    },
    {
      value: "Woodrose Hide",
      label: "Woodrose Hide",
      location: "url(../fabrics/woodroseHide.jpg)",
    },
    {
      value: "Black Seal",
      label: "Black Seal",
      location: "url(../fabrics/blackSeal.jpg)",
    },
    {
      value: "Ice Pink Seal",
      label: "Ice Pink Seal",
      location: "url(../fabrics/icePinkSeal.jpg)",
    },
    {
      value: "Loganberry Seal",
      label: "Loganberry Seal",
      location: "url(../fabrics/loganberrySeal.jpg)",
    },
    {
      value: "Natural Seal",
      label: "Natural Seal",
      location: "url(../fabrics/naturalSeal.jpg)",
    },
    {
      value: "Snow White Seal",
      label: "Snow White Seal",
      location: "url(../fabrics/snowWhiteSeal.jpg)",
    },
    // {
    //   value: "Limestone Chrome Sorbet",
    //   label: "Limestone Chrome Sorbet",
    //   location: "url(../fabrics/)",
    // },
    {
      value: "Mermaid Sorbet",
      label: "Mermaid Sorbet",
      location: "url(../fabrics/mermaidSorbet.jpg)",
    },
    // {
    //   value: "Navy Tie Dye Sorbet",
    //   label: "Navy Tie Dye Sorbet",
    //   location: "url(../fabrics/)",
    // },
    {
      value: "Pastel Tie Dye Sorbet",
      label: "Pastel Tie Dye Sorbet",
      location: "url(../fabrics/pastelSorbet.jpg)",
    },
    {
      value: "Unicorn Sorbet",
      label: "Unicorn Sorbet",
      location: "url(../fabrics/unicornSorbet.jpg)",
    },
  ];
  // State for nameOutput
  const [nameOutput, setNameOutput] = useState("");

  // State for currently selected font
  const [currentFont, setCurrentFont] = useState(fontList[23]);

  // State for currently selected color
  const [fontColor, setFontColor] = useState(currentColor[10]);
  // State for the static side of the minky blanket
  const [minkyStatic, setMinkyStatic] = useState(currentMinkyStatic[54]);
  // State for cusomizable side of minky blanket
  const [minkyCustom, setMinkyCustom] = useState(currentMinkyCustom[38]);
  // State for visibility of control box
  const [controlsVisible, setControlsVisible] = useState(false);
  // State for the arrow button
  const [buttonText, setButtonText] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      className="bi bi-caret-down-fill"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );

  // Changes font on Select Change
  const handleFontChange = (event) => {
    // Stores event in var
    let selectedFont = event.target.value;
    // Empty var to hold index position
    let fontIndex;

    // Function to find index of selected font
    fontList.filter((font, i) => {
      if (font.value === selectedFont) {
        fontIndex = i;
        return;
      }
    });
    // Sets the current font to the index of selected font

    setCurrentFont(fontList[fontIndex]);
  };

  // Changes nameOutput to inputed value
  const handleNameChange = (event) => {
    // gets inputed value
    let newText = event.target.value;
    // keeps track of inputed name
    let globalText = "";
    // keep all the symbols we dont want outta here
    const regex = /[^a-zA-Z\u002D\u0027]+/gi;

    // Replaces any unwanted text with an empty space
    globalText = newText.replaceAll(regex, " ");
    if (globalText === "") {
      setNameOutput("");
    } else {
      globalText = globalText.replaceAll(" ", "\n");

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
  // Changes currentMinkyStatic
  const handleMinkyStaticChange = (event) => {
    const newMinkyStatic = event.target.value;
    let minkyStaticIndex;

    currentMinkyStatic.filter((style, i) => {
      if (style.value === newMinkyStatic) {
        minkyStaticIndex = i;
      }

      setMinkyStatic(currentMinkyStatic[minkyStaticIndex]);
    });
  };
  // Changes currentMinkyCustom
  const handleMinkyCustomChange = (event) => {
    const newMinkyCustom = event.target.value;

    let minkyCustomIndex;

    currentMinkyCustom.filter((style, i) => {
      if (style.value === newMinkyCustom) {
        minkyCustomIndex = i;
      }

      setMinkyCustom(currentMinkyCustom[minkyCustomIndex]);
    });
  };

  const handleControls = () => {
    if (controlsVisible === true) {
      setTimeout(
        setControlsVisible(false),
        setButtonText(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            className="bi bi-caret-down-fill"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        ),
        30
      );
    } else if (controlsVisible === false) {
      setTimeout(
        setControlsVisible(true),
        setButtonText(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-caret-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        ),
        700
      );
    }
  };

  return (
    <div
      className="split-holder"
      style={{
        backgroundImage: minkyStatic.location,
      }}
    >
      <div
        className="split-right"
        style={{
          backgroundImage: minkyCustom.location,
        }}
      >
        {/* Changes div className to match with font-face css in index.css */}
        <textarea
          rows={3}
          style={{ color: fontColor.color, overflow: "hidden" }}
          wrap="hard"
          className={currentFont.fontClass + " nameOutput"}
          type="text"
          placeholder={"\n" + "Enter Name Here!"}
          value={nameOutput}
          onChange={handleNameChange}
          maxLength={40}
        />
        <style>
          {`
          ::placeholder {
          color:${fontColor.color}
          }`}
        </style>
      </div>
      <MenuToggle
        onClick={handleControls}
        open={controlsVisible}
        className="menuToggler"
      >
        {buttonText}
      </MenuToggle>
      <Controls open={controlsVisible} className="controlBoxStyle">
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <span className="menuBox">
            <span className="menuTopHalf">
              <span className="customOptions">Front Fabric:</span>
              <span
                style={{ width: "50%", caretColor: "transparent" }}
                className="customOptions"
              >
                Embroidered Side:
              </span>
            </span>
            <span className="topControls">
              <select
                value={minkyStatic.value}
                onChange={(e) => handleMinkyStaticChange(e)}
                aria-label="Choose a fabric for your blanket's front side!"
              >
                {currentMinkyStatic.map((minkBack, i) => (
                  <option
                    key={i}
                    defaultValue={currentMinkyStatic[0]}
                    value={minkBack.value}
                    label={minkBack.label}
                  ></option>
                ))}
              </select>
              <select
                value={minkyCustom.value}
                onChange={(e) => handleMinkyCustomChange(e)}
                aria-label="Choose a fabric for your blanket's customizable side!"
              >
                {currentMinkyCustom.map((minkFront, i) => (
                  <option
                    key={i}
                    value={minkFront.value}
                    label={minkFront.label}
                  ></option>
                ))}
              </select>
            </span>
            <span className="menuBottomHalf">
              <span className="customOptions">Font Style:</span>
              <span className="customOptions">Thread Color:</span>
            </span>
            <span className="bottomControls">
              <select
                value={currentFont.value}
                onChange={(e) => handleFontChange(e)}
                aria-label="Choose a font for your blanket's embroidery!"
              >
                {fontList.map((font, i) => (
                  <option
                    key={i}
                    defaultValue={fontList[0]}
                    value={font.value}
                    label={font.label}
                  ></option>
                ))}
              </select>
              <select
                value={fontColor.value}
                onChange={(e) => handleColorChange(e)}
                aria-label="Choose a color for your blanket's thread color!"
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
            <div className="disclaimer">
              {" "}
              * Please note: Sizing and setup of letters is approximate. Colors
              may depend on device. If you have any questions please feel free
              to contact us at shop@boosblankets.com
            </div>
          </span>
        </span>
      </Controls>
    </div>
  );
};

const Controls = Styled.div`
    display: flex;
    background-color: #e9dedc;
    transition: all 500ms ease;
    z-index: 9;
    overflow: hidden;
    width: 50%;
  @media screen and (max-width: 900px) {
    position: absolute;
    height: ${({ open }) => (open ? "0px" : "28vh")};
    width: 100%;
    bottom: 0%;
  }
  `;

// Button to toggle controls
const MenuToggle = Styled.div`
  background-color: Ivory;
  height: 5%;
  width: 11%;
  position: absolute;
  bottom: ${({ open }) => (open ? ".05px" : "28vh")};
  right: 5vw;
  transition: all 500ms ease;
  z-index: 10;
  align-content: stretch;
  font-size: 33px;
  overflow: hidden;
`;
