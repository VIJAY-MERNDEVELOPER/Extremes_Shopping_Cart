/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";

import { Stack } from "@mui/material";
import DividerComponent from "./DividerComponent";
import { useEffect, useRef, useState } from "react";

function LatestReleaseCard({ latest }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Update scroll position
      setScrollPosition(containerRef.current.scrollLeft + scrollAmount);

      // Check if at the end
      setTimeout(() => {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        console.log("left+width", Math.round(scrollLeft + clientWidth));
        console.log("scrollwidth", scrollWidth);
        setIsAtEnd(Math.round(scrollLeft + clientWidth) === scrollWidth);
        console.log(isAtEnd);
      }, 300); // Adjust delay as needed
    }

    // console.log(categoryContainer.classList);
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setScrollPosition(scrollLeft);
      const endWidth = Math.round(scrollLeft + clientWidth);
      setIsAtEnd(endWidth === scrollWidth || endWidth + 1 === scrollWidth);
      console.log("left+width", Math.round(scrollLeft + clientWidth));
      console.log("scrollwidth", scrollWidth);
    };
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <DividerComponent
        isAtEnd={isAtEnd}
        content={"LATEST RELEASES"}
        handleScroll={handleScroll}
        scrollPosition={scrollPosition}
      />
      <div className="row justify-content-center flex-nowrap my-3  ">
        <div
          ref={containerRef}
          className="d-flex gap-2 latest-container"
          style={{
            overflow: "auto",
            width: "100%",
            marginLeft: 0,
            paddingLeft: 0,
            scrollbarWidth: "none",
          }}
        >
          {" "}
          {latest?.map((latest, idx) => {
            return (
              <div className="col-12 col-md-4 col-lg-3 " key={idx}>
                <Card
                  sx={{
                    maxWidth: 450,
                    border: "0 none",
                    boxShadow: "none",
                    margin: 0,
                    padding: 0,
                  }}
                  className="card"
                >
                  <Stack justifyContent={"center"}>
                    {" "}
                    <img
                      src={latest.latest_banner}
                      alt={latest.latest_name}
                      width={"100%"}
                      className="card-img"
                    />
                  </Stack>
                </Card>{" "}
                {/* <LatestReleaseCard latest={latest} />{" "} */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LatestReleaseCard;
