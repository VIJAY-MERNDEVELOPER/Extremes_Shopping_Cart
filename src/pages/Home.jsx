/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import LatestReleaseCard from "../components/LatestReleaseCard";
import "./home.css";
import LatestReleasesProducts from "../components/LatestReleasesProducts";
import CategoryContainer from "../components/CategoryContainer";
import TrendinVideoContainer from "../components/TrendinVideoContainer";
import { CircularProgress } from "@mui/material";
import {
  fetchCategory,
  fetchLatestRelease,
  fetchProductData,
  fetchVideos,
} from "../api/apiFetch";

function Home({ products, setProducts }) {
  // const [products, setProducts] = useState();
  const [latest, setLatest] = useState();
  const [categories, setCategories] = useState();
  const [instaVideos, setInstaVideos] = useState();

  // const fetchProductData = async () => {
  //   try {
  //     const res = await axios.get("/products", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (res.status === 200) {
  //       await setProducts(res.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchLatestRelease = async () => {
  //   try {
  //     const res = await axios.get("/latest_releases", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (res.status === 200) {
  //       setLatest(res.data);
  //       console.log(latest);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchVideos = async () => {
  //   try {
  //     const res = await axios.get("/insta_videos", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (res.status === 200) {
  //       setInstaVideos(res.data);
  //       console.log(instaVideos);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchCategory = async () => {
  //   try {
  //     const res = await axios.get("/categories", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (res.status === 200) {
  //       setCategories(res.data);
  //       console.log(categories);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchProductData(setProducts);
    fetchLatestRelease(setLatest);
    fetchVideos(setInstaVideos);
    fetchCategory(setCategories);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="row justify-content-center main-layout">
        {/* Latest Rellease section */}

        <LatestReleaseCard latest={latest} />

        {/* Banner intermediate */}
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
        {/* Latest Releases Products section*/}
        {products ? (
          <LatestReleasesProducts products={products} />
        ) : (
          <CircularProgress color="inherit" />
        )}

        {/* Category card section */}

        <CategoryContainer categories={categories} />

        {/* Shop New Releases Button */}
        <div className="row justify-content-center mt-5 mb-3">
          <button className="shop-new-releases-btn">SHOP NEW RELEASES</button>
        </div>
        {/* Trending Videos section */}
        <TrendinVideoContainer instaVideos={instaVideos} />
      </div>
    </div>
  );
}

export default Home;
