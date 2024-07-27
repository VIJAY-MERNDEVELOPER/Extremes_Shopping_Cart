/* eslint-disable react/prop-types */
import { Divider } from "@mui/material";
import React from "react";

function CategoryContainer({ categories }) {
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
        SHOP BY CATEGORY
      </Divider>
      <div
        className="row justify-content-center flex-wrap my-3 "
        style={{ padding: 0 }}
      >
        <div
          className="d-flex gap-2 justify-content-between flex-wrap"
          style={{
            overflow: "auto",
            width: "100%",
            scrollbarWidth: "none",
            marginLeft: 0,
          }}
        >
          {" "}
          {categories?.map((category, idx) => {
            return (
              <div key={idx} className="category-card">
                <img src={category.category_banner} alt="" width={"100%"} />
              </div>
            );
          })}
        </div>
      </div>
    
    </>
  );
}

export default CategoryContainer;
