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
      label: "Almond Butter font",
    },
    {
      fontName: "Amazingly beautiful",
      fontClass: "font-face-Amazingly",
      value: "Amazingly beautiful",
      label: "Amazingly Beautiful font",
    },
    {
      fontName: "Andrea",
      fontClass: "font-face-Andrea",
      value: "Andrea",
      label: "Andrea font",
    },
    {
      fontName: "Aurora",
      fontClass: "font-face-aurora",
      value: "Aurora",
      label: "Aurora font",
    },
    {
      fontName: "Autery",
      fontClass: "font-face-Autery",
      value: "Autery",
      label: "Autery font",
    },
    {
      fontName: "Baby Point",
      fontClass: "font-face-Babypoint",
      value: "Babypoint",
      label: "Baby Point font",
    },
    {
      fontName: "Baked Fresh",
      fontClass: "font-face-Bakedfresh",
      value: "Bakedfresh",
      label: "Baked Fresh font",
    },
    {
      fontName: "Blossom",
      fontClass: "font-face-blossom",
      value: "Blossom",
      label: "Blossom font",
    },
    {
      fontName: "Boho Flowers",
      fontClass: "font-face-BohoFlowers",
      value: "BohoFlowers",
      label: "BohoFlowers font",
    },
    {
      fontName: "Chakra",
      fontClass: "font-face-Chakra",
      value: "Chakra",
      label: "Chakra font",
    },
    {
      fontName: "Chalk",
      fontClass: "font-face-Chalk",
      value: "Chalk",
      label: "Chalk font",
    },
    {
      fontName: "Classico",
      fontClass: "font-face-classico",
      value: "classico",
      label: "Classico font",
    },
    {
      fontName: "Clocks",
      fontClass: "font-face-Clocks",
      value: "Clocks",
      label: "Clocks font",
    },
    {
      fontName: "Cookie",
      fontClass: "font-face-Cookie",
      value: "Cookie",
      label: "Cookie font",
    },
    {
      fontName: "Doodle",
      fontClass: "font-face-Doodle",
      value: "Doodle",
      label: "Doodle font",
    },
    {
      fontName: "Eduarda",
      fontClass: "font-face-Eduarda",
      value: "Eduarda",
      label: "Eduarda font",
    },
    {
      fontName: "Ghisella",
      fontClass: "font-face-Ghisella",
      value: "Ghisella",
      label: "Ghisella font",
    },
    {
      fontName: "Hancock",
      fontClass: "font-face-Hancock",
      value: "Hancock",
      label: "Hancock font",
    },
    {
      fontName: "Harpsichord",
      fontClass: "font-face-Harpsichord",
      value: "Harpsichord",
      label: "Harpsichord font",
    },
    {
      fontName: "Langrish",
      fontClass: "font-face-Langrish",
      value: "Langrish",
      label: "Langrish font",
    },
    {
      fontName: "Layla",
      fontClass: "font-face-Layla",
      value: "Layla",
      label: "Layla font",
    },
    {
      fontName: "Lively",
      fontClass: "font-face-Lively",
      value: "Lively",
      label: "Lively font",
    },
    {
      fontName: "Sweetheart",
      fontClass: "font-face-Sweetheart",
      value: "Sweetheart",
      label: "Sweetheart font",
    },
    {
      fontName: "Tatertot",
      fontClass: "font-face-Tatertot",
      value: "Tatertot",
      label: "Tatertot font",
    },
    {
      fontName: "Violetta",
      fontClass: "font-face-Violetta",
      value: "Violetta",
      label: "Violetta font",
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
  // List of fabric front colors loaded into the site. Non-Customizable Side
  const currentMinkyFront = [
    // {
    // value: ,
    // label: ,
    // location: ,
    // },
    {
      value: "Safari Babies",
      label: "Safari Babies",
      location: "url(../fabrics/safariBabies.jpg)",
    },
    {
      value: "Brown Sugar Pony",
      label: "Brown Sugar Pony",
      location:
        "url(https://cdn.discordapp.com/attachments/767464080553672744/1275493332780453908/image.png?ex=66c6173c&is=66c4c5bc&hm=34bddb6e042784f160429a59a17ca27d8ad99595a38ac16b44dcbafaf10c8f77&)",
    },
    {
      value: "Wildrose Lynx",
      label: "Wildrose Lynx",
      location: "url(../fabrics/wildroseLynx.png)",
    },
    {
      value: "Ivory/Brown Pony",
      label: "Ivory/Brown Pony",
      location: "",
    },
    {
      value: "Vienna Crystal",
      label: "Vienna Crystal",
      location: "url(../fabrics/viennaCrystal.png)",
    },
    {
      value: "Mushroom Minky",
      label: "Mushroom Minky",
      location: "url(../fabrics/mushroomMinky.png)",
    },
    {
      value: "Lavender Glacier",
      label: "Lavender Glacier",
      location: "url(../fabrics/lavenderGlacier.png)",
    },
    {
      value: "Rosewater Hide",
      label: "Rosewater Hide",
      location: "url(../fabrics/rosewaterHide.png)",
    },
    {
      value: "Fawn Minky",
      label: "Fawn Minky",
      location: "url(../fabrics/fawnMinky.png)",
    },
    {
      value: "Latte Glacier",
      label: "Latte Glacier",
      location: "url(../fabrics/latteGlacier.png)",
    },
    {
      value: "Blue Tie-Dye",
      label: "Blue Tie-Dye",
      location: "url(../fabrics/blueTieDye.png)",
    },
    {
      value: "Rite of Spring",
      label: "Rite of Spring",
      location: "url(../fabrics/riteofSpring.png)",
    },
    {
      value: "Green Glacier",
      label: "Green Glacier",
      location: "url(../fabrics/greenGlacier.png)",
    },
    {
      value: "Gray Galaxy",
      label: "Gray Galaxy",
      location: "url(../fabrics/grayGalaxy.png)",
    },
    {
      value: "Jeans Glacier",
      label: "Jeans Glacier",
      location: "url(../fabrics/jeansGlacier.png)",
    },
    {
      value: "Lilac Glacier",
      label: "Lilac Glacier",
      location: "url(../fabrics/lavenderGlacier.png)",
    },
    //maybe wrong color again
    {
      value: "Gray Hide",
      label: "Gray Hide",
      location: "url(../fabrics/grayHide.png)",
    },
    {
      value: "Clay Sky Minky",
      label: "Clay Sky Minky",
      location: "url(../fabrics/claySky.png)",
    },
    {
      value: "Woodrose Glacier",
      label: "Woodrose Glacier",
      location: "url(../fabrics/woodroseGlacier.png)",
    },
    {
      value: "Blue Sorbet",
      label: "Blue Sorbet",
      location: "url(../fabrics/blueSorbet.png)",
    },
    {
      value: "Teddy Quartz",
      label: "Teddy Quartz",
      location: "url(../fabrics/teddyQuartz.png)",
    },
    {
      value: "Vienna Spruce",
      label: "Vienna Spruce",
      location: "url(../fabrics/viennaSpruce.png)",
    },
    {
      value: "Latte Glacier",
      label: "Latte Glacier",
      location: "url(../fabrics/latteGlacier.png)",
    },
    {
      value: "Buffalo Check",
      label: "Buffalo Check",
      location: "url(../fabrics/buffaloCheck.png)",
    },
    {
      value: "",
      label: "",
      location: "url(../fabrics/.png)",
    },
    //^^ this may be a different color, revisit
    // {
    //   value: "Beige Fawn",
    //   label: "Beige Fawn",
    //   location: "",
    // },
    // {
    //   value: "Cappuccino Fawn",
    //   label: "Cappuccino Fawn",
    //   location: "",
    // },
    // {
    //   value: "Ginger Fawn",
    //   label: "Ginger Fawn",
    //   location: "",
    // },
    // {
    //   value: "Laverder Fawn",
    //   label: "Laverder Fawn",
    //   location: "",
    // },
    // {
    //   value: "Rosewater Fawn",
    //   label: "Rosewater Fawn",
    //   location: "",
    // },
    // {
    //   value: "Silver Fawn",
    //   label: "Silver Fawn",
    //   location: "",
    // },
    // {
    //   value: "Bessie Calf",
    //   label: "Bessie Calf",
    //   location: "",
    // },
    // {
    //   value: "Brownie Calf",
    //   label: "Brownie Calf",
    //   location: "",
    // },
    // {
    //   value: "Clararose Calf",
    //   label: "Clararose Calf",
    //   location: "",
    // },
    // {
    //   value: "Mint Calf",
    //   label: "Mint Calf",
    //   location: "",
    // },
    // {
    //   value: "Penny Calf",
    //   label: "Penny Calf",
    //   location: "",
    // },
    // {
    //   value: "Super Plum Calf",
    //   label: "Super Plum Calf",
    //   location: "",
    // },
    // {
    //   value: "Tinsel Calf",
    //   label: "Tinsel Calf",
    //   location: "",
    // },
    // {
    //   value: "Blossom Galaxy",
    //   label: "Blossom Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Blush Galaxy",
    //   label: "Blush Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Camo Galaxy",
    //   label: "Camo Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Cloud Galaxy",
    //   label: "Cloud Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Creme Galaxy",
    //   label: "Creme Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Evergreen Galaxy",
    //   label: "Evergreen Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Grape Jam Galaxy",
    //   label: "Grape Jam Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Heather Rose Galaxy",
    //   label: "Heather Rose Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Jeans Galaxy",
    //   label: "Jeans Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Mallard Galaxy",
    //   label: "Mallard Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Saltwater Galaxy",
    //   label: "Saltwater Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Smoke Galaxy",
    //   label: "Smoke Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Storm Galaxy",
    //   label: "Storm Galaxy",
    //   location: "",
    // },
    // {
    //   value: "Angora Lavender",
    //   label: "Angora Lavender",
    //   location: "",
    // },
    // {
    //   value: "Angora Rosewater",
    //   label: "Angora Rosewater",
    //   location: "",
    // },
    // {
    //   value: "Biscotti Ocelot",
    //   label: "Biscotti Ocelot",
    //   location: "",
    // },
    // {
    //   value: "Boa Ginger",
    //   label: "Boa Ginger",
    //   location: "",
    // },
    // {
    //   value: "Bobcat Gray",
    //   label: "Bobcat Gray",
    //   location: "",
    // },
    // {
    //   value: "Chettah Taupe",
    //   label: "Chettah Taupe",
    //   location: "",
    // },
    // {
    //   value: "Fancy Leopard Grey",
    //   label: "Fancy Leopard Grey",
    //   location: "",
    // },
    // {
    //   value: "Frostlynx Natural",
    //   label: "Frostlynx Natural",
    //   location: "",
    // },
    // {
    //   value: "Hawke Basil",
    //   label: "Hawke Basil",
    //   location: "",
    // },
    // {
    //   value: "Black Leopard",
    //   label: "Black Leopard",
    //   location: "",
    // },
    // {
    //   value: "Blush Leopard",
    //   label: "Blush Leopard",
    //   location: "",
    // },
    // {
    //   value: "Sand Leopard",
    //   label: "Sand Leopard",
    //   location: "",
    // },
    // {
    //   value: "Seal Tiger Copper",
    //   label: "Seal Tiger Copper",
    //   location: "",
    // },
    // {
    //   value: "White Snow Leopard",
    //   label: "White Snow Leopard",
    //   location: "",
    // },
    // {
    //   value: "Natural Snow Owl",
    //   label: "Natural Snow Owl",
    //   location: "",
    // },
    // {
    //   value: "Snowy Owl",
    //   label: "Snowy Owl",
    //   location: "",
    // },
    // {
    //   value: "Snowy Owl Rosewater",
    //   label: "Snowy Owl Rosewater",
    //   location: "",
    // },
    // {
    //   value: "Wild Cat Chrome",
    //   label: "Wild Cat Chrome",
    //   location: "",
    // },
    // {
    //   value: "Wild Lynx Ice Taupe",
    //   label: "Wild Lynx Ice Taupe",
    //   location: "",
    // },
    // {
    //   value: "Wild Lynx Ice Lavender",
    //   label: "Wild Lynx Ice Lavender",
    //   location: "",
    // },
    // {
    //   value: "Jaguar Vapor",
    //   label: "Jaguar Vapor",
    //   location: "",
    // },
    // {
    //   value: "Artichoke Wild Rabbit",
    //   label: "Artichoke Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Auburn Wild Rabbit",
    //   label: "Auburn Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Chrome Wild Rabbit",
    //   label: "Chrome Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Driftwood Wild Rabbit",
    //   label: "Driftwood Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Icy Morn Wild Rabbit",
    //   label: "Icy Morn Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Nine Iron Wild Rabbit",
    //   label: "Nine Iron Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Outerspace Wild Rabbit",
    //   label: "Outerspace Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Sandshell Wild Rabbit",
    //   label: "Sandshell Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Natural Wild Rabbit",
    //   label: "Natural Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Silver Lining Wild Rabbit",
    //   label: "Silver Lining Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Walnut Wild Rabbit",
    //   label: "Walnut Wild Rabbit",
    //   location: "",
    // },
    // {
    //   value: "Chocolate Alpine",
    //   label: "Chocolate Alpine",
    //   location: "",
    // },
    // {
    //   value: "Night Alpine",
    //   label: "Night Alpine",
    //   location: "",
    // },
    // {
    //   value: "Pecan Alpine",
    //   label: "Pecan Alpine",
    //   location: "",
    // },
    // {
    //   value: "Sepia Alpine",
    //   label: "Sepia Alpine",
    //   location: "",
    // },
    // {
    //   value: "Black Seal",
    //   label: "Black Seal",
    //   location: "",
    // },
    // {
    //   value: "Evergreen Seal",
    //   label: "Evergreen Seal",
    //   location: "",
    // },
    // {
    //   value: "Green Tea Seal",
    //   label: "Green Tea Seal",
    //   location: "",
    // },
    // {
    //   value: "Ice Pink Seal",
    //   label: "Ice Pink Seal",
    //   location: "",
    // },
    // {
    //   value: "Loganberry Seal",
    //   label: "Loganberry Seal",
    //   location: "",
    // },
    // {
    //   value: "Natural Seal",
    //   label: "Natural Seal",
    //   location: "",
    // },
    // {
    //   value: "Snow White Seal",
    //   label: "Snow White Seal",
    //   location: "",
    // },
    // {
    //   value: "Truffle Seal",
    //   label: "Truffle Seal",
    //   location: "",
    // },
    // {
    //   value: "Atlantis Sorbet",
    //   label: "Atlantis Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Blue Print Sorbet",
    //   label: "Blue Print Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Coca Mocha Sorbet",
    //   label: "Coca Mocha Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Limestone Chrome Sorbet",
    //   label: "Limestone Chrome Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Mermaid Sorbet",
    //   label: "Mermaid Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Mystic Sorbet",
    //   label: "Mystic Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Navy Tie Dye Sorbet",
    //   label: "Navy Tie Dye Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Pastel Tie Dye Sorbet",
    //   label: "Pastel Tie Dye Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Razzle Dazzle Sorbet",
    //   label: "Razzle Dazzle Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Tie Dye Rabbit Beige Sorbet",
    //   label: "Tie Dye Rabbit Beige Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Tie Dye Rabbit Brown Sorbet",
    //   label: "Tie Dye Rabbit Brown Sorbet",
    //   location: "",
    // },
    // {
    //   value: "Unicorn Sorbet",
    //   label: "Unicorn Sorbet",
    //   location: "",
    // },
  ];
  //List of fabric back colors loaded into the site. Customizable side
  const currentMinkyBack = [
    {
      value: "Amethyst Dot",
      label: "Amethyst Dot",
      location: "url(../fabrics/amethystDot.png)",
    },
    {
      value: "Aquamarine Dot",
      label: "Aquamarine Dot",
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
    {
      value: "Camel Dot",
      label: "Camel Dot",
      location: "url(../fabrics/camelDot.png)",
    },
    {
      value: "Chocolate Dot",
      label: "Chocolate Dot",
      location: "url(../fabrics/)",
    },
    {
      value: "Coral Dot",
      label: "Coral Dot",
      location: "url(../fabrics/coralDot.png)",
    },
    {
      value: "Coral Reef Dot",
      label: "Coral Reef Dot",
      location: "url(../fabrics/)",
    },
    {
      value: "Dark Turquoiose Dot",
      label: "Dark Turquoiose Dot",
      location: "url(../fabrics/)",
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
      value: "Emerald Dot",
      label: "Emerald Dot",
      location: "url(../fabrics/)",
    },
    {
      value: "Fuschia Dot",
      label: "Fuschia Dot",
      location: "url(../fabrics/FuschiaDot.png)",
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
      value: "Lilac Dot",
      label: "Lilac Dot",
      location: "url(../fabrics/lilacDot.png)",
    },
    {
      value: "Mallard Dot",
      label: "Mallard Dot",
      location: "url(../fabrics/mallardDot.png)",
    },
    {
      value: "Mango Dot",
      label: "Mango Dot",
      location: "url(../fabrics/mangoDot.png)",
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
      value: "Natural Dot",
      label: "Natural Dot",
      location: "url(../fabrics/naturalDot.png)",
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
    {
      value: "Penny Dot",
      label: "Penny Dot",
      location: "url(../fabrics/)",
    },
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
      value: "Satlwater Dot",
      label: "Saltwater Dot",
      location: "url(../fabrics/saltwaterDot.jpg)",
    },
    {
      value: "Shell Dot",
      label: "Shell Dot",
      location: "url(../fabrics/shellDot.png)",
    },
    {
      value: "Sky Dot",
      label: "Sky Dot",
      location: "url(../fabrics/skyDot.png)",
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
    {
      value: "Taupe Dot",
      label: "Taupe Dot",
      location: "url(../fabrics/)",
    },
    {
      value: "Turquoise Dot",
      label: "Turquoise Dot",
      location: "url(../fabrics/turquoiseDot.png)",
    },
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
      location: "url(../fabrics/evergreenGlacier.png)",
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
      value: "Ice Glacier",
      label: "Ice Glacier",
      location: "url(../fabrics/)",
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
      value: "Mauve glow Glacier",
      label: "Mauve glow Glacier",
      location: "url(../fabrics/)",
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
      location: "url(../fabrics/mossGlaicer.png)",
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
      value: "Red Glacier",
      label: "Red Glacier",
      location: "url(../fabrics/redGlacier.png)",
    },
    {
      value: "Royal Glacier",
      label: "Royal Glacier",
      location: "url(../fabrics/royalGlacier.png)",
    },
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
      value: "Snow Glacier",
      label: "Snow Glacier",
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
      value: "Berry Hide",
      label: "Berry Hide",
      location: "url(../fabrics/berryHide.png)",
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
      value: "Cardinal Hide",
      label: "Cardinal Hide",
      location: "url(../fabrics/cardinalHide.png)",
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
      value: "Chestnut Hide",
      label: "Chestnut Hide",
      location: "url(../fabrics/chestnutHide.png)",
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
      value: "Frosted Spearmint Hide",
      label: "Frosted Spearmint Hide",
      location: "url(../fabrics/spearmingHide.png)",
    },
    {
      value: "Gray Hide",
      label: "Gray Hide",
      location: "url(../fabrics/)",
    },
    {
      value: "Ice Hide",
      label: "Ice Hide",
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
      value: "Sea Glass Hide",
      label: "Sea Glass Hide",
      location: "url(../fabrics/seaGlassHide.png)",
    },
    {
      value: "Snow Hide",
      label: "Snow Hide",
      location: "url(../fabrics/snowHide.png)",
    },
    {
      value: "Spice Hide",
      label: "Spice Hide",
      location: "url(../fabrics/spiceHide.png)",
    },
    {
      value: "Spruce Hide",
      label: "Spruce Hide",
      location: "url(../fabrics/spruceHide.png)",
    },
    {
      value: "Stone Hide",
      label: "Stone Hide",
      location: "url(../fabrics/stoneHide.png)",
    },
    {
      value: "Thyme Hide",
      label: "Thyme Hide",
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
      value: "Evergreen Seal",
      label: "Evergreen Seal",
      location: "url(../fabrics/)",
    },
    {
      value: "Green Tea Seal",
      label: "Green Tea Seal",
      location: "url(../fabrics/)",
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
      value: "Atlantis Sorbet",
      label: "Atlantis Sorbet",
      location: "url(../fabrics/atlantisSorbet.png)",
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
    {
      value: "Limestone Chrome Sorbet",
      label: "Limestone Chrome Sorbet",
      location: "url(../fabrics/)",
    },
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
    {
      value: "Navy Tie Dye Sorbet",
      label: "Navy Tie Dye Sorbet",
      location: "url(../fabrics/)",
    },
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
      value: "Tie-Dye Rabbit Beige",
      label: "Tie-Dye Rabbit Beige",
      location: "url(../fabrics/tiedyeRabbitBeige.png)",
    },
    {
      value: "Tie-Dye Rabbit Brown",
      label: "Tie-Dye Rabbit Brown",
      location: "url(../fabrics/tiedyeRabbitBrown.png)",
    },
    {
      value: "Unicorn Sorbet",
      label: "Unicorn Sorbet",
      location: "url(../fabrics/unicornSorbet.png)",
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

  const [minkyBack, setMinkyBack] = useState(currentMinkyFront[0]);

  const [minkyFront, setMinkyFront] = useState(currentMinkyBack[0]);

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
  // Changes currentMinkyFront
  const handleMinkyBackChange = (event) => {
    const newMinkyBack = event.target.value;

    let minkyBackIndex;

    currentMinkyFront.filter((style, i) => {
      if (style.value === newMinkyBack) {
        minkyBackIndex = i;
      }

      setMinkyBack(currentMinkyFront[minkyBackIndex]);
    });
  };
  const handleMinkyFrontChange = (event) => {
    const newMinkyFront = event.target.value;

    let minkyFrontIndex;

    currentMinkyBack.filter((style, i) => {
      if (style.value === newMinkyFront) {
        minkyFrontIndex = i;
      }

      setMinkyFront(currentMinkyBack[minkyFrontIndex]);
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
          <span className="menuBox">
            <span className="topControls">
              <select
                value={minkyBack.value}
                onChange={(e) => handleMinkyBackChange(e)}
              >
                {currentMinkyFront.map((minkBack, i) => (
                  <option
                    key={i}
                    defaultValue={currentMinkyFront[0]}
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
                {currentMinkyBack.map((minkFront, i) => (
                  <option
                    key={i}
                    defaultValue={currentMinkyBack[0]}
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
              <p className="withPadding">For:</p>
              <input
                className="font-face-blossom"
                type="text"
                placeholder="Enter Name!"
                onChange={handleNameChange}
              />
            </span>
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
