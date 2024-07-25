import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { bgcolor } from "@mui/system";

function Header() {
  const [index, setIndex] = useState(0);

  const carousel_content = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit--1",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit--2",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit--3",
  ];

  setTimeout(() => {
    if (index <= carousel_content.length - 1) {
      setIndex(index + 1);
    } else if (index === carousel_content.length) {
      setIndex(index - carousel_content.length);
    }
  }, 2000);

  return (
    <>
      <Stack
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        style={{ backgroundColor: "white", height: 60 }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"space-around"}
          alignItems={"center"}
          fontWeight={"bold"}
          color={"rgb(255,0,0)"}
        >
          <span>{carousel_content[index]}</span>
        </Stack>{" "}
      </Stack>{" "}
      <picture>
        <source media="(min-width: 1024px)" srcSet="/image-1721903148001.jpg" />
        <source media="(min-width: 768px)" srcSet="/image-1721903148001.jpg" />
        <img src="/image-1721903148001.jpg" alt="" width={"100%"} />
      </picture>{" "}
    </>
  );
}

export default Header;
