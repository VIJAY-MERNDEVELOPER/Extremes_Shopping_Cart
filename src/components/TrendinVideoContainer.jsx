/* eslint-disable react/prop-types */
import { Divider } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";

function TrendinVideoContainer({ instaVideos }) {
  return (
    <>
      {" "}
      <Divider
        sx={{
          width: "99%",
          fontSize: "23px",
          fontWeight: "bolder",
          color: "rgb(255,0,0)",
          justifyContent: "center",
          margin: "20px 0 ",
        }}
      >
        NOW TRENDING
      </Divider>
      <div className="row justify-content-center my-3  ">
        <div className="d-flex  video-container" style={{ paddingLeft: 0 }}>
          {" "}
          {instaVideos?.map((videos, idx) => {
            return <VideoCard key={idx} videoData={videos} />;
          })}
        </div>
      </div>
    </>
  );
}

export default TrendinVideoContainer;
