/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";

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
import { useGetCartProductsQuery } from "../app/features/cartFeatures/cartApiSlice";

function Home({ products, setProducts }) {
  const [latest, setLatest] = useState();
  const [categories, setCategories] = useState();
  const [instaVideos, setInstaVideos] = useState();

  // const {
  //   data: { cart, message },
  //   isLoading,
  //   isError,
  //   isSuccess,
  //   error,
  // } = useGetCartProductsQuery();

  useEffect(() => {
    fetchLatestRelease(setLatest);
    fetchVideos(setInstaVideos);
    fetchCategory(setCategories);
  }, []);

  return (
    <div
      className="home-container"
      style={{
        maxWidth: "100%",
      }}
    >
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

        <LatestReleasesProducts />

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
