/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useRef } from "react";

import { fetchProductData } from "../api/apiFetch.js";
import ProductCard from "../components/ProductCard";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../app/features/productFeatures/productApiSlice.js";

function Products({ toggleDrawer }) {
  const [searchParams] = useSearchParams();
  // console.log(search.get("category"));
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // console.log(searchParams.get("category"));

  const category = searchParams.get("category");

  const subCategory = encodeURIComponent(searchParams.get("sub"));
  const sortName = searchParams.get("sort");
  const sortValue = searchParams.get("value");

  const {
    data: newData,
    isLoading,
    isSuccess,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetProductsByCategoryQuery({
    category,
    subCategory,
    sortName,
    sortValue,
  });

  console.log(newData);
  const { products = [] } = newData || {};
  const scrollerRef = useRef();

  const navigate = useNavigate();
  const handleFilter = (e) => {
    const [sortName, sortValue] = e.target.value.split(",");

    navigate(
      `?category=${category}&sub=${subCategory}&sort=${sortName}&value=${sortValue}`
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    toggleDrawer(false);
    refetch();
    // scrollerRef.scrollTo(0, 0);
    // console.log(products);
  }, [category, subCategory, sortName, sortValue]);

  return (
    <div className="container " ref={scrollerRef} style={{ maxHeight: "100%" }}>
      <div className="row justify-content-center">
        <h3 className="text-center">{category}</h3>
        <hr style={{ width: 70, border: "2px solid black", marginTop: 8 }} />
      </div>
      <div className="row justify-content-center">
        <div className="col-12 ">
          <label htmlFor="sort">
            <span>Filter:</span>
          </label>
          <select
            name="filters"
            id="sort"
            style={{ borderRadius: 0 }}
            onChange={(e) => handleFilter(e)}
          >
            {" "}
            <option value="createdAt,desc">Newest First</option>
            <option value="productPrice,asce">Price Low to High</option>
            <option value="productPrice,desc">Price High to Low</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center" style={{ width: "100%" }}>
        {" "}
        {products?.map((product, idx) => {
          return (
            <div
              className="col-11 col-xs-10  col-md-5 col-lg-4 col-xl-4 col-xxl-3 my-3 "
              key={idx}
            >
              <ProductCard key={idx} product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
