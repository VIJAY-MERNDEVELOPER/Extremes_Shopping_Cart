/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import DividerComponent from "./DividerComponent";
import ProductCard from "./ProductCard";
import {
  useGetProductsPaginationQuery,
  useGetProductsQuery,
} from "../app/features/productFeatures/productApiSlice";

function LatestReleasesProducts() {
  const {
    data: newData,
    isLoading,
    isSuccess,
    isFetching,
    isError,
    error,
  } = useGetProductsQuery();
  console.log(newData);
  const { products = [], totalProducts = 1 } = newData || {};
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef(null);

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
        // console.log("left+width", Math.round(scrollLeft + clientWidth));
        // console.log("scrollwidth", scrollWidth);
        setIsAtEnd(Math.round(scrollLeft + clientWidth) === scrollWidth);
        // console.log(isAtEnd);
      }, 3000); // Adjust delay as needed
    }

    // console.log(categoryContainer.classList);
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setScrollPosition(scrollLeft);
      setIsAtEnd(Math.round(scrollLeft + clientWidth) === scrollWidth);
      // console.log("left+width", Math.round(scrollLeft + clientWidth));
      // console.log("scrollwidth", scrollWidth);
    };
    container.addEventListener("scroll", handleScroll);

    // return () => {
    //   container.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <>
      {" "}
      <DividerComponent
        content={"LATEST RELEASES"}
        handleScroll={handleScroll}
        scrollPosition={scrollPosition}
        isAtEnd={isAtEnd}
      />
      <div className="row justify-content-center flex-nowrap my-3 ">
        <div
          ref={containerRef}
          className="d-flex gap-3  product-container"
          style={{
            overflow: "auto",
            width: "100%",
            scrollbarWidth: "none",
            marginLeft: 0,
            paddingLeft: 0,
          }}
        >
          {" "}
          {products?.map((product) => {
            return (
              <div
                className="col-8 col-sm-3  col-md-4 col-lg-3 col-xl-3 col-xxl-2  "
                key={product._id}
              >
                <ProductCard key={product._id} product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LatestReleasesProducts;
