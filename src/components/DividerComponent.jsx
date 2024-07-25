/* eslint-disable react/prop-types */
import { Divider, Stack } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./styles/dividercomponent.css";

function DividerComponent({ content }) {
  return (
    <Stack
      alignItems={"start"}
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
        <KeyboardArrowLeftIcon sx={{ fontSize: 30 }} />{" "}
        <KeyboardArrowRightIcon sx={{ fontSize: 30 }} />
      </span>
    </Stack>
  );
}

export default DividerComponent;
