import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./home.css";
import DividerComponent from "../components/DividerComponent";
import LatestReleaseCard from "../components/LatestReleaseCard";
import { Box, Card, Divider, ListItemButton, Typography } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import ListItemContent from "@mui/joy/ListItemContent";
import VideoCard from "../components/VideoCard";

function Home() {
  const [products, setProducts] = useState();
  const [latest, setLatest] = useState();
  const [categories, setCategories] = useState();
  const [instaVideos, setInstaVideos] = useState();

  const fetchProductData = async () => {
    try {
      const res = await axios.get("/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        await setProducts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLatestRelease = async () => {
    try {
      const res = await axios.get("/latest_releases", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        setLatest(res.data);
        console.log(latest);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideos = async () => {
    try {
      const res = await axios.get("/insta_videos", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        setInstaVideos(res.data);
        console.log(instaVideos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategory = async () => {
    try {
      const res = await axios.get("/categories", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        setCategories(res.data);
        console.log(categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductData();
    fetchLatestRelease();
    fetchVideos();
    fetchCategory();
  }, []);
  return (
    <div className="home-container">
      <Header />
      <div className="row justify-content-center main-layout">
        <DividerComponent content={"LATEST RELEASES"} />
        <div className="row justify-content-center flex-nowrap my-3 category-section ">
          <div
            className="d-flex gap-2 category-scroll"
            style={{
              overflow: "auto",
              width: "100%",
              marginLeft: 0,
              scrollbarWidth: "none",
            }}
          >
            {" "}
            {latest?.map((latest, idx) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 " key={idx}>
                  {" "}
                  <LatestReleaseCard latest={latest} />{" "}
                </div>
              );
            })}
          </div>
        </div>
        <picture className="d-flex justify-content-center my-5  banner-container">
          <source
            media="(min-width: 1024px)"
            srcSet="https://culture-kings-us.imgix.net/files/270624_GraphicTees_2024_JUN_site_promobanner_d_b4d2158f-90be-431e-ab05-ad647e8640f5_1440x.jpg?v=1721266088&auto=compress,format"
          />
          <source
            media="(max-width: 768px)"
            srcSet="https://culture-kings-us.imgix.net/files/270624_GraphicTees_2024_JUN_site_promobanner_m_80048197-de6e-405c-978f-77e99c5b23fa_800x.jpg?v=1721266092&auto=compress,format"
            width={"100%"}
          />

          <img
            src="https://culture-kings-us.imgix.net/files/270624_GraphicTees_2024_JUN_site_promobanner_d_b4d2158f-90be-431e-ab05-ad647e8640f5_1440x.jpg?v=1721266088&auto=compress,format"
            alt="Banner"
            width={"100%"}
            className=" banner"
          />
        </picture>
        <DividerComponent content={"LATEST RELEASES"} />
        <div className="row justify-content-center flex-nowrap my-3 ">
          <div
            className="d-flex gap-3 category-scroll"
            style={{
              overflow: "auto",
              width: "100%",
              scrollbarWidth: "none",
              marginLeft: 0,
            }}
          >
            {" "}
            {products?.map((product, idx) => {
              return (
                <div
                  className="col-8 col-sm-3  col-md-4 col-lg-3 col-xl-3 col-xxl-2  "
                  key={idx}
                >
                  <ProductCard key={idx} product={product} />
                </div>
              );
            })}
          </div>
        </div>
        <DividerComponent content={"SHOP BY CATEGORY"} />{" "}
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
        <div className="row justify-content-center mt-5 mb-3">
          <button className="shop-new-releases-btn">SHOP NEW RELEASES</button>
        </div>
        <Divider
          sx={{
            width: "100%",
            fontSize: "23px",
            fontWeight: "bolder",
            color: "rgb(255,0,0)",
          }}
        >
          NOW TRENDING
        </Divider>
        <div className="row justify-content-center my-3  " >
          <div className="d-flex category-scroll  video-card">
            {" "}
            {instaVideos?.map((videos, idx) => {
              return <VideoCard key={idx} videoData={videos} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
