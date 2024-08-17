/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { fetchProductData } from "../api/apiFetch.js";
import ProductCard from "../components/ProductCard";

function Products({ products, setProducts, toggleDrawer }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams
    .get("category")
    .split("-")
    .join(" ")
    .toUpperCase();
  const price = searchParams.get("price");
  const filterValue = searchParams.get("value");
  console.log(price);
  console.log(category);
  console.log(filterValue);

  const scrollerRef = useRef();

  const navigate = useNavigate();
  const handleFilter = (e) => {
    const values = e.target.value.split(",");

    navigate(
      `/products?category=${category}&sort=${values[0]}&value=${values[1]}`
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductData(setProducts);
    toggleDrawer(false);
    // scrollerRef.scrollTo(0, 0);
    // console.log(products);
  }, []);

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
            <option value="price,asce">Price Low to High</option>
            <option value="price,desc">Price High to Low</option>
            <option value="date,asce">Newest First</option>
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
