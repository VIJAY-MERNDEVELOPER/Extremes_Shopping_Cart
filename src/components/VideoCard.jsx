/* eslint-disable react/prop-types */
import AspectRatio from "@mui/joy/AspectRatio";
import ListItemContent from "@mui/joy/ListItemContent";
import { ListItemButton, Typography } from "@mui/material";
import React from "react";

function VideoCard({ videoData }) {
  return (
    <div
      className="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 col-xxl-3"
      style={{
        maxWidth: "300px",
        maxHeight: "450px",
        marginRight: 20,
      }}
    >
      <video
        srcSet={`${videoData.video}`}
        src={`${videoData.video}`}
        alt={videoData.id}
        width={"100%"}
        height={"100%"}
        preload="auto"
        onPlay={true}
        // autoPlay={true}
        playsInline={true}
        controls={true}
        style={{ borderRadius: "10px", objectFit: "cover" }}
      />
      <ListItemButton
        sx={{
          gap: 2,
          border: "1px solid rgb(216, 216, 216) ",
          borderRadius: "5px",
          paddingLeft: 1,
          marginTop: "8px",
        }}
      >
        <AspectRatio
          ratio={1}
          sx={{
            flexBasis: 100,
            objectFit: "cover",
          }}
        >
          <img
            srcSet={videoData.image}
            src={videoData.image}
            alt="cap"
            // height={"70px"}
          />
        </AspectRatio>
        <ListItemContent>
          <Typography fontWeight={"bold"} fontSize={"15px"}>
            {" "}
            {videoData.description}
          </Typography>
          <Typography level="body-sm" fontSize={"14px"} fontWeight={"bold"}>
            {" "}
            ₹{videoData.price}
          </Typography>
        </ListItemContent>
      </ListItemButton>
    </div>
  );
}

export default VideoCard;
