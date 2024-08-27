import React, { useState } from "react";
import "./Generator.css";
import Styled from "styled-components";

export const Generator = () => {
  // List of fonts Loaded onto the website
  const fontList = [
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
      value: "Cactus",
      label: "Cactus",
      location: "url(../fabrics/cactus.png)",
    },
    {
      value: "Mint Calf",
      label: "Mint Calf",
      location: "url(../fabrics/mintCalf.png)",
    },
    {
      value: "Call of the Wild",
      label: "Call of the Wild",
      location: "url(../fabrics/calloftheWild.png)",
    },
    {
      value: "Latte Checkers",
      label: "Latte Checkers",
      location: "url(../fabrics/latteMushroomCheckers.png)",
    },
    {
      value: "Christmas Trucks",
      label: "Christmas Trucks",
      location: "url(../fabrics/xmasTrucks.png)",
    },
    {
      value: "Fairytale Blush",
      label: "Fairytale Blush",
      location: "url(../fabrics/fairytaleBlush.png)",
    },
    {
      value: "Brown Fawn",
      label: "Brown Fawn",
      location: "url(../fabrics/fawnMinky.png)",
    },
    {
      value: "Lavender Fawn",
      label: "Lavender Fawn",
      location: "url(../fabrics/lavenderFawn.png)",
    },
    {
      value: "Rosewater Fawn",
      label: "Rosewater Fawn",
      location: "url(../fabrics/rosewaterFawn.png)",
    },
    {
      value: "Firefighter",
      label: "Firefighter",
      location: "url(../fabrics/firefighter.png)",
    },
    {
      value: "Gray Galaxy",
      label: "Gray Galaxy",
      location: "url(../fabrics/grayGalaxy.png)",
    },
    {
      value: "Hunter Galaxy",
      label: "Hunter Galaxy",
      location: "url(../fabrics/hunterGalaxy.png)",
    },
    {
      value: "Cedarwood Glacier",
      label: "Cedarwood Glacier",
      location: "url(../fabrics/cedarwoodGlacier.png)",
    },
    {
      value: "Evergreen Glacier",
      label: "Evergreen Glacier",
      location: "url(../fabrics/greenGlacier.png)",
    },
    {
      value: "Jeans Glacier",
      label: "Jeans Glacier",
      location: "url(../fabrics/jeansGlacier.png)",
    },
    {
      value: "Latte Glacier",
      label: "Latte Glacier",
      location: "url(../fabrics/latteGlacier.png)",
    },
    {
      value: "Lavender Glacier",
      label: "Lavender Glacier",
      location: "url(../fabrics/lavenderGlacier.png)",
    },
    {
      value: "Lilac Glacier",
      label: "Lilac Glacier",
      location: "url(../fabrics/lavenderGlacier.png)",
    },
    {
      value: "Navy Glacier",
      label: "Navy Glacier",
      location: "url(../fabrics/navyGlacier.png)",
    },
    {
      value: "Woodrose Glacier",
      label: "Woodrose Glacier",
      location: "url(../fabrics/woodroseGlacier.png)",
    },
    {
      value: "Ice Pink Glacier",
      label: "Ice Pink Glacier",
      location: "url(../fabrics/icePinkGlacier.png)",
    },
    {
      value: "Lavender Heather",
      label: "Lavender Heather",
      location: "url(../fabrics/lavenderHeather.png)",
    },
    {
      value: "Gray Hide",
      label: "Gray Hide",
      location: "url(../fabrics/grayHide.png)",
    },
    {
      value: "Rosewater Hide",
      label: "Rosewater Hide",
      location: "url(../fabrics/rosewaterHide.png)",
    },
    {
      value: "Leopard Blush",
      label: "Leopard Blush",
      location: "url(../fabrics/leopardBlush.png)",
    },
    {
      value: "Leopard Sand",
      label: "Leopard Sand",
      location: "url(../fabrics/leopardSand.png)",
    },
    {
      value: "Lavender Lynx",
      label: "Lavender Lynx",
      location: "url(../fabrics/lavenderLynx.png)",
    },
    {
      value: "Wildrose Lynx",
      label: "Wildrose Lynx",
      location: "url(../fabrics/wildroseLynx.png)",
    },
    {
      value: "Mighty Jungle",
      label: "Mighty Jungle",
      location: "url(../fabrics/mightyJungle.png)",
    },
    {
      value: "Clay Sky Minky",
      label: "Clay Sky Minky",
      location: "url(../fabrics/claySky.png)",
    },
    {
      value: "Mushroom Minky",
      label: "Mushroom Minky",
      location: "url(../fabrics/mushroomMinky.png)",
    },
    {
      value: "Nine Iron",
      label: "Nine Iron",
      location: "url(../fabrics/nineIron.png)",
    },
    {
      value: "Ivory Brown Pony",
      label: "Ivory Brown Pony",
      location: "url(../fabrics/brownPony.png)",
    },
    {
      value: "Brown Sugar Pony",
      label: "Brown Sugar Pony",
      location: "url(../fabrics/brownsugarPony.png)",
    },
    {
      value: "Mud Pie Pony",
      label: "Mud Pie Pony",
      location: "url(../fabrics/mudpiePony.png)",
    },
    {
      value: "Teddy Quartz",
      label: "Teddy Quartz",
      location: "url(../fabrics/teddyQuartz.png)",
    },
    {
      value: "Driftwood Rabbit",
      label: "Driftwood Rabbit",
      location: "url(../fabrics/driftwoodRabbit.png)",
    },
    {
      value: "Sandshell Rabbit",
      label: "Sandshell Rabbit",
      location: "url(../fabrics/sandshellRabbit.png)",
    },
    {
      value: "Rite of Spring",
      label: "Rite of Spring",
      location: "url(../fabrics/riteofSpring.png)",
    },
    {
      value: "Safari Babies",
      label: "Safari Babies",
      location: "url(../fabrics/safariBabies.jpg)",
    },
    {
      value: "Safari Dreams Blue",
      label: "Safari Dreams Blue",
      location: "url(../fabrics/safariDreamsBlue.png)",
    },
    {
      value: "Natural Snow Owl",
      label: "Natural Snow Owl",
      location: "url(../fabrics/naturalSnowOwl.png)",
    },
    {
      value: "Navy Snow Owl",
      label: "Navy Snow Owl",
      location: "url(../fabrics/navySnowOwl.png)",
    },
    {
      value: "Blue Sorbet",
      label: "Blue Sorbet",
      location: "url(../fabrics/blueSorbet.png)",
    },
    {
      value: "Unicorn Sorbet",
      label: "Unicorn Sorbet",
      location: "url(../fabrics/unicornSorbet.png)",
    },
    {
      value: "Blue Tie-Dye",
      label: "Blue Tie-Dye",
      location: "url(../fabrics/blueTieDye.png)",
    },
    {
      value: "Vienna Crystal",
      label: "Vienna Crystal",
      location: "url(../fabrics/viennaCrystal.png)",
    },
    {
      value: "Vienna Plumwine",
      label: "Vienna Plumwine",
      location: "url(../fabrics/viennaPlumwine.png)",
    },
    {
      value: "Vienna Spruce",
      label: "Vienna Spruce",
      location: "url(../fabrics/viennaSpruce.png)",
    },

    //^^ this may be a different color, revisit
  ];
  //List of fabric back colors loaded into the site. Customizable side
  const currentMinkyCustom = [
    {
      value: "Amethyst Dot",
      label: "Amethyst Dot",
      location: "url(../fabrics/amethystDot.png)",
    },
    {
      value: "Aqua Dot",
      label: "Aqua Dot",
      location: "url(../fabrics/aquamarineDot.png)",
    },
    {
      value: "Baby Blue Dot",
      label: "Baby Blue Dot",
      location: "url(../fabrics/babyBlueDot.png)",
    },
    {
      value: "Baby Pink Dot",
      label: "Baby Pink Dot",
      location: "url(../fabrics/babyPinkDot.png",
    },
    {
      value: "Black Dot",
      label: "Black Dot",
      location: "url(../fabrics/blackDot.png)",
    },
    {
      value: "Brown Dot",
      label: "Brown Dot",
      location: "url(../fabrics/brownDot.png)",
    },
    // {
    //   value: "Chocolate Dot",
    //   label: "Chocolate Dot",
    //   location: "url(../fabrics/)",
    // },
    {
      value: "Coral Dot",
      label: "Coral Dot",
      location: "url(../fabrics/coralDot.png)",
    },
    {
      value: "Denim Dot",
      label: "Denim Dot",
      location: "url(../fabrics/denimDot.png)",
    },
    {
      value: "Dusty Rose Dot",
      label: "Dusty Rose Dot",
      location: "url(../fabrics/dustyRoseDot.png)",
    },
    {
      value: "Electric Blue Dot",
      label: "Electric Blue Dot",
      location: "url(../fabrics/electricBlueDot.png)",
    },
    {
      value: "Hot Pink Dot",
      label: "Hot Pink Dot",
      location: "url(../fabrics/fuschiaDot.png)",
    },
    {
      value: "Gold Dot",
      label: "Gold Dot",
      location: "url(../fabrics/goldDot.png)",
    },
    {
      value: "Graphite Dot",
      label: "Graphite Dot",
      location: "url(../fabrics/graphiteDot.png)",
    },
    {
      value: "Hunter Dot",
      label: "Hunter Dot",
      location: "url(../fabrics/hunterDot.png)",
    },
    {
      value: "Ivory Dot",
      label: "Ivory Dot",
      location: "url(../fabrics/ivoryDot.png)",
    },
    {
      value: "Jade Dot",
      label: "Jade Dot",
      location: "url(../fabrics/jadeDot.png)",
    },
    {
      value: "Kelly Green Dot",
      label: "Kelly Green Dot",
      location: "url(../fabrics/kellyGreenDot.png)",
    },
    {
      value: "Latte Dot",
      label: "Latte Dot",
      location: "url(../fabrics/latteDot.png)",
    },
    {
      value: "Lavender Dot",
      label: "Lavender Dot",
      location: "url(../fabrics/lavenderDot.png)",
    },
    {
      value: "Mallard Dot",
      label: "Mallard Dot",
      location: "url(../fabrics/mallardDot.png)",
    },
    {
      value: "Merlot Dot",
      label: "Merlot Dot",
      location: "url(../fabrics/merlotDot.png)",
    },
    {
      value: "Midnight Dot",
      label: "Midnight Dot",
      location: "url(../fabrics/midnightBlueDot.png)",
    },
    {
      value: "Navy Dot",
      label: "Navy Dot",
      location: "url(../fabrics/navyDot.png)",
    },
    {
      value: "Opal Dot",
      label: "Opal Dot",
      location: "url(../fabrics/opalDot.png)",
    },
    {
      value: "Paris Pink Dot",
      label: "Paris Pink Dot",
      location: "url(../fabrics/parisPinkDot.png)",
    },
    {
      value: "Papaya Dot",
      label: "Papaya Dot",
      location: "url(../fabrics/papayaDot.png)",
    },
    // {
    //   value: "Penny Dot",
    //   label: "Penny Dot",
    //   location: "url(../fabrics/)",
    // },
    {
      value: "Purple Dot",
      label: "Purple Dot",
      location: "url(../fabrics/purpleDot.png)",
    },
    {
      value: "Red Dot",
      label: "Red Dot",
      location: "url(../fabrics/redDot.png)",
    },
    {
      value: "Royal Dot",
      label: "Royal Dot",
      location: "url(../fabrics/royalBlueDot.png)",
    },
    {
      value: "Rust Dot",
      label: "Rust Dot",
      location: "url(../fabrics/rustDot.png)",
    },
    {
      value: "Sage Dot",
      label: "Sage Dot",
      location: "url(../fabrics/sageDot.png)",
    },
    {
      value: "Saltwater Dot",
      label: "Saltwater Dot",
      location: "url(../fabrics/saltwaterDot.jpg)",
    },
    {
      value: "Shell Dot",
      label: "Shell Dot",
      location: "url(../fabrics/shellDot.png)",
    },
    {
      value: "Steel Dot",
      label: "Steel Dot",
      location: "url(../fabrics/steelDot.png)",
    },
    {
      value: "Sunshine Dot",
      label: "Sunshine Dot",
      location: "url(../fabrics/sunshineDot.png)",
    },
    {
      value: "Tangerine Dot",
      label: "Tangerine Dot",
      location: "url(../fabrics/tangerineDot.png)",
    },
    // {
    //   value: "Taupe Dot",
    //   label: "Taupe Dot",
    //   location: "url(../fabrics/)",
    // },

    {
      value: "White Dot",
      label: "White Dot",
      location: "url(../fabrics/whiteDot.png)",
    },
    {
      value: "Yellow Dot",
      label: "Yellow Dot",
      location: "url(../fabrics/yellowDot.png)",
    },
    {
      value: "Alloy Glacier",
      label: "Alloy Glacier",
      location: "url(../fabrics/alloyGlacier.png)",
    },
    {
      value: "Aruba Glacier",
      label: "Aruba Glacier",
      location: "url(../fabrics/arubaGlacier.png)",
    },
    {
      value: "Basil Glacier",
      label: "Basil Glacier",
      location: "url(../fabrics/basilGlacier.png)",
    },
    {
      value: "Black Glacier",
      label: "Black Glacier",
      location: "url(../fabrics/blackGlacier.png)",
    },
    {
      value: "Cedarwood Glacier",
      label: "Cedarwood Glacier",
      location: "url(../fabrics/cedarwoodGlacier.png)",
    },
    {
      value: "Chocolate Glacier",
      label: "Chocolate Glacier",
      location: "url(../fabrics/chocolateGlacier.png)",
    },
    {
      value: "Evergreen Glacier",
      label: "Evergreen Glacier",
      location: "url(../fabrics/greenGlacier.png)",
    },
    {
      value: "Ginger Glacier",
      label: "Ginger Glacier",
      location: "url(../fabrics/gingerGlacier.png)",
    },
    {
      value: "Hot Pink Glacier",
      label: "Hot Pink Glacier",
      location: "url(../fabrics/hotPinkGlacier.png)",
    },
    {
      value: "Ice Pink Glacier",
      label: "Ice Pink Glacier",
      location: "url(../fabrics/icePinkGlacier.png)",
    },
    {
      value: "Ink Glacier",
      label: "Ink Glacier",
      location: "url(../fabrics/inkGlacier.png)",
    },
    {
      value: "Ivory Glacier",
      label: "Ivory Glacier",
      location: "url(../fabrics/ivoryGlacier.png)",
    },
    {
      value: "Jeans Glacier",
      label: "Jeans Glacier",
      location: "url(../fabrics/jeansGlacier.png)",
    },
    {
      value: "Latte Glacier",
      label: "Latte Glacier",
      location: "url(../fabrics/latteGlacier.png)",
    },
    {
      value: "Merlot Glacier",
      label: "Merlot Glacier",
      location: "url(../fabrics/merlotGlacier.png)",
    },
    {
      value: "Misty Mauve Glacier",
      label: "Misty Mauve Glacier",
      location: "url(../fabrics/mistyMauveGlacier.png)",
    },
    {
      value: "Moss Glacier",
      label: "Moss Glacier",
      location: "url(../fabrics/mossGlacier.png)",
    },
    {
      value: "Navy Glacier",
      label: "Navy Glacier",
      location: "url(../fabrics/navyGlacier.png)",
    },
    {
      value: "Pecan Glacier",
      label: "Pecan Glacier",
      location: "url(../fabrics/pecanGlacier.png)",
    },
    {
      value: "Plumwine Glacier",
      label: "Plumwine Glacier",
      location: "url(../fabrics/plumWineGlacier.png)",
    },
    {
      value: "Cardinal Glacier",
      label: "Cardinal Glacier",
      location: "url(../fabrics/cardinalGlacier.png)",
    },
    {
      value: "Royal Glacier",
      label: "Royal Glacier",
      location: "url(../fabrics/royalGlacier.png)",
    },
    //Looks kinda ugly, ask alexis
    {
      value: "Silver Glacier",
      label: "Silver Glacier",
      location: "url(../fabrics/silverGlacier.png)",
    },
    {
      value: "Simply Taupe Glacier",
      label: "Simply Taupe Glacier",
      location: "url(../fabrics/simplyTaupeGlacier.png)",
    },
    {
      value: "White Glacier",
      label: "White Glacier",
      location: "url(../fabrics/snowGlacier.png)",
    },
    {
      value: "Woodrose Glacier",
      label: "Woodrose Glacier",
      location: "url(../fabrics/woodroseGlacier.png)",
    },
    {
      value: "Baby Blue Hide",
      label: "Baby Blue Hide",
      location: "url(../fabrics/babyBlueHide.png)",
    },
    {
      value: "Banana Hide",
      label: "Banana Hide",
      location: "url(../fabrics/bananaHide.png)",
    },
    {
      value: "Bellflower Hide",
      label: "Bellflower Hide",
      location: "url(../fabrics/bellflowerHide.png)",
    },
    {
      value: "Black Hide",
      label: "Black Hide",
      location: "url(../fabrics/blackHide.png)",
    },
    {
      value: "Blush Hide",
      label: "Blush Hide",
      location: "url(../fabrics/blushHide.png)",
    },
    {
      value: "Cerise Hide",
      label: "Cerise Hide",
      location: "url(../fabrics/ceriseHide.png)",
    },
    {
      value: "Champagne Hide",
      label: "Champagne Hide",
      location: "url(../fabrics/champagneHide.png)",
    },
    {
      value: "Chive Hide",
      label: "Chive Hide",
      location: "url(../fabrics/chiveHide.png)",
    },
    {
      value: "Elderberry Hide",
      label: "Elderberry Hide",
      location: "url(../fabrics/elderberryHide.png)",
    },
    {
      value: "Gray Hide",
      label: "Gray Hide",
      location: "url(../fabrics/grayHide.png)",
    },
    {
      value: "Ice Mint Hide",
      label: "Ice Mint Hide",
      location: "url(../fabrics/iceHide.png)",
    },
    {
      value: "Ice Pink Hide",
      label: "Ice Pink Hide",
      location: "url(../fabrics/icePinkHide.png)",
    },
    {
      value: "Ivory Hide",
      label: "Ivory Hide",
      location: "url(../fabrics/ivoryHide.png)",
    },
    {
      value: "Jeans Hide",
      label: "Jeans Hide",
      location: "url(../fabrics/jeansHide.png)",
    },
    {
      value: "Mallard Hide",
      label: "Mallard Hide",
      location: "url(../fabrics/mallardHide.png)",
    },
    {
      value: "Merlot Hide",
      label: "Merlot Hide",
      location: "url(../fabrics/merlotHide.png)",
    },
    {
      value: "Navy Hide",
      label: "Navy Hide",
      location: "url(../fabrics/navyHide.png)",
    },
    {
      value: "Rosewater Hide",
      label: "Rosewater Hide",
      location: "url(../fabrics/rosewaterHide.png)",
    },
    {
      value: "White Hide",
      label: "White Hide",
      location: "url(../fabrics/snowHide.png)",
    },
    {
      value: "Spice Hide",
      label: "Spice Hide",
      location: "url(../fabrics/spiceHide.png)",
    },
    {
      value: "Willow Spruce",
      label: "Willow Spruce",
      location: "url(../fabrics/spruceHide.png)",
    },
    {
      value: "Sage Hide",
      label: "Sage Hide",
      location: "url(../fabrics/thymeHide.png)",
    },
    {
      value: "Woodrose Hide",
      label: "Woodrose Hide",
      location: "url(../fabrics/woodroseHide.png)",
    },
    {
      value: "Black Seal",
      label: "Black Seal",
      location: "url(../fabrics/blackSeal.png)",
    },
    {
      value: "Ice Pink Seal",
      label: "Ice Pink Seal",
      location: "url(../fabrics/icePinkSeal.png)",
    },
    {
      value: "Loganberry Seal",
      label: "Loganberry Seal",
      location: "url(../fabrics/loganberrySeal.png)",
    },
    {
      value: "Natural Seal",
      label: "Natural Seal",
      location: "url(../fabrics/naturalSeal.png)",
    },
    {
      value: "Snow White Seal",
      label: "Snow White Seal",
      location: "url(../fabrics/snowWhiteSeal.png)",
    },
    {
      value: "Truffle Seal",
      label: "Truffle Seal",
      location: "url(../fabrics/truffleSeal.png)",
    },
    {
      value: "Blue Sorbet",
      label: "Blue Sorbet",
      location: "url(../fabrics/blueSorbet.png)",
    },
    {
      value: "Coca Mocha Sorbet",
      label: "Coca Mocha Sorbet",
      location: "url(../fabrics/cocaMochaSorbet.png)",
    },
    // {
    //   value: "Limestone Chrome Sorbet",
    //   label: "Limestone Chrome Sorbet",
    //   location: "url(../fabrics/)",
    // },
    {
      value: "Mermaid Sorbet",
      label: "Mermaid Sorbet",
      location: "url(../fabrics/mermaidSorbet.png)",
    },
    {
      value: "Mystic Sorbet",
      label: "Mystic Sorbet",
      location: "url(../fabrics/mysticSorbet.png)",
    },
    // {
    //   value: "Navy Tie Dye Sorbet",
    //   label: "Navy Tie Dye Sorbet",
    //   location: "url(../fabrics/)",
    // },
    {
      value: "Pastel Tie Dye Sorbet",
      label: "Pastel Tie Dye Sorbet",
      location: "url(../fabrics/pastelSorbet.png)",
    },
    {
      value: "Razzle Dazzle Sorbet",
      label: "Razzle Dazzle Sorbet",
      location: "url(../fabrics/razzledazzleSorbet.png)",
    },
    {
      value: "Beige Tie-Dye Rabbit",
      label: "Beige Tie-Dye Rabbit",
      location: "url(../fabrics/tiedyeRabbitBeige.png)",
    },
    {
      value: "Brown Tie-Dye Rabbit",
      label: "Brown Tie-Dye Rabbit",
      location: "url(../fabrics/tiedyeRabbitBrown.png)",
    },
    {
      value: "Unicorn Sorbet",
      label: "Unicorn Sorbet",
      location: "url(../fabrics/unicornSorbet.png)",
    },
  ];
  // State for nameOutput
  const [nameOutput, setNameOutput] = useState("");

  // State for currently selected font
  const [currentFont, setCurrentFont] = useState(fontList[21]);

  // State for currently selected color
  const [fontColor, setFontColor] = useState(currentColor[10]);
  // State for the static side of the minky blanket
  const [minkyStatic, setMinkyStatic] = useState(currentMinkyStatic[39]);
  // State for cusomizable side of minky blanket
  const [minkyCustom, setMinkyCustom] = useState(currentMinkyCustom[40]);
  // State for visibility of control box
  const [controlsVisible, setControlsVisible] = useState(false);
  // State for the arrow button
  const [buttonText, setButtonText] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      class="bi bi-caret-down-fill"
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
            class="bi bi-caret-down-fill"
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
            class="bi bi-caret-up-fill"
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
      <div className="split-left"></div>
      <div
        className="split-right"
        style={{
          backgroundImage: minkyCustom.location,
        }}
      >
        {/* Changes div class to match with font-face css in index.css */}
        <textarea
          rows={3}
          style={{ color: fontColor.color }}
          wrap="hard"
          className={currentFont.fontClass + " nameOutput"}
          type="text"
          placeholder={"\n" + "Enter Name!"}
          value={nameOutput}
          onChange={handleNameChange}
        />
      </div>
      <MenuToggle onClick={handleControls} open={controlsVisible}>
        {buttonText}
      </MenuToggle>
      <Controls open={controlsVisible}>
        <span>
          <span className="menuBox">
            <span
              style={{
                display: "flex",
                width: "100%",
                height: "25%",
                outline: "none",
                textAlign: "left",
              }}
            >
              <span style={{ width: "50%" }} className="customOptions">
                Front fabric:
              </span>
              <span style={{ width: "50%" }} className="customOptions">
                Embroidered Side:
              </span>
            </span>
            <span className="topControls">
              <select
                value={minkyStatic.value}
                onChange={(e) => handleMinkyStaticChange(e)}
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
            <span
              style={{
                display: "flex",
                width: "100%",
                height: "25%",
                outline: "none",
                textAlign: "left",
              }}
            >
              <span style={{ width: "50%" }} className="customOptions">
                Font Style:
              </span>
              <span style={{ width: "50%" }} className="customOptions">
                Thread Color:
              </span>
            </span>
            <span className="bottomControls">
              <select
                value={currentFont.value}
                onChange={(e) => handleFontChange(e)}
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
            {/* <span className="nameControls">
              <p className="withPadding">For:</p>
              <input
                className="font-face-blossom"
                type="text"
                placeholder="Enter Name!"
                onChange={handleNameChange}
              />
            </span> */}
            <div className="disclaimer">
              {" "}
              * Please note: Sizing and setup of letters is approximate. Color
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
  background-color: #e9dedc;
  position: absolute;
  height: ${({ open }) => (open ? "0px" : "28vh")};
  width: 100%;
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
  bottom: ${({ open }) => (open ? ".05px" : "28vh")};
  right: 5vw;
  transition: all 500ms ease;
  z-index: 10;
  align-content: stretch;
  font-size: 33px;
  overflow: hidden;
`;
