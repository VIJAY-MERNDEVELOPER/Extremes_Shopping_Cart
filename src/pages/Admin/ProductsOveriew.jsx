import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productState } from "../../app/features/productFeatures/productSlice";
import { getAllProducts } from "../../app/features/productFeatures/productService";
import ProductsOveriewTable from "../../components/Admin/ProductsOveriewTable";

function ProductsOveriew() {
  const dispatch = useDispatch();
  const { product, status, message } = useSelector(productState);
  const [noOfPages, setNoOfPages] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllProducts());
      console.log(product);
    }
    if (status === "success") {
      const totalPages = Math.ceil(product.length / 10);

      setNoOfPages(totalPages);
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div style={{ height: "100vh" }}>...Loading</div>;
  }
  if (status === "failed") {
    return (
      <div style={{ height: "100vh" }}>
        {" "}
        <span>{message}</span>
      </div>
    );
  }
  return (
    <div style={{ width: "100%" }}>
      <ProductsOveriewTable noOfPages={noOfPages} />
    </div>
  );
}

export default ProductsOveriew;
