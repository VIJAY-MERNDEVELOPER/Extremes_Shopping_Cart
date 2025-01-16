import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productState } from "../../app/features/productFeatures/productSlice";
import { getAllProducts } from "../../app/features/productFeatures/productService";
import ProductsOveriewTable from "../../components/Admin/ProductsOveriewTable";
import { useGetProductsQuery } from "../../app/features/productFeatures/productApiSlice";

function ProductsOveriew() {
  return (
    <div style={{ minHeight: "59vh" }}>
      <ProductsOveriewTable />
    </div>
  );
}

export default ProductsOveriew;
