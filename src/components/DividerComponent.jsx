/* eslint-disable react/prop-types */
import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./styles/dividercomponent.css";

function DividerComponent({
  content,
  handleScroll,
  scrollPosition,
  isAtEnd,
  clientWidth,
}) {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"space-evenly"}
      flexWrap={"nowrap"}
      marginTop={"30px"}
      className="fluid-layout"
      direction={"row"}
    >
      <Divider
        sx={{
          width: "93%",
          fontSize: "23px",
          fontWeight: "bolder",
          color: "rgb(255,0,0)",
        }}
      >
        {content}
      </Divider>
      <span className="arrow-direction">
        <button
          disabled={scrollPosition === 0}
          type="button"
          className="arrow-btn left-btn"
          onClick={() => handleScroll(-(clientWidth || 315 * 4))}
        >
          {" "}
          <KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />{" "}
        </button>
        <button
          disabled={isAtEnd}
          type="button"
          className="arrow-btn right-btn"
          onClick={() => handleScroll(clientWidth || 315 * 4)}
          style={{ border: "none", background: "none" }}
        >
          {" "}
          <KeyboardArrowRightIcon sx={{ fontSize: 40 }} />
        </button>
      </span>
    </Stack>
  );
}

export default DividerComponent;
